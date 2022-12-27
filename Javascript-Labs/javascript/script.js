//Create a function that contain a formula
//bmi = weight / height^2
function bmiCalculator(weight, height)
{
    var bmi = Math.floor(weight / Math.pow(height,2));
    return bmi;
}

var bmiValue = bmiCalculator(65,1.8);
console.log(bmiValue);