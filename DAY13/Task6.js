function BMI_calculator(x,y){
  return (x/(y*y)).toFixed(2);
}
function bmi_calculator(x,y){
  let bmi=(x/(y*y)).toFixed(2);
  if(bmi<18.5){
    return "Under weight";
  }
  else if(bmi>=18.5 && bmi<=24.9){
    return "Normal weight";
  }
  else{
    return "Over weight";
  }
}
console.log("your BMI is "+BMI_calculator(60,1.63)+" so, you have "+bmi_calculator(60,1.63));