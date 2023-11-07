window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});
var playerships = []
//var pship2;
//var pship3;
//var pship4;
//var pship5;
//var pship6;
let font,
  fontsize = 40;
  
var enemyships = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  player = {
    pos: createVector(width/2,height-100),
    health: 100,
    score: 0,
    sprite: 0
  }
  healthbar = new HealthBar(width-150,25,100,20,100)
  wave = 1
  wait = null
  lasers = []
  enemies = []
  generateEnemies(3,0,10,0);
}
function preload() {
  //loads the sprites and fonts
  font = loadFont('assets/Silkscreen-Regular.ttf');
  playerships.push(loadImage('assets/playership.png'));
  playerships.push(loadImage('assets/playership2.png'));
  playerships.push(loadImage('assets/playership3.png'));
  playerships.push(loadImage('assets/playership4.png'));
  playerships.push(loadImage('assets/playership5.png'));
  playerships.push(loadImage('assets/playership6.png'));
  enemyships.push(loadImage('assets/enemyship.png'));
  enemyships.push(loadImage('assets/enemyship2.png'));
}
function draw() {
  if (enemies.length == 0) {
    text("Wave "+wave,width/2,height/2);
    wave += 1
    if(wave == 3 || wave == 6) {
    player.sprite+=1
    text("New Ship Unlocked!",width/2,height/2+50);
    }
    wait = millis()
    generateEnemies(3, 0,wave*10,0)
    if(wave < 7) {
      generateEnemies(wave,wave*-50,wave*20,1)
    } else {
      generateEnemies(3,-150,60,1)
    }
  }
  if (wait+500 >= millis()) {
    textAlign(CENTER);
    text("Wave " + wave,width/2,height/2);
   if(wave == 3 || wave == 6) {
      text("New Ship Unlocked!",width/2,height/2+50);
   }
  }

  textSize(fontsize);
  background(100,90)
  image(playerships[player.sprite],player.pos.x-20,player.pos.y,40,40)
  //for each laser. If touching the player, delete the laser and remove player health
  for(let i = 0; i < lasers.length; i++) {
    lasers[i].display()
    lasers[i].move()
    if (p5.Vector.sub(lasers[i].pos, player.pos).mag() <= 20 && lasers[i].enemy) { 
      player.health -=lasers[i].damage;
      lasers.splice(i,1);
      i-=1
    }

  }
  //enemy code. Makes the enemies move, shoot, and take damage
  for(let i = 0; i < enemies.length; i++) {
    enemies[i].display()
    enemies[i].move()
    var shoot = int(random(300))/wave;
    if(shoot == 1) {
      enemies[i].shoot()
    }
    for(let g = 0; g<lasers.length;g++) {
     if(lasers[g].enemy == false) {
       if (p5.Vector.sub(lasers[g].pos, enemies[i].pos).mag() <= 20) {
         if(lasers[g].damage >= enemies[i].health) {
           enemies.splice(i,1)
           i -= 1
           player.score += 1;
         } else {
           enemies[i].health -= lasers[g].damage
         }
         lasers.splice(g,1);
         break;
       }
     }
    }

  }
  //Controls
  if(keyIsDown(65)){
    player.pos.x -= 10
  }
  if(keyIsDown(68)){
    player.pos.x += 10
  }
  //UI
  healthbar.display()
  healthbar.updateHealth(player.health)
  fill('black')
  noStroke()
  text(player.score, 50,50)
}

function mouseDragged() {
  return
}

function mouseReleased() {
   return;
   
  
}
//Shoots
function keyReleased() {
  if(keyCode == 32) {
    if (player.sprite == 0) {
    lasers.push(new Laser(player.pos.x,player.pos.y,false,10,'orange'))
    } else if (player.sprite == 1) {
    lasers.push(new Laser(player.pos.x-10,player.pos.y,false,10,'#3FAAFA'))
    lasers.push(new Laser(player.pos.x+10,player.pos.y,false, 10,'#3FAAFA'))
    } else if (player.sprite == 2) {
    lasers.push(new Laser(player.pos.x,player.pos.y+20,false,10,'white'))
    lasers.push(new Laser(player.pos.x,player.pos.y,false,10,'white'))
    lasers.push(new Laser(player.pos.x,player.pos.y-20,false,10,'white'))
    lasers.push(new Laser(player.pos.x,player.pos.y-40,false,10,'white'))
    } else if (player.sprite == 3) {
    lasers.push(new Laser(player.pos.x,player.pos.y,false,50,'#9D0000'))
    lasers.push(new Laser(player.pos.x-15,player.pos.y+25,false,50,'#9D0000'))
    lasers.push(new Laser(player.pos.x+15,player.pos.y+25,false,50,'#9D0000'))
    } else if (player.sprite == 4) {
    lasers.push(new Laser(player.pos.x,player.pos.y,false,60,'#00E333'))
    lasers.push(new Laser(player.pos.x-5,player.pos.y+2,false,60,'#00E333'))
    lasers.push(new Laser(player.pos.x+5,player.pos.y+2,false,60,'#00E333'))


    } else if (player.sprite == 5) {
      lasers.push(new Laser(player.pos.x,player.pos.y,false,100,'#00E333'))
    }
  }
}
//enemy setup code
function generateEnemyRow(count,y,health,sprite) {
  var x = width/(count*2)
    for(var i = 0; i< count; i++) {
      enemies.push(new Enemy(x,y,health,sprite))
      x += width/count
    }
}
function generateEnemies(rows,y,health,sprite) {
    for(var i = 0; i< rows; i++) {
      generateEnemyRow(15,y+50*i,health,sprite)
    }
}
