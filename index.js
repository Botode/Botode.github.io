document.addEventListener('DOMContentLoaded', () => {
  const canv = document.getElementById('canv');
  canv.width = window.innerWidth - 40;
  canv.height = window.innerHeight - 40;
  const canvWidth = canv.width;
  const canvHeight = canv.height;
  const ctx = canv.getContext('2d');
  const canvData = ctx.getImageData(0, 0, canvWidth, canvHeight);
  function drawPixel(x, y, r = 0, g = 0, b = 0, a = 255) {
    const index = (x + y * canvWidth) * 4;

    canvData.data[index + 0] = r;
    canvData.data[index + 1] = g;
    canvData.data[index + 2] = b;
    canvData.data[index + 3] = a;
  }
  function updateCanvas() {
    ctx.putImageData(canvData, 0, 0);
  }

  function drawPoint(x, y, d = 4, c = [0, 0, 0, 255]) {
    switch (c) {
      case 0: c = [0, 0, 0, 255]; break;
      case 1: c = [255, 0, 0, 255]; break;
      case 2: c = [0, 255, 0, 255]; break;
      case 3: c = [0, 0, 255, 255]; break;
    }
    ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${c[3]})`;
    ctx.beginPath();
    ctx.arc(x, y, d / 2, 0, 2 * Math.PI);
    ctx.fill();
  }
  function drawLine(x0, y0, x1,y1, c = [0, 0, 0, 255]) {
    switch (c) {
      case 0: c = [0, 0, 0, 255]; break;
      case 1: c = [255, 0, 0, 255]; break;
      case 2: c = [0, 255, 0, 255]; break;
      case 3: c = [0, 0, 255, 255]; break;
    }
    ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${c[3]})`;
    ctx.beginPath();
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1,y1);
    ctx.closePath();
    ctx.stroke();
  }
  function drawText(k, x, y, c) {
    switch (c) {
      case 0: c = [0, 0, 0, 255]; break;
      case 1: c = [255, 0, 0, 255]; break;
      case 2: c = [0, 255, 0, 255]; break;
      case 3: c = [0, 0, 255, 255]; break;
    }
    ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${c[3]})`;
    ctx.font = "12px serif";
    ctx.fillText(k, x + 5, y);
  }

  function getDistance(x0, y0, x1, y1) {
    return Math.sqrt((x0 - x1) ** 2 + (y0 - y1) ** 2);
  }
  function sortPoints(a, b) {
    return a[2] - b[2];
  }
  function findMinDist(a, beginpos) {
    let i = beginpos;
    while (i >= 0 && i < dists.length) {
      if (dists[i][0] == a || dists[i][1] == a) return i;
      i += 1;
    }
    if (i < 0 || i >= dists.length) return -1;
  }
  function compareDensity(a, b) {
    if (a == b) return -1;
    if ((a == startPoint && b == endPoint) || (a == endPoint && b == startPoint)) return -1;
    if ((a == startPoint || a == endPoint)) return b;
    if ((b == startPoint || b == endPoint)) return a;
    let diff = 0;
    let pos_a = 0;
    let pos_b = 0;
    do {
      pos_a = findMinDist(a, pos_a);
      pos_b = findMinDist(b, pos_b);
      if (pos_a == pos_b) {
        pos_a = findMinDist(a, pos_a + 1);
        pos_b = findMinDist(b, pos_b + 1);
      }
      if (pos_a == -1) return a;
      if (pos_b == -1) return b;
      let diff = dists[pos_a][2] - dists[pos_b][2];
      if (diff < 0) return a;
      if (diff > 0) return b;
    } while (diff == 0);
  }
  function deletePoint(a) {
    for (let i = 0; i < dists.length; i += 1) {
      if (dists[i][0] == a || dists[i][1] == a) {
        dists.splice(i, 1);
        i -= 1;
      }
    }
    delete points[a];
  }
  function thinoutPoints(m) {
    let cur_index = 0;
    do {
      let delPoint = -1;
      do {
        delPoint = compareDensity(dists[cur_index][0], dists[cur_index][1]);
        if (delPoint == -1) cur_index += 1;
      } while (delPoint == -1);
      deletePoint(delPoint);
    } while (Object.keys(points).length > m)
  }
  function setControlPoint(k) {
    if (origin_points[k].c == 0)
      origin_points[k].c = 3;
  }
  function setControlPoints() {
    Object.keys(points).forEach((k) => setControlPoint(k));
  }
  function buildRoute() {
    route.push(startPoint);

    let curPoint = startPoint;
    let nextPoint = startPoint;
    let pos = 0;
    do {
      pos = findMinDist(curPoint, pos);

      if (pos == -1) {
        route.push(endPoint);
        break;
      }

      nextPoint = dists[pos][0] == curPoint ? dists[pos][1] : dists[pos][0];

      if (nextPoint == endPoint) { pos += 1; continue; }
      if (route.indexOf(nextPoint) != -1) { pos += 1; continue; }

      curPoint = nextPoint;
      route.push(nextPoint);
      pos = 0;
    } while (true);
  }
  function displayPoints() {
    Object.values(origin_points).forEach(({ x, y, d, c }) => drawPoint(x, y, d, c));
    // Object.entries(origin_points).forEach(([k, { x, y, d, c }]) => drawText(k, x, y, c));
  }
  function displayRoute() {
    for ( let i = 0; i < route.length-1; i+=1) {
      drawLine(points[route[i]].x,points[route[i]].y,points[route[i+1]].x,points[route[i+1]].y,0);
    }
  }
  function displayDump() {
    console.log(origin_points);
    console.log(origin_dists);
    console.log(points);
    console.log(dists);
    console.log(route);
  }

  const n = 100;

  const origin_points = {};
  for (let i = 0; i < n; i += 1) {
    origin_points[i] = { x: (Math.random() * 0.9 + 0.05) * canvWidth, y: (Math.random() * 0.9 + 0.05) * canvHeight, d: 4, c: 0 };
  }

  const origin_dists = [];
  for (let i = 0; i < n - 1; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      origin_dists.push([i, j, getDistance(
        origin_points[i].x, origin_points[i].y,
        origin_points[j].x, origin_points[j].y
      )]);
    }
  }

  origin_dists.sort(sortPoints);

  let startPoint = 0;
  let endPoint = 0;
  startPoint = Math.floor(Math.random() * n);
  while ((endPoint = Math.floor(Math.random() * n)) == startPoint);
  origin_points[startPoint].c = 1; origin_points[startPoint].d = 6;
  origin_points[endPoint].c = 2; origin_points[endPoint].d = 6;

  let dists = JSON.parse(JSON.stringify(origin_dists));
  let points = JSON.parse(JSON.stringify(origin_points));
  thinoutPoints(10);
  setControlPoints();
  let route = [];
  buildRoute();

  displayPoints();
  displayRoute();

  displayDump();
});
