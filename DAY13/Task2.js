let arr1=[12,34,56,78];
let arr2=[98,76,65,43];
let arr3=arr1.concat(arr2);
console.log("array after concatination: "+arr3);
let array_splice=arr3.splice(2,2);
console.log(arr3);
console.log("array after splice: "+array_splice);
arr3.sort()
console.log("array after sorting: "+arr3);
let k=12;
for (var i=0;i<arr3.length;i++){
  if(arr3[i]==k){
    console.log("element found");
  }
}
console.log("the index of the element 12 is "+ arr3.indexOf(k));
console.log(arr2.includes(12));