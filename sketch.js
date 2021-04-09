var test1;
var test2 ;
var a = 20;
function setup() {
  createCanvas(800, 800);
  test1 = new Test(10);
  test2=new Test(20)

}

function draw() {
  background("black");
  test1.checkPositiveOrNot();
  test2.checkPositiveOrNot()

}
