// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
// steps
// 1. create the callback = callback provided should return true

const takeUntil = function(array, callback) {
    array.map(function(item) {
        
    })


    // ...
  }



  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);  