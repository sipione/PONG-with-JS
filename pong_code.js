//ball variables
let ballX = 300;
let ballY = 200;
let d = 13;
let r = d / 2 ;
let ballSpeedX = 6;
let ballSpeedY = 6;

//bat_a variables
let batX_a = 5;
let batY_a = 150;
let batWidth_a = 10;
let batHeight_a = 90;

//bat_b variables
let batX_b = 585;
let batY_b = 150;
let batWidth_b = 10;
let batHeight_b = 90;
let batSpeed_b = 5;

//game score
let scoreA = 0;
let scoreB = 0;

function preload(){
  ambiance = loadSound("trilha.mp3");
  hit = loadSound("raquetada.mp3");
  gol = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
  setInterval(init, 1000)
  ambiance.loop();
}

function draw() {
  
  background(0);
  circle(ballX, ballY, d);
  ballMoviment();
  impact();
  rect(batX_a, batY_a, batWidth_a, batHeight_a);
  rect(batX_b, batY_b, batWidth_b, batHeight_b);
  bat_aMoviment();
  batImpact();
  bat_bMoviment();
  score();
}

function ballMoviment(){
  ballX += ballSpeedX;
  ballY += ballSpeedY;
}

function impact(){
  if (ballX + r> width ||
     ballX - r< 0 || batImpact()){
    ballSpeedX *= -1;
  }
  if (ballY + r> height ||
     ballY - r < 0){
    ballSpeedY *= -1;
  }
}

function bat_aMoviment(){
  if (keyIsDown(UP_ARROW)&&batY_a>0){
    batY_a -= 10;
  }
  if (keyIsDown(DOWN_ARROW)&&batY_a+batHeight_a<400){
    batY_a += 10;
  }
}

function batImpact(){
  if (ballX - r < batX_a + batWidth_a && ballY - r < batY_a + batHeight_a && ballY + r > batY_a){
    hit.play()
    return true;
  }else if(ballX + r > batX_b && ballY - r < batY_b + batHeight_b && ballY + r > batY_b){
    hit.play()
    return true
  }
}

function bat_bMoviment(){
  if(ballY < batY_b + batHeight_b/2){
    batY_b -= batSpeed_b
  }else if (ballY > batY_b + batHeight_b/2){
    batY_b += batSpeed_b
  }
}

function score(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(scoreA, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(scoreB, 470, 26);
  if (ballX > 590){
    scoreA += 1;
    gol.play();
  }
  if (ballX < 10){
    scoreB += 1;
    gol.play();
  }
}
var num = 5
function init(){
  textSize(50)
  fill(color('white'))
  text(num)
  num--
}