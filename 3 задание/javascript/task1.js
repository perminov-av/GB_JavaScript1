'use strict';
//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

console.log('Задание 1');
console.log(getSimpleInt(100));





function getSimpleInt(maxInt) {

    let i = 2;
    let arr = [];

    while (i <= maxInt) {
        let j = 0;
        let simpleInt = true; //маркер, что заданное число простое.
        while (j < arr.length) {
            if (i % arr[j] === 0) {
                simpleInt = false;
                break;
            }
            j++;
        }
        if (simpleInt) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
