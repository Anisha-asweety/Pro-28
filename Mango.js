class Mango {
    constructor(){
      var options={
      isStatic:true,
      restitution:0,
      friction:1
      }
    this.image = loadImage("images/mango.png");
  
}
  display(){
  imageMode(CENTER)
  image(this.image,720,620,70,70) 
}
    
}