var lb,lbimg,ub,rb,db, dbimg;
var pole,poleimg;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,bigb,bigimg,simg,rimg,sb,sbimg;
var door,doorimg;
var pdimg,bdimg,vdimg,tpimg,pd1,pd2,bluediamond1,bluediamond2,vd1,vd2,tp1;
var dimg1,d1,edges;
var score=0;
var gameState="intro";
var poster

function preload(){
    lbimg=loadImage("dave bg(side wall).jpg");
    dbimg=loadImage("dave bg(ud).jpg");
    poleimg=loadImage("dave bg(pole1).png");
    simg=loadImage("dave bg(small w).jpg");
    rimg=loadImage("dave bg(wall4).jpg");
    bigimg=loadImage("dave bg(wall2).jpg");
    sbimg=loadImage("dave bg(stB).jpg");
    doorimg=loadImage("dave bg(door).jpg");
    pdimg=loadImage("dave bg(pink diamond1).png");
    bdimg=loadImage("dave bg(blueDiamond1).png");
    vdimg=loadImage("dave bg(vdiamond).png");
    tpimg=loadImage("dave bg(trophy).jpg");
    dimg1=loadImage("dave pc(red1).png");
    poster1Img=loadImage("poster1 .gif");
    posterImg2=loadImage("poster2.gif")


}
function setup(){

    createCanvas(windowWidth,windowHeight);
    lb=createSprite(width-1400,height-310,10,10);
    lb.addImage(lbimg);
    lb.scale=1.5;
    lb.visible=false;
     
    rb=createSprite(width-20,height-310,10,10);
    rb.addImage(lbimg);
    rb.scale=1.5;
    rb.visible=false;

    
    
    db=createSprite(width-700,height-20,10,10);
    db.addImage(dbimg);
    db.scale=1.5;
    db.visible=false
   // console.log(height);
    ub=createSprite(width-700,height-700,10,10);
    ub.addImage(dbimg);
    ub.scale=1.5;
    ub.visible=false;

    pole=createSprite(width-1320,height-95,10,10);
    pole.addImage(poleimg);
    pole.scale=1.5;
    pole.visible=false;

    b1=createSprite(width-1100,height-150,10,10);
    b1.addImage(simg);
    b1.visible=false;

    pinkdiamond1=createSprite(width-1100,height-200,10,10);
    pinkdiamond1.addImage(pdimg);
    pinkdiamond1.scale=0.3;
    pinkdiamond1.visible=false;

    b2=createSprite(width-1250,height-250,10,10);
    b2.addImage(simg);
    b2.visible=false;

    pinkdiamond2=createSprite(width-1250,height-300,10,10);
    pinkdiamond2.addImage(pdimg);
    pinkdiamond2.scale=0.3;
    pinkdiamond2.visible=false;

    b3=createSprite(width-900,height-250,10,10);
    b3.addImage(rimg);
    b3.visible=false;
    b3.visible=false;

   bluediamond3=createSprite(width-900,height-300,10,10);
    bluediamond3.addImage(bdimg);
    bluediamond3.scale=0.15;
    bluediamond3.visible=false;

    /*vd1=createSprite(width-100,height-400,10,10);
    vd1.addImage(vdimg);
    vd1.scale=0.5*/

    b4=createSprite(width-1100,height-350,10,10);
    b4.addImage(simg);
    b4.visible=false;
    b4.visible=false;

    bluediamond2=createSprite(width-1100,height-400,10,10);
    bluediamond2.addImage(bdimg);
    bluediamond2.scale=0.15;
    bluediamond2.visible=false;

    b5=createSprite(width-1250,height-450,10,10);
    b5.addImage(simg);
    b5.visible=false;
    b5.visible=false;

    bluediamond4=createSprite(width-1250,height-500,10,10);
    bluediamond4.addImage(bdimg);
    bluediamond4.scale=0.15;
    bluediamond4.visible=false;


    /*b6=createSprite(width-900,height-450,10,10);
    b6.addImage(simg);*/

    b6=createSprite(width-750,height-500,10,10);
    b6.addImage(simg);
    b6.visible=false;

    bluediamond5=createSprite(width-755,height-550,10,10);
    bluediamond5.addImage(bdimg);
    bluediamond5.scale=0.15;
    bluediamond5.visible=false;

    b7=createSprite(width-500,height-400,10,10);
    b7.addImage(rimg);
    b7.visible=false;

    bluediamond6=createSprite(width-500,height-450,10,10);
    bluediamond6.addImage(bdimg);
    bluediamond6.scale=0.15;
    bluediamond6.visible=false;


    b8=createSprite(width-700,height-150,10,10);
    b8.addImage(simg);
    b8.visible=false;

    b9=createSprite(width-300,height-480,10,10);
    b9.addImage(simg);
    b9.visible=false;

    trophy1=createSprite(width-300,height-537,10,10);
    trophy1.addImage(tpimg);
    trophy1.scale=1;
    trophy1.visible=false;

    b10=createSprite(width-150,height-350,10,10);
    b10.addImage(rimg);
    b10.visible=false;
    b10.visible=false;

    bluediamond7=createSprite(width-150,height-400,10,10);
    bluediamond7.addImage(bdimg);
    bluediamond7.scale=0.15;
    bluediamond7.visible=false;

    bigborder=createSprite(width-325,height-180,10,10);
    bigborder.addImage(bigimg);
    bigborder.visible=false;

    sideb=createSprite(width-480,height-110,10,10);
    sideb.addImage(sbimg);
    sideb.visible=false;

    door=createSprite(width-410,height-107,10,10);
    door.addImage(doorimg);
    door.scale=1.9;
    door.visible=false;

    d1=createSprite(width-1220,height-100,10,10);
    d1.addImage(dimg1);
    d1.scale=1.2;
    d1.visible=false;

   // poster=createSprite(100,100,10,10);
   // poster.shapeColor=("yellow")
    //poster.visible=true;
    //poster.addImage(posterImg);
    

}
function draw(){
    background(0,0,0);
if(gameState=="intro"){
   background(0,0,0);
   textSize(100);
   stroke("yellow");
   text("WELCOME TO MY GAME",180,100);
   image(poster1Img,500,150,600,100);
   image(posterImg2,500,300,600,300)
   textSize(30);
   fill("red");
   text("designed by Shreya Sudarshan and Sneha Malik(teacher)",430,280)

   fill("white");
   //text("1. press space to jump",100,200);
   textSize(30);
   text("PRESS ENTER TO PLAY",620,650);
 

   if(keyDown("enter")){
      gameState="play";
      
   }
   
}
if(gameState=="play"){
  // poster.visible=false;
   ub.visible=true;
   rb.visible=true;
   d1.visible=true;
   door.visible=true;
   sideb.visible=true;
   bigborder.visible=true;
   bluediamond7.visible=true;
   b10.visible=true;
   trophy1.visible=true;
   b9.visible=true;
   b8.visible=true;
   bluediamond6.visible=true;
   b7.visible=true;
   bluediamond5.visible=true;
   b6.visible=true;
   b4.visible=true;
   bluediamond4.visible=true;
   b5.visible=true;
   bluediamond3.visible=true;
   pinkdiamond2.visible=true;
   b2.visible=true;
   b3.visible=true;
   pinkdiamond1.visible=true;
   pole.visible=true;
   lb.visible=true;
   db.visible=true;


   b1.visible=true;
   
    if(keyDown("left")){
       d1.x=d1.x-3; 
    }
    if(keyDown("right")){
        d1.x=d1.x+3;
    }

    if(keyDown("space")){
        d1.velocityY=-10;
    }
    d1.velocityY=d1.velocityY+0.6;

    d1.velocityY=d1.velocityY+0.5;
    edges=createEdgeSprites();
    d1.collide(db);
    d1.collide(b1);
    d1.collide(b2);
    d1.collide(b3);
    d1.collide(b4);
    d1.collide(b5);
    d1.collide(b6);
    d1.collide(b7);
    d1.collide(b8);
    d1.collide(b9);
    d1.collide(b10);
    d1.collide(ub);
    d1.collide(lb);
    d1.collide(rb);
    d1.collide(bigborder);
    d1.collide(door);
    d1.collide(sideb);


    if(pinkdiamond1.isTouching(d1)){
       pinkdiamond1.destroy();
       score=score+5;
    }
    if(pinkdiamond2.isTouching(d1)){
        pinkdiamond2.destroy();
        score=score+5;
     }
     
     if(bluediamond2.isTouching(d1)){
        bluediamond2.destroy();
        score=score+7;
     }
     if(bluediamond3.isTouching(d1)){
        bluediamond3.destroy();
        score=score+7;
     }
     if(bluediamond4.isTouching(d1)){
        bluediamond4.destroy();
        score=score+7;
     }
     if(bluediamond5.isTouching(d1)){
        bluediamond5.destroy();
        score=score+7;
     }
     if(bluediamond6.isTouching(d1)){
        bluediamond6.destroy();
        score=score+7;
     }
     if(bluediamond7.isTouching(d1)){
        bluediamond7.destroy();
        score=score+7;
     }
     if(trophy1.isTouching(d1)){
        trophy1.destroy();
        score=score+100;
     }
   
    drawSprites();
    fill("black");
    textSize(30);
    text("SCORE "+score,60,50);

} 
}