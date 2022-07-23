var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Rectangle
ctx.fillStyle= " rgba(158,10,12,0.7)";
ctx.fillRect(100,200,100,100);
ctx.fillStyle='#0096FF' ;
ctx.fillRect(300,400,100,100);

ctx.fillRect(500,100,100,100);
ctx.strokeStyle = "red";
ctx.strokeRect(498,98,104,104);
// ctx.stroke();

// Line
ctx.beginPath();
ctx.moveTo(20, 300);
ctx.lineTo(200, 100);
// ctx.stroke();
// ctx.moveTo(200, 100);
ctx.lineTo(500, 300);
ctx.stroke();


// Arc / Circle
// ctx.beginPath();
// ctx.arc(300,350,30,0,2*Math.PI,false);
// ctx.strokeStyle = 'blue';
// ctx.fillStyle= "#000";
// ctx.fill();
// ctx.stroke();

for(var i = 0; i <3 ; i++){
    var x =Math.random() *window.innerWidth;
    var y= Math.random() *window.innerHeight;
    ctx.beginPath();
    ctx.arc(x,y,50,0,2*Math.PI,false);
    ctx.fillStyle ="#000";
    ctx.fill();
    ctx.stroke();

}


