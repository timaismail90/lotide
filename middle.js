//Test/Assertion functions
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


//Actual Function

const middle = function(array) {
    array.sort(function(a,b) {return a -b});
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if(array.length <= 2) {
            return newArr;
        } else {
            if(array.length % 2 ===1) {
                newArr = array[Math.floor(array.length/2)];
                console.log(newArr);
                return newArr;
            } else {
                newArr = array.splice([Math.floor(array.lenght/2) -1])
                console.log(newArr);
                return newArr;
            }
        }
    }

}










middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
const arr = [5, 6, 7, 8, 9];
middle(arr, [1, 2, 3, 4, 5, 6]) // => [3, 4]
assertArraysEqual(arr, [5, 6, 7, 8, 9]);