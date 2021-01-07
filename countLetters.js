// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if(actual === expected) {
        console.log(`Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`Assertion Failed: ${actual} !== ${expected}`)
    };

};

const countLetters = function(sentence) {
    let results = {};
    for ( const letter in sentence) {
        console.log(letter);
        const chy = sentence[letter];
        if(!results[chy]) {
            results[chy] = 0;
        }   
        results[chy]++;

    }
    return results;
}

console.log(countLetters("hello world"));