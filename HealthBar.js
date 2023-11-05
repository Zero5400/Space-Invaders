class HealthBar {
  constructor(x,y,w,h,maxHealth, color){
     this.x = x;
     this.y = y;
     this.w = w;
     this.h = h;
     this.maxHealth = maxHealth;
     this.maxWidth = w;
     this.health = maxHealth
     this.color = color;
  }
  display() {
    strokeWeight(8);
    stroke('black');
    fill('black');
    rect(this.x,this.y,this.w,this.h);
    fill(color);
    noFill();
    rect(this.x,this.y,this.w,this.h);
  }
}
