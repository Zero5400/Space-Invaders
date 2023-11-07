class Enemy {
  constructor(x,y,health,sprite) {
    this.pos = createVector(x,y)
    this.health = health;
    this.sprite = sprite;
  }
  shoot() {
    lasers.push(new Laser(this.pos.x,this.pos.y,true, 10, 'red'))
  }
  display() {
    image(enemyships[0],this.pos.x-20,this.pos.y-20,40,40)
  }
  move() {
    this.pos.y += 0.1
  }
}
