class Enemy {
  constructor(x,y,sprite) {
    this.pos = createVector(x,y)
    this.health = 1;
    this.sprite = sprite;
  }
  shoot() {
    lasers.push(new Laser(this.pos.x,this.pos.y,true,'red'))
  }
  display() {
    image(enemyships[0],this.pos.x-20,this.pos.y-20,40,40)
  }
  move() {
    this.pos.y += 0.1
  }
}
