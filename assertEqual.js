// creating our own assertEqual function

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`assertion failed: ${actual} !== ${expected}`);
  }
};

//Test Code
assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1, 1);
