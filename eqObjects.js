

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



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false