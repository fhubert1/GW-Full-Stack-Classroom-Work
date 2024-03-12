// WRITE YOUR CODE BELOW

// create customerDrink object 
const customerDrink = {
    drinkName: "Hot Chocolate",
    numOfSugars:0,
    isReady: true,

};

// log drink name and number of sugars to console
console.log("The " + customerDrink.drinkName + " takes " + customerDrink.numOfSugars + " sugars");

//Log appropriate message to console based on if drink is ready
if (customerDrink.isReady) {
    console.log("Ready for pick-up");
} else {
    console.log("Still in order queue");
}