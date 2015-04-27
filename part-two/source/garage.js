console.log('Follow the instructions in garage.js and make your changes to that file');

//------------------------------------------------------------------------------------------------------------------
// YOUR CODE: Create your garage "object literal" and Automobile "constructor" and "prototypes" here.
//------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------
// DRIVER CODE: Do **NOT** change anything below this point. Your task is to implement code above to make this work.
//              READ this code to figure out what your code is supposed to do
//------------------------------------------------------------------------------------------------------------------

function assert(test, message) {
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}

var cars = [
  new Automobile("BMW Z3", "red"),
  new Automobile("Volvo xc90", "orange"),
  new Automobile("Honda Element", "yellow"),
  new Automobile("Oldsmobile 442", "pink"),
  new Automobile("Tesla Model S", "purple"),
  new Automobile("Audi R8", "white"),
  new Automobile("Lamborghini Murcielago", "yellow"),
];


garage.addCars(cars);


assert(
  garage.name === "Boris' Vintage Garage", "the garage has a name"
);
assert(
  garage.location === "Boston", "the garage is located in Boston"
);

assert(
  cars[0].whatAreYou() === "I am an BMW Z3 and I am red.", "whatAreYou() correctly implemented for Automobile"
);

assert(
  cars[2].model === "Honda Element", "Automobile stores model"
);

assert(
  cars[0].whatAreYou === cars[5].whatAreYou, "only one implementation of the whatAreYou() function should exist"
);

assert(
  garage.findByColor("yellow").length === 2, "the garage should have 2 yellow cars"
);
assert(
  garage.findByModel("Tesla Model S").length === 1, "the garage should have 1 Tesla Model S"
);

console.log("All tests passed");