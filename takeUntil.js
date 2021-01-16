// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
// steps
// 1. create the callback = callback provided should return true

const takeUntil = function(array, callback) {
    let newArr = [];
    for(i = 0; i< array.length; i++) {
        // console.log(array[i]);
        if(callback(array[i])) {
            break;
        }

        newArr.push(array[i]);

    }
    return  newArr;



    // ...
  }
  // let result = numbers.every( e  => e > 0);


  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  console.log(results2);