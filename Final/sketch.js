let lasers= []
let enemies=[]
let score = 0

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++){
    let enemy = {
      x: random(0, width),
      y: random(-800, 0)
    }
    enemies.push(enemy)
    
  }
}

function draw() {
  background(220);
square(mouseX,height - 40,25)
for (let laser of lasers){
  square(laser.x, laser.y, 10)
  laser.y -= 10
}
  for (let enemy of enemies){
    enemy.y += 2
    circle(enemy.x, enemy.y, 9)
    if (enemy.y > height){
      text("GAME OVER!", width/2, height/2)
      noLoop()
    }
  }
  for (let enemy of enemies){
    for (let laser of lasers){
      if (dist(enemy.x, enemy.y, laser.x, laser.y) < 9){
        enemies.splice(enemies.indexOf(enemy),1)
        lasers.splice(lasers.indexOf(laser),1)
        {
    let newEnemy = {
      x: random(0, width),
      y: random(-800, 0)
    }
    enemies.push(newEnemy);
          score += 1
    
  }
      }
    }
    
  }
    text(score, 26, 26)
  
}

function mousePressed() {
  let laser = {
    x: mouseX,
    y: height - 50
  }
lasers.push(laser)
  }
