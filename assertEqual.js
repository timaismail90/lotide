// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if('Lighthouse Labs' === 'Bootcamp') {
        console.log("Assertion Passed: 'Lighthouse Labs' === 'Bootcamp'")
    } else {
        console.log("Assertion Failed:'Lighthouse Labs'!== 'Bootcamp'")
    };

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);