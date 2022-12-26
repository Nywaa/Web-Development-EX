//Asking user to input their name
var firstName = prompt("Please enter your first name : ");
var lastName = prompt("Please enter your last name : ");

//Converting user first name into capital letters
var firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1,firstName.length).toLowerCase();
console.log(firstName);


//Converting user last name into capital letters
var lastName = lastName.slice(0,1).toUpperCase() + lastName.slice(1, lastName.length).toLowerCase();
console.log(lastName);