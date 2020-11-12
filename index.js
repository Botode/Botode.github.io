document.addEventListener('DOMContentLoaded', () => {
  const canv = document.getElementById('canv');
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

  function drawPoint(x, y, d = 5, c = [0, 0, 0, 255]) {
    ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${c[3]})`;
    ctx.beginPath();
    ctx.arc(x, y, d / 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  function getDistance(x0, y0, x1, y1) {
    return Math.sqrt((x0 - x1) ** 2 + (y0 - y1) ** 2);
  }

  const n = 100;
  const points = [];
  for (let i = 0; i < n; i += 1) {
    points.push({ x: Math.random() * canvWidth, y: Math.random() * canvHeight });
  }
  points.forEach(({ x, y }) => drawPoint(x, y));
  const dists = [];
  for (let i = 0; i < points.length - 1; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      dists[i] = [];
      dists[i][j] = getDistance(points[i].x, points[i].y, points[j].x, points[j].y);
    }
  }

  console.log(dists);
});
