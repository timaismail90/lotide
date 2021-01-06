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

function assertArraysEqual (arrOne, arrTwo) {
    let status;
    if(arrOne.length === arrTwo.length)
    {
        for(let i = 0; i < arrOne.length; i++)
        {
            if(arrOne[i] !== arrTwo[i])
            {
               
                // status = false;
                // console.log(arrOne[i], arrTwo[i]);
                console.log("assertion failed")
            }
            else {
                
                // status = true;
                console.log("assertion passed!")
                console.log(arrOne[i], arrTwo[i])              
            }
        }
    }

    else{status = false}
    console.log("assertion failed")
   return status;
}

const without = function (source, itemsToRemove) {
   let arr1 = source.sort((a, b) => a - b);
    let arr2 = itemsToRemove.sort((a,b) => a-b);
    newArr = [];
    
    for (let i = 0; i < arr1.length; i ++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] !== arr2[j]) {
                newArr = arr1.splice[i]
                console.log(newArr);
            } else {
                return arr1;
            }
        }
    }
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
