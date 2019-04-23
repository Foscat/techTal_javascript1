// Exercise 1

// Create an array to represent your shopping list with the following items: 
// 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
var shoppingList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];

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
var stringCart = shoppingCart.join(",");
console.log(stringCart);


// End exercise 1


/////////////////////// Exercise 2 \\\\\\\\\\\\\\\\\\\\\\\\

// My idea of a function
function myFunct(){
    console.log("my Funct")
}
myFunct();

// My idea of a method 
myMethod = function(){
    console.log("my method")
}
myMethod();

// ES6 style function
es6 = () => {
    console.log("es6");
}
es6();

var myNum = 0;
console.log(myNum);
myNum++;
console.log(myNum);