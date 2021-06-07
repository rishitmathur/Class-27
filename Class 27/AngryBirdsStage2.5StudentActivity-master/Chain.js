class Chain{
    constructor(bodyA,bodyB){

        var ball={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(ball)
        World.add(world,this.chain)
  }
  display(){
var A=this.chain.bodyA.position
var B=this.chain.bodyB.position
strokeWeight(4)
stroke("blue")
line(A.x,A.y,B.x,B.y)
  }
}