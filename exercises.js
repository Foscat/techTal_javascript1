// Exercise 1

// Create an array to represent your shopping list with the following items: 
// 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
var shoppingList = ["pop_tarts", "ramen_noodles", "chips", "salsa", "coffee"];

// Add 'fruit loops' to the list.
shoppingList.push("fruit loops");
console.log(shoppingList);

// Update 'coffee' to 'fair trade coffee'
shoppingList[4] = "fair trade coffee";
console.log(shoppingList);

// Replace 'chips' and 'salsa' with 'rice' and 'beans'
shoppingList.splice(2,2,"rice","beans");
console.log(shoppingList);

// Create an empty array to represent your shopping cart.
var shoppingCart = [];

// Remove the last item from your shopping list and add it to your cart
var myPop = shoppingList.pop(); 
var myPush = shoppingCart.push(myPop);
console.log(shoppingList, shoppingCart);

// Remove the last item from your shopping list and add it to your cart
var myShift = shoppingList.shift();
shoppingCart.push(myShift);
console.log(shoppingCart, shoppingList)

// Write a 'while' loop that takes items from your shopping list and moves 
// them to your cart until there are no items left on the list.
while(shoppingList.length >= 1){
    myPop  = shoppingList.pop();
    myPush = shoppingCart.push(myPop);
    console.log("While loop tracker", shoppingList, shoppingCart);
}

// Sort the items in your cart alphabetically... backwards
shoppingCart.sort().reverse();
console.log(shoppingCart);

// Print the list of items in your shopping cart to the console as comma separated string.
var stringCart = shoppingCart.join(" ,");
console.log(stringCart);


// End exercise 1


/////////////////////// Exercise 2 \\\\\\\\\\\\\\\\\\\\\\\\

var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

// Assignment get values

// Name of the course ('JavaScript Applications')
console.log(course.name);

// Name of the second teacher ('Shane')
console.log(course.teachers[1]);

// Name of the first student ('Steve')
console.log(course.students[0].name);

// Katy's computer type ('macbook')
console.log(course.students[1].computer.type);

// The preReq equipment object
console.log(course.preReqs.equipment);

// The second OSOption from equipment prereqs ('osx')
console.log(course.preReqs.equipment.OSOptions[1]);

// String listing the OSOptions separated by 'or' ('linux or osx')
var myOrString = course.preReqs.equipment.OSOptions.join(" or ");
console.log(myOrString);

// An array of all the students that are using OSX.
var osxArray = [];
for(var i=0; course.students.length > i; i++){
    
    if(course.students[i].computer.OS === "OSX"){
        osxArray.push(course.students[i]);
    }
}
console.log(osxArray);


// End exercise 2

//////////////////// Exercise 3 \\\\\\\\\\\\\\\\\\\\\\

