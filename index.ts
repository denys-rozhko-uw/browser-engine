import { CanvasRenderingContext2D, Window as SkiaWindow } from "skia-canvas";

const win = new SkiaWindow(300, 300);
win.title = "Canvas Window";
win.on("draw", (e) => {
  const ctx = e.target.canvas.getContext("2d") as CanvasRenderingContext2D;

  ctx.lineWidth = 25 + 25 * Math.cos(e.frame / 10);
  ctx.beginPath();
  ctx.arc(150, 150, 50, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(150, 150, 10, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
});
