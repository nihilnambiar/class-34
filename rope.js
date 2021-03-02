class Rope{
constructor(bodya,pointb){
    var options={
        bodyA:bodya,
        pointB:pointb,
        stiffness:1.2,
        length:250
    }
this.rope=Matter.Constraint.create(options)
World.add( world,this.rope,this.world)
}
display(){
    var pointa=this.rope.bodyA.position
    var pointb=this.rope.pointB
    stroke(255)
    strokeWeight(4)
   fill("white")
  line(pointa.x,pointa.y,pointb.x,pointb.y)
}
};