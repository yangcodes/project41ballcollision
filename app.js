const canvasEl = document.querySelector("canvas");

const canvasContext = canvasEl.getContext("2d");

canvasEl.height = 600;
canvasEl.width = 800;

let xP = 400;
let yP = 300;
let radius = 50;
let speed = 10;

//arrow directions event listeners
let upDir = false;
let downDir = false;
let leftDir = false;
let rightDir = false;

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

//running the game -> the game loop
function runGame() {
  requestAnimationFrame(runGame);
  canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);
  arrowInputs();
  drawBall();
}
//moving balls
function arrowInputs() {
  if (upDir) {
    yP = yP - speed;
    console.log("the ball is moving");
  }
}

//drawing the ball
function drawBall() {
  canvasContext.fillStyle = "white";
  canvasContext.beginPath();
  canvasContext.arc(xP, yP, radius, 0, Math.PI * 2);
  canvasContext.fill();
}

//arrow key function
function keyDown(e) {
  //arrowup -38
  //arrowdown-40
  //arrowleft- 37
  //arrowright -39
  console.log(e);

  if (e.keyCode === 38) {
    upDir = true;
  }
  if (e.keyCode === 40) {
    downDir = true;
  }
  if (e.keyCode === 37) {
    leftDir = true;
  }
  if (e.keyCode === 39) {
    rightDir = true;
  }
}

function keyUp(e) {
  if (e.keyCode === 38) {
    upDir = false;
  }
  if (e.keyCode === 40) {
    downDir = false;
  }
  if (e.keyCode === 37) {
    leftDir = false;
  }
  if (e.keyCode === 39) {
    rightDir = false;
  }
}
runGame();
