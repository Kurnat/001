'use strict';

function sequence(startNumber = 1, step = 0) { //generator of numbers
    let number = startNumber;
    return function generator() {
        number += step;
        return number;
    }
}
  
function take(gen, x = 0) { // Array maker
    let arrayNumbersGen = [];
    for (let i = 0; i < x; i++) {
        arrayNumbersGen.push(gen())
    }
    return arrayNumbersGen;
}

let generator = sequence(undefined, 3);
let generatorTow = sequence(20, 10);
console.log(take(generator, 10));