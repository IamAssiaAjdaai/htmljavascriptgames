let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;
canvas.style.background = "#fe9";

class Circle {
constructor(xpos, ypos, radius, color, text, speed) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.speed = speed;

    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
}

draw(ct) {
    ct.beginPath();
    ct.strokeStyle = this.color;
    ct.textAlign = "center";
    ct.textBaseline = "middle";
    ct.font = "20px Arial";
    ct.fillText(this.text, this.xpos, this.ypos);
    //context.strokeText(this.text,this.xpos,this.ypos);
    ct.lineWidth = 5;
    ct.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    ct.stroke();
    ct.closePath();
}
update(){
    this.draw(context);
    }
}

let circle_counter = 1;
let randomx = Math.random() * window_width;
let randomy = Math.random() * window_height;

let mycircle = new Circle(randomx, randomy, 50, "dark green", circle_counter,1);

let createcircle = function (circle) {
circle.draw(context);
};



/*for (var i = 0; i < 1; i++) {
  let randomx = Math.random() * window_width;
  let randomy = Math.random() * window_height;
  all_circles.push(mycircle);
  createcircle(all_circles[i]);
  circle_counter = i;
}*/

//Creating a object
/*context.fillStyle = "red";
context.fillRect(300,0,100,200);
context.fillRect(100,500,100,100);
context.beginPath();
context.arc(100, 100, 50, Math.PI*2,false);
context.strokeStyle = "green";
context.lineWidth = 20;
context.stroke();
context.closePath();*/
