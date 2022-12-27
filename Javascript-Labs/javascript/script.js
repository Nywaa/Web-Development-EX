function lifeInWeeks(userAge)
{
    //Assuming a human will only live until 90 years old 
    var maxAge = 90;

    //Const for how many months, weeks, days in a year
    var monthsinYear = 12;
    var weeksinYear = 52;
    var daysinYear = 365;

    //Calculating how many time left for user to live
    var userMonths = ((maxAge * monthsinYear) - (userAge * monthsinYear));
    var userWeeks = ((maxAge * weeksinYear) - (userAge * weeksinYear));
    var userDays = ((maxAge * daysinYear) - (userAge * daysinYear));
    
    //Telling user the output
    //Expected output is : You have x days, y weeks, and z months left.
    console.log("You have " + userDays + " days, " + userWeeks + " weeks, and " + userMonths + " months left.");
}

lifeInWeeks(56);