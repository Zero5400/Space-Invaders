class Laser {
  constructor(x,y,enemy, damage,color) {
    this.pos = createVector(x,y);
    this.enemy = enemy;
    this.color = color;
    this.damage = damage
  }
  display() {
    strokeWeight(5)
    stroke(this.color)
    circle(this.pos.x,this.pos.y,2)
    stroke('black')
    noStroke()
  }
  move() {
    if(this.enemy) {
      this.pos.y += 10  
    } else {
      this.pos.y -= 10  
    }
  }
}
