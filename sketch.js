var canvas,music,pink,blue,green,yellow,box;


function preload()
{
    music = loadSound("music.mp3");
}


function setup()
{
    canvas = createCanvas(800,600);

    box=createSprite(random(100,700),random(100,450),40,40);
    box.shapeColor="white";
    box.velocityY=4;
    box.velocityX=4;
    box.debug=true;

    pink=createSprite(70,570,150,40);
    pink.debug=true;
    pink.shapeColor="pink";

    blue=createSprite(280,570,150,40);
    blue.debug=true;
    blue.shapeColor="blue";

    green=createSprite(490,570,150,40);
    green.debug=true;
    green.shapeColor="green";

    

    yellow=createSprite(690,570,150,40);
    yellow.debug=true;
    yellow.shapeColor="yellow";
}

function draw() 
{
    background(rgb(36,34,36));

    createEdgeSprites();

    if(istouching(Edge,box))
    {
      box.velocityY=box.velocityY*-1;
      box.velocityX=box.velocityX*-1;
    }
    
    if(istouching(pink,box))
    {
      box.velocityY=box.velocityY*-1;
      box.velocityX=box.velocityX*-1;
      box.shapeColor="pink";
      music.play();
    }

    if(istouching(blue,box))
    {
      box.velocityY=0;
      box.velocityX=0;
      box.shapeColor="blue";
      music.stop();
    }

    if(istouching(green,box))
    {
      box.velocityY=box.velocityY*-1;
      box.velocityX=box.velocityX*-1;
      box.shapeColor="green"
      music.play();
    }

    if(istouching(yellow,box))
    {
      box.velocityY=box.velocityY*-1;
      box.velocityX=box.velocityX*-1;
      box.shapeColor="yellow"
      music.play();
    }

    drawSprites();
}
