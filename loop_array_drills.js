'use strict';

// max and min (with WHILE loop)

function max(numbers) {
    let currentMax = numbers[0];
    let i = 0; 
    while (i <= numbers.length) {
        if (numbers[i] > currentMax) {
            currentMax = numbers[i];
        }
        else if (currentMax === []) {
            return undefined; 
            }
        i++; 
    }
    return currentMax; 
}
  

function min(numbers) {
    let currentMin = numbers[0];
    let i = 0;
    while (i <= numbers.length) {
        if (numbers[i] < currentMin) {
            currentMin = numbers[i];
        }
        else if (currentMin === []) {
            return undefined;
        }
        i++;
    }
    return currentMin;
}


