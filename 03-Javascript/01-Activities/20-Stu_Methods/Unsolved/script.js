const constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
const planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
const star = "polaris";

// WRITE YOUR CODE BELOW
// add item to beginning of array without removing an item
constellations.unshift("Canis Major");
console.log(constellations)

// remove specific item from array
// use pop to remove last item
planets.pop();
console.log(planets);

// use splice to remove item
//var x= planets.indexOf("Venus");
//planets.splice(x, 1);
//console.log(planets);

// join constellations` and `planets into new array galaxy
var galaxy = constellations.concat(planets);
console.log(galaxy);

// convert string to UPPERCASE and store in new variable
var newString = "polaris".toUpperCase();
console.log(newString);
