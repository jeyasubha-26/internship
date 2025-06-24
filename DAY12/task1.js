function swap(p1,p2)
{
    var t=p1;
    p1=p2;
    p2=t;
    console.log(p1,p2);
}
let value=swap(10,20);
function test()
{
    var a=10;
    var b=20;
    var c=a;
    a=b;
    b=c;
    console.log("the value of a is "+a);
    console.log("the value of b is"+b);
}
test()
