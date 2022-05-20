const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr.slice(0);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
