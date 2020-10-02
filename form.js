class Form {

    constructor() {
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h1');
     
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.title.hide();
    }

    display(){
        this.title.html("DO U KNOW ?");
        this.title.position((600,50);
        this.button.position(600,300);
    
        this.button.mousePressed(()=>{
            this.title.hide();
            this.button.hide();
            sky = createSprite(580,220);
            sky.addImage(star);
            covid = createSprite(580,420);
            covid.addImage(die);
            GK = createSprite(580,20);
            GK.addImage(mind);