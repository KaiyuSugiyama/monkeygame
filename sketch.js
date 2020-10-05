
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, bananaGroup;
var score;
var survivalTime = 0;



function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  monkey = createSprite(80,315,900,10);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
   
}


function draw() {
  createCanvas(400,400);
  
  monkey.collide(ground);
  
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(ground.x < 0){
      ground.x = ground.width/2;
  }
  
  if(frameCount % 80 === 0){
    makeBanana();
  }
  if(frameCount % 300 === 0) {
    makeObstacle();
  }
  survival();
  survivalTime = frameCount;
      
  drawSprites();
}
  
function obstacleGroup() {
  if(frameCount % 300 === 0){
    var obstacle = createSprite(400,165,10,40);
    obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);  
              break;
      default: break;
    }
  }
}

function food() {
  
}

function makeBanana() {
   bananaSprite = createSprite(400,200,20,20);
   bananaSprite.addImage(bananaImage);
   var rand = Math.round(random(120,200));
   bananaSprite.scale = 0.2;
   bananaSprite.y = rand;
   bananaSprite.velocityX = -5
   bananaSprite.lifetime = 100;
   bananaGroup.add(bananaSprite);
}

function makeObstacle() {
  obstacleSprite = createSprite(400,310,20,20);
  obstacleSprite.addImage(obstacleImage);
  obstacleSprite.scale = 0.2;
  obstacleSprite.velocityX = -5
  obstacleSprite.lifetime = 100;
  obstacleGroup.add(obstacleSprite);
}
  
function survival() {
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score, 300,50);
    
  stroke("black");
  textSize(20);
  fill("black")
  suvivalTime = Math.ceil(frameCount/frameRate);
  text("Survival Time: "+survivalTime, 100,50);
}
  