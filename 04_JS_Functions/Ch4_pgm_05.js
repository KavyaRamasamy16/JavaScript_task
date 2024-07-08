var findTotal;
var displayMenu;

//Declaring variables
var number1 = 45;
var number2 = 90;
var result;

findTotal = function () {
	result = number1 + number2;
};
findTotal(); //Running the function
console.log(result); //log findTotal function

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};
displayMenu();