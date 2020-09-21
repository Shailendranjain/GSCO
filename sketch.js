var car1;
var speed1,speed2,speed3;
var weight1,weight2,weight3;
var state = "play";
var state1 = "play1";
var state2 = "play2";
var wall1,wall2,wall3;
var border1,border2,border3,border4;
var text1,text2,text3;
var defor1,defor2,defor3;



function preload() {
  car_1 = loadImage("car1.png");
  car_2 = loadImage("car2.png");
  car_3 = loadImage("car3.png");
  wall_1 = loadImage("paddle.png");
  wall_2 = loadImage("paddle.png"); 
  wall_3 = loadImage("paddle.png")
  text_1 = loadImage("text1.png");
  text_2 = loadImage("text1.png");
  text_3 = loadImage("text1.png");
}

function setup() {
  createCanvas(1440,839);

  speed1 = Math.round(random(25,100));
  speed2 = Math.round(random(25,110));
  speed3 = Math.round(random(25,105));
  weight1 = Math.round(random(810,2900));
  weight2 = Math.round(random(810,2900));
  weight3 = Math.round(random(810,2900));


  car1 = createSprite(200, 310, 70, 30);
  car1.addImage("car1", car_1);
  car1.scale = 0.25;
  
  car2 = createSprite(200,520,70,30);
  car2.addImage("chandler", car_2);
  car2.scale = 0.35;
  
  car3 = createSprite(200,740,70,30);
  car3.addImage("chris", car_3);
  car3.scale = 0.5;
  
  wall1 = createSprite(1300,310,710,30);
  wall1.addImage("wall", wall_1);
  wall1.scale = 1.75;

  wall2 = createSprite(1300,520,710,30);
  wall2.addImage("wall1", wall_2);
  wall2.scale = 1.5;

  wall3 = createSprite(1300,720,710,30);
  wall3.addImage("wall1", wall_2);
  wall3.scale = 1.5;

  border1 = createSprite(200,200,5000,15);
  border2 = createSprite(200,425,5000,15);
  border3 = createSprite(200,625,5000,15);
  border4 = createSprite(200,835,5000,15);

  text1 = createSprite(1230,240,710,30);
  text1.addImage("text1", text_1);
  text2 = createSprite(1230,450,710,30);
  text2.addImage("text1", text_2);
  text3 = createSprite(1230,660,710,30);
  text3.addImage("text1", text_3);

}

function draw() {
  background(205,153,0);

  border1.shapeColor = "black"
  border2.shapeColor = "black"
  border3.shapeColor = "black"
  border4.shapeColor = "black"

  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;

  if(car1.isTouching(wall1)){
    car1.velocityX=0;
    car1.x=1223;
    state = "crash";
  }else{
    car1.velocityX=speed1;
    state="play"
  }

  if(car2.isTouching(wall2)){
    car2.velocityX=0;
    car2.x=1230;
    state1 = "crash1";
  }

  if(car3.isTouching(wall3)){
    car3.velocityX=0;
    car3.x=1213;
    state2 = "crash2";
  }
 

  if((mouseIsOver(car1) && state === "crash") ){
    state = "look"
  }
  if((mouseIsOver(car2) && state1 === "crash1") ){
    state1 = "look1"
  }
  if((mouseIsOver(car3) && state2 === "crash2") ){
    state2 = "look2"
  }
  drawSprites();
  

  if(state === "look"){
    text1.visible = true;
    
    fill("black");
    text("Speed = " + speed1 + " mph",1182,205);
    defor1 = Math.round(0.5 * weight1 * speed1 * speed1/22500);
    text("Weight = " + weight1 + " lbs",1182,225);
    text("Deformation = " + defor1,1182,245);
    
    if(defor1<100){
      fill("green")
      text("Safe",1215,260)
    } else if((defor1>100 && defor1<180)) {
      fill("gold")
      text("Okay",1215,260)
    } else if(defor1>180){
      fill("red")
      text("Dangerous",1200,260)
    }

  }else{
    text1.visible = false;
    state = "crash";
  } 

  if(state1 === "look1"){
    text2.visible = true;
    
    fill("black");
    text("Speed = " + speed2 + " mph",1182,415);
    defor2 = Math.round(0.5 * weight2 * speed2 * speed2/22500);
    text("Weight = " + weight2 + " lbs",1182,435);
    text("Deformation = " + defor2,1182,455);
    
    if(defor2<100){
      fill("green")
      text("Safe",1215,470)
    } else if((defor2>100 && defor2<180)) {
      fill("gold")
      text("Okay",1215,470)
    } else if(defor2>180){
      fill("red")
      text("Dangerous",1200,470)
    }

  }else{
    text2.visible = false;
    state1 = "crash1";
  }

  if(state2 === "look2"){
    text3.visible = true;
    
    fill("black");
    text("Speed = " + speed3 + " mph",1182,625);
    defor3 = Math.round(0.5 * weight3 * speed3 * speed3/22500);
    text("Weight = " + weight3 + " lbs",1182,645);
    text("Deformation = " + defor3,1182,665);
    
    if(defor3<100){
      fill("green")
      text("Safe",1215,680)
    } else if((defor3>100 && defor3<180)) {
      fill("gold")
      text("Okay",1215,680)
    } else if(defor3>180){
      fill("red")
      text("Dangerous",1200,680)
    }

  }else{
    text3.visible = false;
    state2 = "crash2";
  }



}
