var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext('2d');
context.fillRect(100, 100, 100, 100);
context.fillRect(200, 200, 100, 100);
context.fillRect(300, 100, 100, 100);
context.fillRect(300, 300, 100, 100);
context.fillRect(400, 400, 100, 100);
context.fillRect(100, 300, 100, 100);
context.fillRect(400, 200, 100, 100);
context.fillRect(200, 400, 100, 100);

context.fillStyle = "#fff";
context.fillRect(200, 100, 100, 100);
context.fillRect(100, 200, 100, 100);
context.fillRect(300, 200, 100, 100);
context.fillRect(200, 300, 100, 100);
context.fillRect(400, 100, 100, 100);
context.fillRect(400, 300, 100, 100);
context.fillRect(100, 400, 100, 100);
context.fillRect(300, 400, 100, 100);



console.log(canvas);