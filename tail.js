const assertEqual = function(actual, expected) {
    if(actual === expected) {
        console.log(`Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`Assertion Failed: ${actual} !== ${expected}`)
    };

};


const tail = function(arr) {
    for( let i = 0; i <= arr.length; i++) {
       return  arr.slice(0)
    }
}

const words = ["Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);