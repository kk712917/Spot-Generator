let scribble;

//built in function to p5js, it runs once
var spot = {
  x: 300,
  y: 60
};


var col = {
  r: 205,
  g: 0,
  b: 0

};

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50,0);
  strokeWeight(1);
  frameRate(20);
  scribble = new Scribble();
  gui = new Gui();
  d = select('.div-block');
  d.position(0,0);
  
  
  let gui_setup = new dat.GUI();
  gui_setup.add(gui,'size',20,100).step(1);
  gui_setup.add(gui,'spots',2,40).step(1);
  gui_setup.addColor(gui,'fill');
  gui_setup.add(gui,'color');

  // stroke(40,25,90);
}

function draw() {

  col.r = random(40, 230);
  col.g = random(100, 10);
  col.b = random(50, 900);

  spot.x = random(0, width);
  spot.y = random(0, height);
  fill(col.r, col.g, col.b, 100);
  scribble.scribbleEllipse(spot.x, spot.y, 24, 24);
  scribble.maxOffset = 10;
  if (gui.spots == 2){
  scribble.scribbleEllipse(spot.x, spot.y, gui.size, gui.size);

  
  }
}


function Gui() {
  this.size = 20;
  this.spots = 100;
  this.color = true;
  this.fill = '#000000';

}