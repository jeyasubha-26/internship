function BMI_calculator(x,y){
  return x/(y*y);
}
let x=60;
let y=1.63;
console.log("the BMI is "+BMI_calculator(x,y).toFixed(0));