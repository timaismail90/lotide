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
            if(object1[element] === object2[element]) {
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