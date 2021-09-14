class Stone {
    constructor(x,y,r){
     var options={
         isStatic:false,
         restitution:0,
         friction:1,
         density:1.2
        }   
        this.stone=Bodies.circle(x,y,r,options)
        World.add(world,this.stone)
    }
    display(){
        
        ellipseMode(RADIUS)
        ellipse(this.stone.position.x,this.stone.position.y,10,10)
    }

}