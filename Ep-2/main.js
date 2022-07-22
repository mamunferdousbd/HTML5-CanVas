var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.moveTo(20, 300);
ctx.lineTo(200, 100);
// ctx.stroke();

// ctx.moveTo(200, 100);
ctx.lineTo(400, 300);

ctx.stroke();

console.log(canvas);