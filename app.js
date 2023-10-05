const name = prompt("Enter your name");
const weight = Number(prompt("Enter your weight in kilograms"));
const height = Number(prompt("Enter your height in centimeters"));
const bmi = getBMI(weight,height); //allows us to use this data for results 

function getBMI(weight,height){
return weight/((height/100)*(height/100));
}
console.log(getBMI(weight,height)); //without console, no results will be shown

function result (bmi) { //conditional statements 
if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Healthy weight");
} else if (bmi >= 35 && bmi <= 29.9) {
    console.log("Overweight")
} else {
    console.log("Obese")
}
}
result(); //dont touch