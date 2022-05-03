var characterX = 100;
var characterY = 100;

var w = 66;
var s = 74;
var a = 59;
var d = 60;

var shapeX = 25;
var shapeY = 55;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var mouseShapeX;
var mouseShapeY;

var rectangleObject;

function setup()
{


createCanvas(600, 600);

rectangleObject = new Rectangle(100, 200, 10, 50, 120, 35, 210);
for(var i = 0; i< 30; i++) {
shapeXSpeeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeYSpeeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
shapeXs[i] = getRandomNumber(400);
shapeYs[i] = getRandomNumber(500);
diameters[i] = getRandomNumber(20);
}
createCharacter(200,350);
}


function draw()
{
    background(125,52,68)
    stroke(0);
    fill(0);

rectangleObject.display();

    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0, height-10,width, 10);
    rect(width-10,0,10,height-50);

    textSize(16);
    text("EXIT", width-50,height-50)


drawCharacter();
characterMovement();

    fill(29,40,123);
    for(var i = 0; i< 5; i++){
    circle(shapeXs [i], shapeYs[i], diameters[i]);
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() *5)) +1)
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() *5)) +1)
    }

if (shapeXs[i] < width) {
    shapeXs[i] = 0;
}
if (shapeYs[i] > height) {
    shapeYs[i] = 0;
}

if (shapeYs[i] < 0) {
    shapeYs[i] = height
}
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY +=10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }
    
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    fill(23,41,123);
        circle(characterX,characterY,25);
}
    fill(15,150,10)
    circle(shapeX, shapeY, 10);
    
    shapeXSpeeds = Math.floor(Math.random() * (Math.floor(Math.random() *5)) +1)
    shapeYSpeeds = Math.floor(Math.random() * (Math.floor(Math.random() *5)) +1)

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    if(shapeX > width)
    {
        shapeX =0;
    }
    if(shapeX <0)
    {
        shapeX = width;
    }
    if(shapeY > height)
{
    shapeY =0;
}
if(shapeY < 0)
{
    shapeY = height;
}

if(characterX > width && characterY > width-50)
{
    fill(0);
    stroke(5);
    textSize(26);
    text("Winner!", width/2-50, height/2-50);
}

fill(110,120,130);
circle(mouseShapeX, mouseShapeY, 25);
}
{


function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function characterMovement()
{

}

function createCharacter(x,y)
{
    fill(23,40,123)
    circle(characterX,characterY,25);
}
}