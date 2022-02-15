var a,b,c,d;
var stiv;
var stivImg;
var pastoImg;
function preload(){
stivImg=loadImage("Stiv.jpg");
pastoImg=loadImage("Pasto.jpg");
}
function setup(){
createCanvas (600,600);
a = createSprite(-150,10,20,200);
b = createSprite(120,80,20,450);
c = createSprite(150,200,400,20);
d = createSprite(100,-80,500,20);


//declara un sprite para tu personaje

stiv = createSprite(100,100,10,10);
stiv.addImage(stivImg);
stiv.scale=0.2;

}

function draw(){
background(pastoImg);
if(keyDown("d")){
  stiv.x+=2;
}
if(keyDown("w")){
  stiv.y-=2;
}
if(keyDown("s")){
  stiv.y+=2;
}
if(keyDown("a")){
  stiv.x-=2;
}
camera.position.x=stiv.x;
camera.position.y=stiv.y;
drawSprites();

}