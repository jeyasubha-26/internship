function move_straight(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}
function left1(){
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
function right1(){
   turnRight();
   move();
   turnRight();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}
function main(){
   move_straight();
   left1();
   right1();
   left1();
   right1();
}
