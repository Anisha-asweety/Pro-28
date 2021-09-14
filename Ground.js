class Ground{
    constructor(){
        var option={
             isStatic:true 
        }
    this.ground = Bodies.rectangle(width/2, 650, width, 10,option);
 	World.add(world, this.ground);
    }
    display(){
      var pos =this.ground.position
      rectMode(CENTER);
      fill(255)
    }
}