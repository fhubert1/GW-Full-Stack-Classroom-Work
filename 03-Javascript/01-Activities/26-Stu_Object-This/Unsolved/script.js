// TODO: What does 'this' refer to?
// it refers to an object
console.log(this);

// TODO: What does 'this' refer to?
// it refers to the object Window
function helloThis() {
   console.log(`Inside this function, this is ${this}`);
}

// TODO: What will this log?
// it will log 20 this refers to the value of the age object which is 10 plus 10
const child = {
   age: 10,
   ageTenYears: function() {
      console.log(this.age + 10);
   }
};

// TODO: What will this log?
// it will log 5750 which is 5000 multipled by 1.15
const investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
