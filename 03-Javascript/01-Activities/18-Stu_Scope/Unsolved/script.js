// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
// Declare Global variable
let shout = 'Shout';

function justShout() {
  console.log(`${shout}, ${shout}`);
  return;
}

function shoutItAllOut() {
  console.log(`${shout} it all out! `);
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
  let animal = "Lions";
  
  console.log(animal);
  return;
}

function sayTigers() {
  
  let animal = 'Tigers';

  console.log(`and ${animal} and `);
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!".
const bears = "Bears";

function sayBears() {
    //const bears = "Pandas";
    let result = `${bears}! OH  MY!`;
    //console.log(`${bears}! OH  MY!`);
    return result;
}

sayLions();
sayTigers();
console.log(sayBears());

// TODO: The variable 'sing' should be declared once in the local scope.
//const sing = "Sing"; removed global declaration

function singAlong() {
  const sing = "Sing"; // outer scope aka Lexical scope var sing is accessible to the inner function singASong!

  console.log(`${sing},`);

  const singASong = function () {
    console.log(`${sing} a Song.`);
  };

  singASong();
}

singAlong();
