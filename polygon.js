class polygon {

constructor(x,y,r){

var option = {


}

this.body = Bodies.circle(x,y,(r-10)/2,option);
World.add(world,polygon)


slingShot = new slingshot(this.body,{x:100,y:200})
}
display(){

imageMode(CENTER);
image(polygon_img ,this.body.position.x, this.body.position.y ,40,40);

}

}