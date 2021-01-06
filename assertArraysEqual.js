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
assertArraysEqual(([1, 4, 3], [1, 2, 3]), true); // => should PASS