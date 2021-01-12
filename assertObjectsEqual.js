const eqObjects = function(object1, object2) {
    arr1 = Object.keys(object1);
    arr2 = Object.keys(object2);
    if(arr1.length !== arr2.length) {
        console.log("false") 
    } else {
        for (const element of arr1 ) {
            // console.log(element)
            // console.log(object1[element])
            // console.log(object2[element])
            if(Array.isArray) {
                return eqArrays
            }
            else if (object1[element] === object2[element]) {
                console.log("true")
            } else {
                console.log("false") 
            }
        }
    }
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    // Implement me!
  };