let arr=["apple","banana","kiwi","orange","berries"];
console.log("the 3rd element is "+arr[2]);
arr.push("strawberry");
console.log("array after push function "+arr);
arr.shift();
console.log("array after shift function "+ arr);
console.log("the length of the array is:"+arr.length);
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);    
}
console.log("the reversed array is "+arr.reverse());
let sum=0;
let arr1=[2,9,6,27,29];
for(var i=0;i<arr1.length;i++)
{
    sum+=arr1[i];
}
console.log("the sum of the array is "+sum);