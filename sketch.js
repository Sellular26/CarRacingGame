var hypnoticBall, database;
var position;
var form, player, game;
var playerCount = 0;
var gameState = 0;
var allPlayers = [];
var backGroundImg;
var car1, car2, car3, car4, cars;
var carImg1, carImg2, carImg3, carImg4, track;
var rank = 0;
var addRank;

function preload() {
  backGroundImg = loadImage('carRaceBackground.jpg');
  carImg1 = loadImage('car1.png');
  carImg2 = loadImage('car2.png');
  carImg3 = loadImage('car3.png');
  carImg4 = loadImage('car4.png');
  track = loadImage('track.jpg');
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth - 50, displayHeight - 50);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){

  if(playerCount == 4) {
    gameState = 1;
    game.update(1);
  }
  if(gameState == 1) {
    clear();
    game.play();
  }
  if(gameState == 2) {
    game.end();
  }
}