var ganesh,crane1,crane2,crane3,crane4,crane5,crane6,crane7,waterbody1,wall2,wall3,wall4,
wall5,wall6,wall7,wall8,waterbody2,waterbody3,waterbody4,waterbody5,
waterbody6,waterbody7,waterbody8,truck,backgroundImage,ground,sound1,wall1,waterbody9,
waterbody10,waterbody11;

var ganesh_image,crane1_image,crane2_image,crane3_image,waterbody_image,truck_image,
bg_image,ground_image,sound1_sound,wall_image;




function preload(){
    crane1_image = loadImage("crane1.png");
    crane2_image = loadImage("crane2.png");
    crane3_image = loadImage("crane2.png");   
    crane4_image = loadImage("crane4.png");
    crane5_image = loadImage("crane5.png");
    crane7_image = loadImage("crane2.png"); 
    crane6_image = loadImage("crane2.png"); 
    bg_image = loadImage ("bg.png");
    ganesh_image = loadImage("ganesh.png");
    truck_image = loadImage("truck.png");
    waterbody_image = loadImage("waterbody.png");
    backgroundImage = loadImage ("bg.png");
    ground_image = loadImage("ground.png");
    sound1_sound= loadSound("sound1.mp3");

}

function setup() {
    createCanvas(1350,635);


    crane1 = createSprite(550,350,10,10);
    crane1.addImage(crane1_image);
    crane1.scale = 0.8;

    crane2 = createSprite(600,200,10,10);
    crane2.addImage(crane2_image);
    crane2.scale = 0.4;

    crane6 = createSprite(1000,150,10,10);
    crane6.addImage(crane2_image);
    crane6.scale = 0.4;

    crane3 = createSprite(820,150,10,10);
    crane3.addImage(crane2_image);
    crane3.scale = 0.4;
 


    ground = createSprite(90,550,10,10);
    ground.addImage(ground_image);

    ganesh = createSprite(70,460,10,10);
    ganesh.addImage(ganesh_image);
    ganesh.scale = 0.5

    truck = createSprite(90,450,10,10);
    truck.addImage(truck_image);
    truck.scale = 0.7

    waterbody1 = createSprite(1125,450,10,10);
    waterbody1.addImage(waterbody_image);

    waterbody2 = createSprite(1125,480,10,10);
    waterbody2.addImage(waterbody_image);

    waterbody3 = createSprite(1125,510,10,10);
    waterbody3.addImage(waterbody_image);
    
    waterbody4 = createSprite(1125,550,10,10);
    waterbody4.addImage(waterbody_image);

    crane4 = createSprite(820,150,10,10);
    crane4.addImage(crane4_image);
    crane4.scale = 0.3;

    crane5 = createSprite(820,200,10,10);
    crane5.addImage(crane5_image);
    crane5.scale = 0.3;

    crane7 = createSprite(1000,118,10,10);
    crane7.addImage(crane2_image);
    crane7.scale = 0.5;


    wall1 = createSprite(1120,210,10,1000);
    wall2 = createSprite(1100,210,10,1000);
    wall3 = createSprite(1000,170,1000,10);
    wall4 = createSprite(650,170,10,1000);
    wall5 = createSprite(630,170,10,1000);
    wall6 = createSprite(1000,470,1000,10);
    wall7 = createSprite(900,110,10,1000);
    wall8 = createSprite(800,110,10,1000);
    
}



function draw() {
    background(backgroundImage);
    drawSprites();

    if (keyDown("LEFT_ARROW")){
        truck.x = truck.x-10; 
        sound1_sound.play();
          
    }

    if(keyDown("RIGHT_ARROW")){
        truck.x = truck.x+1;
        sound1_sound.play();
    }

    if (keyDown("LEFT_ARROW")){
        ganesh.x = ganesh.x-1; 
          
    }

    if(keyDown("RIGHT_ARROW")){
        ganesh.x = ganesh.x+1;
    }


    if(keyDown("D")){
    crane5.x=crane5.x+3;
    ganesh.x = ganesh.x+3;
    }

    if(keyDown("A")){
        crane5.x=crane5.x-3;
        ganesh.x = ganesh.x-3;
    }

    if(keyDown("W")){
      crane5.y=crane5.y-3;
      ganesh.y = ganesh.y-3;
  }

  if(keyDown("S")){
    crane5.y=crane5.y+3;
    ganesh.y = ganesh.y+3;
}

    if (crane5.isTouching(ganesh)){
        crane5.x = ganesh.x;
    }

    else {
        ganesh.x = truck.x-20;
        ganesh.y = truck.y-75;
    }

    if (waterbody4.isTouching(ganesh)){
        ganesh.visible = false;
        ganesh.x= waterbody4.x;
        ganesh.y=waterbody4.y-20;
        
    }
    
    crane4.x = crane5.x;

    

    crane4.collide(wall1);
    crane5.collide(wall1);
    ganesh.collide(wall1);
    crane5.collide(wall2);
    crane5.collide(wall3);
    crane5.collide(wall6);
    crane5.collide(wall4);
    crane5.collide(wall5);
    crane4.collide(wall5);
    truck.collide(wall7);
    

    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;


    
    truck.y = ground.y-20;
}






















