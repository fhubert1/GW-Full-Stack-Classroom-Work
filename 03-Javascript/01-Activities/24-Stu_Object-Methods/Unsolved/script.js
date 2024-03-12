const chosenPet = "Lulu";

const shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

// TODO: Debug the code below
const dogMessage = function () {
   console.log(`Congrats! ${chosenPet}, a great dog, is available for adoption!`);
   shelter.apptMessage(); //missing shelter
}

const catMessage = function () {
  console.log(`Congrats! ${chosenPet}, an awesome cat, is available for adoption!`);
  shelter.apptMessage(); // missing shelter
}

// added reference to the shelter object (shelter.dogs)
if (shelter.dogs.includes(chosenPet)) {
  dogMessage();
} else if (shelter.cats.includes(chosenPet)) { // added reference to the shelter object (shelter.cats)
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  console.log(`Check out our featured dog, ${shelter.dogs[0]}. or our featured cat, ${shelter.cats[0]}!`) // fixed object references for dogs and cates
}
