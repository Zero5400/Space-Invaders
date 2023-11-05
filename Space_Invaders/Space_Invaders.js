var playerships = []
//var pship2;
//var pship3;
//var pship4;
//var pship5;
//var pship6;
var enemyships = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
  player = {
    pos: createVector(width/2,height-100)
  }
  lasers = []
  enemies = []
  generateEnemies(3,100)
}
function preload() {
  playerships.push(loadImage('assets/playership.png'));
  playerships.push(loadImage('assets/playership2.png'));
  playerships.push(loadImage('assets/playership3.png'));
  playerships.push(loadImage('assets/playership4.png'));
  playerships.push(loadImage('assets/playership5.png'));
  playerships.push(loadImage('assets/playership6.png'));
  enemyships.push(loadImage('assets/enemyship.png'));
}
function draw() {
  background(100,90)
  image(playerships[5],player.pos.x-20,player.pos.y,40,40)
  for(let i = 0; i < lasers.length; i++) {
    lasers[i].display()
    lasers[i].move()
  }
  for(let i = 0; i < enemies.length; i++) {
    var shoot = int(random(600));
    if(shoot == 1) {
      enemies[i].shoot()
    }
    for(let g = 0; g<lasers.length;g++) {
     if(lasers[g].enemy == false) {
       if (p5.Vector.sub(lasers[g].pos, enemies[i].pos).mag() <= 20) {
         enemies.pop(i)
       }
     }
    }
    enemies[i].display()
    enemies[i].move()
  }
  if(keyIsDown(65)){
    player.pos.x -= 10
  }
  if(keyIsDown(68)){
    player.pos.x += 10
  }
}

function mouseDragged() {
  return
}

function mouseReleased() {
   return;
  
}

function keyReleased() {
  if(keyCode == 32) {
    lasers.push(new Laser(player.pos.x,player.pos.y,false))
    console.log(keyCode);
  }
}
function generateEnemyRow(count,y) {
  var x = width/(count*2)
    for(var i = 0; i< count; i++) {
      enemies.push(new Enemy(x,y))
      x += width/count
    }
}
function generateEnemies(rows) {
    for(var i = 0; i< rows; i++) {
      generateEnemyRow(15,50*i)
    }
}
