class Enemy {
  xVelo = 10
  constructor(x,y,health,sprite) {
    this.pos = createVector(x,y)
    this.health = health;
    this.sprite = sprite;
  }
  shoot() {
    if (this.sprite == 0) {
      lasers.push(new Laser(this.pos.x,this.pos.y,true, 10, 'red'))
    } else {
      lasers.push(new Laser(this.pos.x,this.pos.y,true, 10, '#8B0700'))
    }
  }
  display() {
    image(enemyships[this.sprite],this.pos.x-20,this.pos.y-20,40,40)
  }
  move() {
    this.pos.y += 0.1
    if (this.sprite == 2)  {
    this.pos.x += this.xVelo
    if (this.pos.x <= 0|| this.pos.x >= width) {
      this.xVelo *= -1
    }
  }
  }
}
