const canvasEl = document.querySelector("canvas");

const canvasContext = canvasEl.getContext("2d");

canvasEl.height = 600;
canvasEl.width = 800;

let xP = 400;
let yP = 300;
let radius = 50;
let speed = 10;

//running the game -> the game loop
function runGame() {
  requestAnimationFrame(runGame);

  drawBall();
}

//drawing the ball
function drawBall() {
  canvasContext.fillStyle = "white";
  canvasContext.beginPath();
  canvasContext.arc(xP, yP, radius, 0, Math.PI * 2);
  canvasContext.fill();
}

runGame();
