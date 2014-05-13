//Declare a variable
var name = "barney";
//Change Variable
name = "alex";


var someText = "Some Text"
//Print the first letter of a string
console.log(someText.slice(0,1));
//Print the last letter of a string
console.log(someText.slice(-1, someText.length));
//Change Variable "someText"
someText = "New Copy Goes Here"
//Print New Results
console.log(someText.slice(0,1));
//Print the last letter of a string
console.log(someText.slice(-1, someText.length));
//Print length of variable "someText"
console.log(someText.length);

//Create a variable to hold my array
var newArray = [1, 45, "what's up", 12, "anything"];
console.log(newArray);
//Get length of array
console.log(newArray.length);
//Print the 5th element in my array
console.log(newArray[4]);
//Join the array with no spaces
console.log(newArray.join());
//Join the array with some text
console.log(newArray.join("more text"));
//Just checking to see if any of the joining effected my variable
console.log(newArray)
//Change value of my array
newArray = [2, "right here", "pretty lights", "Derpasaurus Rex", 4, 7]
//Print new results
console.log(newArray);
//Get length of array
console.log(newArray.length);
//Print the 5th element in my array
console.log(newArray[4]);
//Join the array with no spaces
console.log(newArray.join());
//Join the array with some text
console.log(newArray.join("more text"));
//Print first element in my array
console.log(newArray.shift());
//Print last element in my array
console.log(newArray.pop());
//Pull and print 4th in my array
console.log(newArray.slice(2,3));
//The last element is no longer in the array
console.log(newArray)
//Print length of the 4th in my array - Note: a string in an element counts as 1 value
console.log(newArray.slice(2,3).length);
//Add a new character to the beginning of my array
newArray.unshift('Addition');
//Print the new array
console.log(newArray);

//Pull and store last element in my array in a new array
var lastElement = newArray.pop();
//Print the array with the last element removed
console.log(newArray)
//Replace the 3rd position in "newArray" former last element in "newArray" (now stored in "last Element")
newArray[2] = lastElement
//Print the change to "newArray"
console.log(newArray)

//Declare object "banana", properties and values
var banana = {
	color: "green",
	ripeness: "very"
}
//Print banana values
console.log(banana.ripeness)
console.log(banana.color);


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


prompt user input and write to DOM
var bananaColor = prompt("What color is your banana?");
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



function popIt (array) {
	return array.pop();
}
console.log(popIt([1, 2, 3]));


function lastNumber (array) {
	return array[array.length -1]
}
console.log(lastNumber([1, 2, 3]));


function secondToLast (array) {
	return array[array.length -2]
}
console.log(secondToLast([1, 2, 3]));


function firstLetter (array) {
	return array.slice(0,1)
}
console.log(firstLetter([1, 2, 3]));

//Average Age

function averageAge (x, y) {
	return (x + y) / 2;
}

function averageAge3 (x, y, z) {
	return (x + y + z) / 3;
}

function average (array) {
	var total = array.reduce(function(first, second){
		return first + second
	})
	console.log('total is', total);

	return total / array.length;
}

// Print to DOM

var people = ["bob", "Jorg", "Sally"]

// people.forEach(function(person){
// 	$('body').prepend('<h1>' + person + '<h1>');
// })


//Objects - variable with properties and values

var jim = {
	name: "Jim",
	skills: ["javascript", "Ruby", "Dancing"],
	favoriteColor: "green"
};

console.log(jim.name);

jim.name = "James"
console.log(jim.name); //"James"

jim.skills = "Everything"
console.log(jim.skills); //"Everything"

jim.favoriteColor = "blue"
console.log(jim.favoriteColor); //"blue"


// Methods - Objects with functions stored as values

var jim = {
	name: "Jim",
	skills: ["javascript", "Ruby", "Dancing"],
	favoriteColor: "green",
	greet: function () {
		console.log("Hello, I am " + this.name)
	}
};

jim.name = "James"
//call the method
jim.greet();

//console.log() is a method - Object: console, key is a function - log()

var nick = {
	name: "Nick",
	//Nick's greet is the same as Jim's but Nick's holds the value of Nick
	greet: jim.greet
};
//call the method
nick.greet();

//If you grab the function out of the object and store it as a variable we lose the context and it just becomes a function
var jimGreet = jim.greet;
jimGreet();


// Don't do, you're writing to the global **
// function whatIsThis(){
// 	console.log(this);
// }

// whatIsThis()

//greet is a method using the genericGreet function
var genericGreet = function() {
        return "Hello, my name is " + this.name;
      }

      var andrew = {
        name: "Andrew",
        greet: genericGreet
      }

      var ryan = {
        name: "Ryan",
        greet: genericGreet
      }



// Is it odd?
function isOdd (x){
	return x % 2 == 1;
}

//Return name length

["abe", "bama", "w"].map(function(prez){
	return prez.length;
	console.log(prez.length);
})

// Presidential Objects

var washington = {
	name: "George",
	number: 1,
	hair: "white",
	couldnt: "Tell a lie",
	nickname: "Ol Wooden Teeth",
	slogan: function () {
		return "You'll never live up to " + this.name + "!"
		console.log("You'll never live up to " + this.name + "!")
	}
}

var lincoln = {
	name: "Abe",
	number: 15,
	hair: "top-hat shaped",
	couldnt: "Enjoy a play",
	nickname: "Ol Hickory",
	slogan: function () {
		return "emancipate this!"
		console.log("emancipate this!")
	}
}

var clinton = {
	name: "Bill",
	number: 31,
	hair: "awesome",
	couldnt: "inhale",
	nickname: "Slick Willy",
	slogan: function () {
		return "Do you miss me yet?"
		console.log("Do you miss me yet?")
	}
}

var obama = {
	name: "Obama",
	number: 33,
	hair: "short",
	couldnt: "miss an opportunity for a joke",
	nickname: "Bama",
	slogan: function () {
		return "I'm the one and only " + this.nickname + "!"
		console.log("I'm the one and only " + this.nickname + "!")
	}
}

// Take the above objects and run some calls: .forEach, .map, .reduce, .forLoop


//average of three (see function above)
console.log("average is " + averageAge3(washington.number, lincoln.number, clinton.number));

//average ofhowever many numbers (three again in this case) (see function above)
console.log("average is " + average([washington.number, lincoln.number, clinton.number]));

//average of however many numbers (four now) (see function above)
console.log("average is " + average([washington.number, lincoln.number, clinton.number, obama.number]));

//Print the first name in the array
console.log([washington.name, lincoln.name, clinton.name, obama.name].slice(0,1));

//Print the last name in the array
console.log([washington.name, lincoln.name, clinton.name, obama.name].slice(-1, [washington.name, lincoln.name, clinton.name, obama.name].length));

//Print each name on a separate line
[washington.name, lincoln.name, clinton.name, obama.name].forEach(function(x){
	// return x
	console.log(x)
});

// Print Washingotn's slogan
console.log(washington.slogan());

//Print each name on a separate line
[washington.slogan(), lincoln.slogan(), clinton.slogan(), obama.slogan()].forEach(function(x){
	// return x
	console.log(x)
});

//Print the last letter of each name on separate lines
[washington.slogan(), lincoln.slogan(), clinton.slogan(), obama.slogan()].forEach(function(x){
	// return x.slice(-1, x.length)
	console.log('x is', x);
	console.log(x.slice(-1, x.length));
});

//Print the square of each number minus 2
[washington.number, lincoln.number, clinton.number, obama.number].forEach(function(x){
	// return x * x - 2
	console.log(x * x - 2);
});

//Print what each prez couldnt do
[washington, lincoln, clinton, obama].forEach(function(x){
	console.log(x.couldnt);
});

//Print what each prez couldnt do along with their name
[washington, lincoln, clinton, obama].forEach(function(x){
	console.log(x.name + " couldn't " + x.couldnt);
});

//Print each prez's name, number of presidency, what their hair was like, what they couldn't do, their nickname and slogan
[washington, lincoln, clinton, obama].forEach(function(x){
	console.log(x.name + " was president number " + x.number + ". He had " + x.hair + " hair. " + "He couldn't " + x.couldnt + ". " + "His nickname was " + x.nickname + ". " + "He always said " + x.slogan());
});

//List prez numbers times 4 for each with .map
[washington, lincoln, clinton, obama].map(function(x){
	console.log(x.number * 4); 
});

// Create a variable that holds a function which maps each prez number times for and places them in an array
var numberTimesFour = [washington, lincoln, clinton, obama].map(function(x){
	return x.number * 4
});
console.log(numberTimesFour);

//Create a variable that holds all of my prez's in an array
var prezVar = [washington, lincoln, clinton, obama].map(function(x){
	return x
});
console.log(prezVar);

//Inside prezVar variable name the method that maps all of my presidents into and array
var prezVar = [washington, lincoln, clinton, obama].map(prezVarFunc = function(x){
	return x
});

console.log(prezVarFunc(prezVar));

//Map each Prez's slogan into an array
var prezVarSlogan = [washington, lincoln, clinton, obama].map(function(x){
	return x.slogan()
});
console.log(prezVarSlogan);


//Map each Prez's slogan into an array (shorthand, using my stored variable)
var prezVarSlogan = prezVar.map(function(x){
	return x.slogan()
});
console.log(prezVarSlogan);

//Create a variable that maps the prez's number + 1
var prezVarNum = prezVar.map(function(x){
	return x.number
});
console.log(prezVarNum);

//Create a variable that maps the prez's number + 1
var prezVarNumPlus = prezVar.map(function(x){
	return x.number + 1
});
console.log(prezVarNumPlus);


//Store all of my objects in an array
var prezs = [

	washington = {
		name: "George",
		number: 1,
		hair: "white",
		couldnt: "Tell a lie",
		nickname: "Ol Wooden Teeth",
		slogan: function () {
			return "You'll never live up to " + this.name + "!"
			console.log("You'll never live up to " + this.name + "!")
		}
	},

	lincoln = {
		name: "Abe",
		number: 15,
		hair: "top-hat shaped",
		couldnt: "Enjoy a play",
		nickname: "Ol Hickory",
		slogan: function () {
			return "emancipate this!"
			console.log("emancipate this!")
		}
	},

	roosevelt = {
		name: "Theodore",
		number: 18,
		hair: "ballerific",
		couldnt: "not speak softly",
		nickname: "Teddy",
		slogan: function () {
			return "Carry a big Stick!"
			console.log("Carry a big Stick!")
		}
	},

	clinton = {
		name: "Bill",
		number: 31,
		hair: "awesome",
		couldnt: "inhale",
		nickname: "Slick Willy",
		slogan: function () {
			return "Do you miss me yet?"
			console.log("Do you miss me yet?")
		}
	},

	obama = {
		name: "Obama",
		number: 33,
		hair: "short",
		couldnt: "miss an opportunity for a joke",
		nickname: "Bama",
		slogan: function () {
			return "I'm the one and only " + this.nickname + "!"
			console.log("I'm the one and only " + this.nickname + "!")
		}
	}
], number = 0;

//Print the first object from my array above
console.log(prezs.slice(0,1));

//I am able to getthe same result from the variable on line 413 I made to contain all of my prez objects via .map (lines 410-413)
console.log(prezVar.slice(0,1));

//Just illustrating I can still pull info the same as before with my new var
prezs.map(function(x){
	console.log(x.slogan())
});


prezs.map(function(x){
	console.log(x.number % 2)
});


prezs.map(function(x){
	console.log(x.number)
});

//Print remainder from prezs.number % 2
var prezVarNums = prezs.map(function(x){
	return x.number % 2
});
console.log(prezVarNums);

//Print whether each prezs.number is even or odd in an array
var prezVarNums = prezs.map(function(x){
	if (x.number % 2 == 0) {
		return "even"
		console.log("even")
	} else {
		return "odd"
		console.log("odd")
	}
});
console.log(prezVarNums);

//Create a copy of my prezs variable without effecting it
var newPrezs = prezs.slice();
//Change the 0 index of newPrezs
newPrezs[0] = "Changed-0"

console.log(prezs);

// Change 1 index of newPrezs via stored function
function changeFirst(array) {
	return array[1] = "Changed-1"
}

changeFirst(newPrezs);

console.log(newPrezs);





numberTimesFour.reduce(function(x){
  return x + 100,
  console.log(x + 100);
});


numberTimesFour.reduce(function(previousValue, currentValue, index, array){
  return previousValue + currentValue,
  console.log(previousValue + currentValue);
});



numberTimesFour.reduce(function(x, y){
  return x * y,
  console.log(x * y);
});


var crazyArray = [1, 4, "that", "one more time", [1, 2, 3], 7, 77, 108]


numberTimesFour.reduce(function(x){
  return x,
  console.log(x);
});

numberTimesFour.reduce(function(x, y){
  return x + y
  console.log(x + y);
});



var crazyArray = [1, 4, "that", "one more time", [1, 2, 3], 7, 77, 108]

console.log(crazyArray.reduce( function(total, num){ return total + num }, 0));


// function countZeroes(array) {
//   function counter(total, element) {
//     return total + (element === 0 ? 1 : 0);
//   }
//   return reduce(counter, 0, array);
// }

// console.log(countZeroes(crazyArray));


//
var developers = [
    { name: "Joe", age: 23 },
    { name: "Sue", age: 28 },
    { name: "Jon", age: 32 },
    { name: "Bob", age: 24 }
], age = 0;
 
age = developers.reduce(function(memo, developer) {
    return memo + developer.age; // return previous total plus current age
}, 0); // initialize age with 0 that will be passed as memo
 
console.log("Sum of all developer ages is " + age); 




var presidents = [

	{	name: "George",
		number: 1,
		hair: "white",
		couldnt: "Tell a lie",
		nickname: "Ol Wooden Teeth" },

	{	name: "Abe",
		number: 15,
		hair: "top-hat shaped",
		couldnt: "Enjoy a play",
		nickname: "Ol Hickory" },

	{	name: "Theodore",
		number: 18,
		hair: "ballerific",
		couldnt: "not speak softly",
		nickname: "Teddy" },

	{	name: "Bill",
		number: 31,
		hair: "awesome",
		couldnt: "inhale",
		nickname: "Slick Willy" },

	{	name: "Obama",
		number: 33,
		hair: "short",
		couldnt: "miss an opportunity for a joke",
		nickname: "Bama" }

], number = 0;

//
averagePrezNumber = presidents.reduce(function(memo, president) {
	return memo + presidents.number;
})

console.log("Sum of all president numbers is " + averagePrezNumber);



presidents.map(function(x){
	console.log(x.number)
});


//
var doctorArray = [
    { doctorNumber: "#9",  playedBy: "Christopher Eccleston", yearsPlayed: 1 },
    { doctorNumber: "#10", playedBy: "David Tennant",         yearsPlayed: 6 },
    { doctorNumber: "#11", playedBy: "Matt Smith",            yearsPlayed: 4 },
    { doctorNumber: "#12", playedBy: "Peter Capaldi",         yearsPlayed: 1 }
]


doctorArray.map(function(x){
	return x.yearsPlayed,
	console.log(x.yearsPlayed)
});


// doctorArray.yearsPlayed.reduce(function(x){
// 	return x,
// 	console.log(x)
// });


// doctorArray.reduce(function(x){
// 	return x.yearsPlayed
// 	console.log(x.yearsPlayed)
// });

doctorReduce = doctorArray.reduce(function(memo, doctors) {
	return memo + doctorArray.yearsPlayed;
})

console.log("Average time played is " + doctorReduce);


console.log(doctorArray.reduce( function(total, num){ return total + num }, 0));


doctorArray.reduce(function(x, y){
  return x, y
  console.log(x, y);
});



// var doctors = doctors.reduce(function(memo, doctor) {
//     if (doctor.begin > 2000) { // this serves as our `filter`
//         memo.push({ // this serves as our `map`
//             doctorNumber: "#" + doctor.number,
//             playedBy: doctor.actor,
//             yearsPlayed: doctor.end - doctor.begin + 1
//         });
//     }
//     return memo;
// }, []);


// console.log(doctors.reduce())
 
// console.log(doctorArray(doctors, null, 4));


//Works
arr = [{x:1},{x:2},{x:4}]

arr = [1,2,4]
arr.reduce(function(a,b){return a + b, console.log(a + b)});

//Doesn't work

var doctorArray = [
    { doctorNumber: "#9",  playedBy: "Christopher Eccleston", yearsPlayed: 1 },
    { doctorNumber: "#10", playedBy: "David Tennant",         yearsPlayed: 6 },
    { doctorNumber: "#11", playedBy: "Matt Smith",            yearsPlayed: 4 },
    { doctorNumber: "#12", playedBy: "Peter Capaldi",         yearsPlayed: 1 }
]

doctorArray.reduce(function(a,b){
	// return {yearsPlayed: a.yearsPlayed + b.yearsPlayed};
	console.log({yearsPlayed: a.yearsPlayed + b.yearsPlayed});
});




// A little extra homework with .map(), .reduce(), and .forEach()
 
// Show me how to calculate the average price of all items. Please console.log the average.
// The output should be "The average price is $23.62"

//Get the average price from an array of prices inside the object "items"
function averageItemPrices(items){
	return items.map(function(item){
				return item.price;
			}).reduce(function(first, second){
				return first + second;
			}) / item.length
}

console.log(averageItemPrices(items));

// Show me how find the item with a "GBP" curreny code and print its name and price. Please console.log the one you find.
// The output should be "1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18"

//forEach takes three parameters: current, index, array
items.forEach(function(item){
	if (item.currency_code == "GBP") {
		console.log('found it!', item.title);
	}
})

// BONUS: Show me how to find which items are made of wood. Please console.log the ones you find.
// The output should be:
// 
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.
 

items.forEach(function(item){
	item.materials.forEach(function(materials){
		if (material == "wood") {
			console.log(item.title)
		}
	})
})




//DOM Manipulation















































