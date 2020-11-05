var MrJimmyJoe
var jjimg
var bimg, bsprite
var food = 20;
var gameState = 0;
var s11, s12, s13, s14, s15, s21, s22, s23, s24, s25
var redImg
var whitesusImg
var drag = 0;
var invSpr

function preload()
{
	jjimg = loadImage("jjremainder.png");
	bimg = loadImage("background.png");
	redImg = loadImage("red.png");
	whitesusImg = loadImage("whitesus.png");

}

function setup() {
	createCanvas(displayWidth-50, displayHeight-50);
	bsprite = createSprite((displayWidth-50)/2, (displayHeight-50)/2, displayWidth-50, displayHeight-50)
	bsprite.addImage(bimg);
	bsprite.scale = 15;
	MrJimmyJoe = createSprite(displayWidth/2-50, displayHeight/2-50, 50, 50);
	MrJimmyJoe.addImage(jjimg);
}


function draw() {
  rectMode(CENTER);
  background(0);

  if (food === 0 && gameState === 0){
	  clear();
	  gameState = 1;
  }

  drawSprites();

  if (gameState === 1){
	console.log(gameState);
	  MrJimmyJoe.visible = false;
	  s11 = createSprite(400, 110, 45, 75);
	  s11.addImage("red",redImg);
	  s11.addImage("white",whitesusImg);
	  s11.scale = 0.3;

	  s12 = createSprite(485, 200, 75, 45);
	  s12.addImage("red",redImg);
	  s12.addImage("white",whitesusImg);
	  s12.scale = 0.3;

	  s13 = createSprite(585, 300, 75, 45);
	  s13.addImage("red",redImg);
	  s13.addImage("white",whitesusImg);
	  s13.scale = 0.3;

	  s14 = createSprite(450, 540, 75, 45);
	  s14.addImage("red",redImg);
	  s14.addImage("white",whitesusImg);	  
	  s14.scale = 0.3;

	  s15 = createSprite(450, 405, 45, 75);
	  s15.addImage("red",redImg);
	  s15.addImage("white",whitesusImg);	 
	  s15.scale = 0.3;

	  s21 = createSprite(890, 110, 45, 75);
	  s21.addImage("red",redImg);
	  s21.addImage("white",whitesusImg);	  
	  s21.scale = 0.3;

	  s22 = createSprite(805, 200, 75, 45);
	  s22.addImage("red",redImg);
	  s22.addImage("white",whitesusImg);	  
	  s22.scale = 0.3;

	  s23 = createSprite(705, 300, 75, 45);
	  s23.addImage("red",redImg);
	  s23.addImage("white",whitesusImg);	  
	  s23.scale = 0.3;

	  s24 = createSprite(840, 540, 75, 45);
	  s24.addImage("red",redImg);
	  s24.addImage("white",whitesusImg);	  
	  s24.scale = 0.3;

	  s25 = createSprite(840, 405, 45, 75);
	  s25.addImage("red",redImg);
	  s25.addImage("white",whitesusImg);	  
	  s25.scale = 0.3;

	  

	  line(365, 60, 925, 60);

	  line(925, 60, 930, 580);

	  line(930, 580, 365, 580);

	  line(365, 580, 365, 60);

	  gameState = 2;
  }
  textSize(25);
  fill("black");
  if (gameState === 0){
  text("Food Left: " + food, displayWidth/2-120, displayHeight/4);
  }
}

function keyPressed(){
	if(keyCode === 32 && gameState === 0){
		food = food-1;
		MrJimmyJoe.scale = MrJimmyJoe.scale+0.2
	}
}

function mouseClicked(){
	if (gameState === 2){
		invSpr = createSprite(mouseX, mouseY, 5, 5);
		invSpr.visible = false;
		if (invSpr.isTouching(s11)){
			s11.changeImage("white", whitesusImg);
		}
		if (invSpr.isTouching(s12)){
			s12.changeImage("white", whitesusImg);
		}
		if (invSpr.isTouching(s13)){
			s13.changeImage("white", whitesusImg);
		}
		if (invSpr.isTouching(s14)){
			s14.changeImage("white", whitesusImg);
		}
		if (invSpr.isTouching(s15)){
			s15.changeImage("white", whitesusImg);
		}
		if (invSpr.isTouching(s21)){
			s21.changeImage("white", whitesusImg);
		}
		if (invSpr.isTouching(s22)){
			s22.changeImage("white", whitesusImg);
		}
		if (invSpr.isTouching(s23)){
			s23.changeImage("white", whitesusImg);
		}
		if (invSpr.isTouching(s24)){
			s24.changeImage("white", whitesusImg);
		}
		if (invSpr.isTouching(s25)){
			s25.changeImage("white", whitesusImg);
		}
	}
}