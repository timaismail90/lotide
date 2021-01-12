
function findKeyByValue (obj, value) {
    for(let k in obj) {
        // console.log(value)
        // console.log(obj[k]);
        if(obj[k] === value) {
            console.log(k);
            return k;
        } else {
            return undefined
        }
    }

}






const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
findKeyByValue(bestTVShowsByGenre, "The Wire");
// findKeyByValue(bestTVShowsByGenre, "That '70s Show");
  