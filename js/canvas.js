function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    canvas.class("p5canvas");
    noStroke();
  }


var angle = 0;
let bgcolor = 0
let sizefactor = 5

function draw() {
  background(bgcolor);
  translate(width/2, height/2);

  rotate(angle);


  fill(bgcolor)
  strokeWeight(4);
  stroke(230);
  ellipse(0, 0, width / sizefactor);
  noStroke();
  
  fill(255);
  arc(0, 0, width / sizefactor, width / sizefactor, 0, PI);

  fill(0);
  arc(0, 0, width / sizefactor, width / sizefactor, PI, TWO_PI);

  fill(255);
  translate(- width / sizefactor / 2 / 2, 0);
  ellipse(0, 0, width / sizefactor / 2);

  fill(0);
  translate(width / sizefactor / 2, 0);
  ellipse(0, 0, width / sizefactor / 2);

  fill(255);
  translate(0, 0);
  ellipse(0, 0, width / sizefactor / 2 / 3);

  fill(0);
  translate(- width / sizefactor / 2, 0);
  ellipse(0, 0, width / sizefactor / 2 / 3);
  
  angle -= 0.02;
}


  window.onresize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.size(w, h);
    width = w;
    height = h;
  }