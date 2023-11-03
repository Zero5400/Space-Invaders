function setup() {
  createCanvas(windowWidth, windowHeight);
  player = {
    pos: createVector(width/2,height-100)
  }
  lasers = []
}

function draw() {
  strokeWeight(2)
  background(100,50)
  circle(player.pos.x,player.pos.y,20)
  if(keyIsDown(65)){
    player.pos.x -= 10
  }
  if(keyIsDown(68)){
    player.pos.x += 10
  }
  for(let i = 0; i < lasers.length; i++) {
    lasers[i].display()
    lasers[i].move()
  }
}

function mouseDragged(){
  return
}

function mouseReleased(){
  return
  
}

function keyReleased(){
  if(keyCode == 32) {
    lasers.push(new Laser(player.pos.x,player.pos.y,false))
    console.log(keyCode);
  }
}
