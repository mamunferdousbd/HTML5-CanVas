var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



var x =Math.random() *innerWidth;
var y =Math.random()* innerHeight;
var dx = Math.random()* -0.5;
var dy = Math.random()* -0.5;
var radius =50;
function  animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI,false);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    console.log("Done");
    if(x + radius > innerWidth || x-radius < 0){
        dx = -dx;
    }
   
    if(y + radius > innerHeight || y-radius < 0){
        dy = -dy;
    }
    x+=dx;
    y+= dy;
    
}
animate();





