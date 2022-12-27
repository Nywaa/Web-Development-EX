//Lover compatible
//Generate a random percentage to determine how match their love is lol

var maleName = prompt("Please enter the male name : ");
var femaleName = prompt("Please enter the female name : ");

function generatePercentage()
{   
    //Generate a number with Math.random()
    //Math.random() only produce a number between 0 and 1
    //The formula is Math.random() * x, where x is the max number of the desired number          
    var randomPercentage = Math.random() * 100;
    
    //Rounding the value of Math.random so it doesnt have any double value
    randomPercentage = Math.floor(randomPercentage) + 1;
    return randomPercentage;
}

console.log("You and your partner is " + generatePercentage() + "% compatible");