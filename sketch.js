
var heading
var play, back
var sky, covid, GK
var star, die, mind
var input, sQuestion, cQuestion, gQuestion , ansBox
var star, spaceAns, virus, virusAns, generel, generelAns
var ask1, next, choices
var  y = 250
//var person, tub
var gameState = 0

function preload() {
  star = loadImage("space.jpg");
  die = loadImage("corona.jpg");
  mind = loadImage("general.jpg");
}

function setup() {
  input = createInput("")
  input.position(20,50)
  input.attribute('placeholder','name');
  input.hide();
  ask1 = createElement("h2")
  ask1.position(340,10)
  ansBox = createInput("")
  ansBox.attribute("placeholder","type here")
  ansBox.position(200,300)
  ansBox.hide();
  next = createButton("NEXT")
  next.position(700,500)
  next.hide();
  next.mousePressed(answer)
  back = createButton("BACK")
  back.position(1100,80)
  back.hide();

  
  
  /*person = createImg("Man.png")
  person.position(1200,250)
  person.id('black')
  person.hide();
  
  tub = createImg("Pic.png")
  tub.position(950,400)
  tub.id('water')
  tub.hide(); */
  sky = createSprite(580,220);
  sky.addImage(star);
  //sky.id('blue')

 
  covid = createSprite(580,420);
  covid.addImage(die);
  //covid.id('virus')

  GK = createSprite(580,20);
  GK.addImage(mind);
  //GK.id('white')

  }
  
function draw(){

  clear();
  let display = touches.length + ' touches';
  text(display, 5, 10);



if (mousePressedOver(sky)) {

  gameState = 1

};

if (gameState === 1){
  play.hide();
  heading.hide();
  covid.show();
  GK.show();
  sky.show();
}

drawSprites()

}

function sky_hide(){
sky.hide();
covid.hide();
GK.hide();
}

function press(){
  play.hide();
}

function spaceQuestion(){
   sQuestion = Math.round(random(0,star.length-1))
  ask1.html("")
  ask1.html(star[sQuestion])
}

function covidQuestion(){
  cQuestion = Math.round(random(0,virus.length-1))
  ask1.html("")
  ask1.html(virus[cQuestion])
}

function gkQuestion(){
  gQuestion = Math.round(random(0,generel.length-1))
  ask1.html("")
  ask1.html(generel[gQuestion])
}

function answer(){
 if(ansBox.value()==spaceAns[sQuestion]||ansBox.value()==virusAns[cQuestion]||ansBox.value()==generelAns[gQuestion]){
   console.log("message")
 } else {y = y+50
  person.position(1200,y)}
 if(choice===1){
   spaceQuestion();
 }
 if(choice===2){
   covidQuestion();
 }
 if(choice===3){
   gkQuestion();
 }
}

function screen1 (){
  heading = createElement('h1');
  heading.position(600,50);
  heading.html("DO U KNOW?")
  heading.hide();
  play = createButton("PLAY")
  play.position(600,300)
  play.hide();
  if (gameState === 0 ){
    heading.show();
    play.show();
    covid.hide();
    GK.hide();
    sky.hide();
  
  }
}

function screen2 (){

}

function subScreen1 (){
  document.getElementById('white').onclick = function(){
    gameState = 1
    sky.hide();
    covid.hide();
    GK.hide();
    ansBox.show();
    next.show();
    person.show();
    tub.show();
    back.show();
    

    gkQuestion();
  }

}


function subScreen2 (){
  document.getElementById('blue').onclick = function(){
    gameState = 2
    sky.hide();
    covid.hide();
    GK.hide();
    ansBox.show();
    next.show();
    tub.show();
    person.show();
    back.show();
    
   
  
    spaceQuestion();
  }

}

function subScreen3 (){
  document.getElementById('virus').onclick = function(){
    gameState = 3
    sky.hide();
    covid.hide();
    GK.hide();
    ansBox.show();
    next.show();
    person.show();
    tub.show();
    back.show();

    covidQuestion();
  }

}

