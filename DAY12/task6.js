let x=Number(prompt("Enter a value:"))
function iseven(x)
{
    if (x&1==0){
        a="even";
    }
    else{
        a="odd";
    }
    return a;
}
alert(iseven(x));