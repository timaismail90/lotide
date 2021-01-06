const assertEqual = function(actual, expected) {
    if(actual === expected) {
        console.log(`Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`Assertion Failed: ${actual} !== ${expected}`)
    };
};


/* //Implement a function eqArrays which takes in two arrays 
and returns true or false, based on a perfect match. */

const eqArrays = function(arrOne, arrTwo) {
    let status;
    if(arrOne.length === arrTwo.length)
    {
        for(let i = 0; i < arrOne.length; i++)
        {
            if(arrOne[i] !== arrTwo[i])
            {
                status = false;
                // console.log(arrOne[i], arrTwo[i]);
            }
            else {
                console.log(arrOne[i], arrTwo[i])
                status = true
                
            }
        }
    }

    else{status = false}
   return status;
}

    
//  (let j=0; j<= arrTwo.length; j++)

    

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 4, 3], [1, 2, 3]), true); // => should PASS