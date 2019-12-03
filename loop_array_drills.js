'use strict';

// Max and Min (with WHILE loop)

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

// Compute the average with .forEach()

function average(numbers) {
    let sum = 0;
    numbers.forEach(function(arrNum) {
       sum = arrNum += sum;
    }); 
    let arrAvg = sum/numbers.length;
    return arrAvg; 
}


