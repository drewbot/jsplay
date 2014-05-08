// //Declare a variable
// var name = "barney";
// //Change Variable
// name = "alex";


// var someText = "Some Text"
// //Print the first letter of a string
// console.log(someText.slice(0,1));
// //Print the last letter of a string
// console.log(someText.slice(-1, someText.length));
// //Change Variable "someText"
// someText = "New Copy Goes Here"
// //Print New Results
// console.log(someText.slice(0,1));
// //Print the last letter of a string
// console.log(someText.slice(-1, someText.length));
// //Print length of variable "someText"
// console.log(someText.length);

// //Create a variable to hold my array
// var newArray = [1, 45, "what's up", 12, "YOLO"];
// console.log(newArray);
// //Get length of array
// console.log(newArray.length);
// //Print the 5th element in my array
// console.log(newArray[4]);
// //Join the array with no spaces
// console.log(newArray.join());
// //Join the array with some text
// console.log(newArray.join("more text"));
// //Just checking to see if any of the joining effected my variable
// console.log(newArray)
// //Change value of my array
// newArray = [2, "this ish right here", "pretty lights", "Derpasaurus Rex", 4, 7]
// //Print new results
// console.log(newArray);
// //Get length of array
// console.log(newArray.length);
// //Print the 5th element in my array
// console.log(newArray[4]);
// //Join the array with no spaces
// console.log(newArray.join());
// //Join the array with some text
// console.log(newArray.join("more text"));
// //Print first element in my array
// console.log(newArray.shift());
// //Print last element in my array
// console.log(newArray.pop());
// //Pull and print 4th in my array
// console.log(newArray.slice(2,3));
// //The last element us no longer in the array
// console.log(newArray)
// //Print length of the 4th in my array - Note: a string in an element counts as 1 value
// console.log(newArray.slice(2,3).length);
// //Add and a new character to the beginning of my array
// newArray.unshift('Addition');
// //Print the new array
// console.log(newArray);

// //Pull and store last element in my array in a new array
// var lastElement = newArray.pop();
// //Print the former ast element from "newArray"
// console.log(newArray)
// //Replace the 3rd position in "newArray" former last element in "newArray" (now stored in "last Element")
// newArray[2] = lastElement
// //Print the change to "newArray"
// console.log(newArray)

// //Declare variable "banana", properties and values
// var banana = {
// 	color: "green",
// 	ripeness: "very"
// }
// //Print banana values
// console.log(banana.ripeness)
// console.log(banana.color);


//Run ripeness test. If color is green it's too ripe
//Store variable
var shouldEat = function (color) {
	if (color == "green") {
		return("not yet")
	} else if (color == "brown") {
		return("better eat it before it turns black")
	} else if (color == "black") {
		return("yeah... better not")
	} else if (color == "yellow") {
		return("Sho 'nuff")
	} else {
		return("That's not a banana, go wash your hands")
	}
}

//Print Return
console.log(shouldEat("black"));

//Change color of banana to black. Run ripeness test again
console.log(shouldEat("brown"));

//Change color of banana to black. Run ripeness test again
console.log(shouldEat("green"));

//Change color of banana to black. Run ripeness test again
console.log(shouldEat("yellow"));

//Change color of banana to black. Run ripeness test again
console.log(shouldEat("fusia"));

//*** This works! I just want to hide it while I write to DOM ***

// //prompt user input and console log
// var bananaColor = prompt("What color is your banana");
// if (bananaColor == "green") {
// 		console.log("not yet")
// 	} else if (bananaColor == "brown") {
// 		console.log("better eat it before it turns black")
// 	} else if (bananaColor == "black") {
// 		console.log("yeah... better not")
// 	} else if (bananaColor == "yellow")  {
// 		console.log("Sho 'nuff")
// 	} else {
// 		console.log("That's not a banana, go wash your hands")
// 	}


//prompt user input and write to DOM
var bananaColor = prompt("What color is your banana");
if (bananaColor == "green") {
		document.write("not yet, your banana is ")
	} else if (bananaColor == "brown") {
		document.write("better eat it before it turns black, your banana is ")
	} else if (bananaColor == "black") {
		document.write("yeah... better not, your banana is ")
	} else if (bananaColor == "yellow")  {
		document.write("Sho 'nuff, your banana is ")
	} else {
		document.write("That's not a banana, go wash your hands if it's ")
	}

// var eatTest = function(bananaColor);

// console.log(eatTest(bananaColor));

// confirm("I am ready to play!");












