
class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.007,
            length: 10
        }
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    attach(){
        this.launcher.bodyA = body;
    }

    fly(){
        this.launcher.bodyA = null ;
    }

    display(){

        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(0,0,0);
            if(pointA.x < 220) {
                strokeWeight(3);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
            }
            pop();
        }
    }
    
}