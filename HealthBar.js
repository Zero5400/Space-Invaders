class HealthBar {
  constructor(x,y,w,h,maxHealth){
     this.x = x;
     this.y = y;
     this.w = w;
     this.h = h;
     this.maxHealth = maxHealth;
     this.maxWidth = w;
     this.health = maxHealth
  }
  display() {
    strokeWeight(4);
    stroke('black');
    fill('black');
    rect(this.x,this.y,this.maxWidth,this.h);
    fill('green');
    rect(this.x,this.y,this.w,this.h);
  }
  updateHealth(health) {
    this.health = health
    this.w = (this.health / this.maxHealth) * this.maxWidth;
  }
}
