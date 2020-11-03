'use strict';
/*
 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 */

console.log('Задание 2');

let bascet = [];
addBascetItem('Item1', 100, 2);
addBascetItem('Item2', 234.6, 1);
addBascetItem('Item3', 12.42, 15);
addBascetItem('Item4', 115, 5);
addBascetItem('Item5', 140, 1);
addBascetItem('Item1', 300, 1);
addBascetItem('Item1', 100, 1);
addBascetItem('Item3', 12.42, 3);

console.log(bascet);
console.log(`Общая стоимость: ${countBasketPrice()}`);



//addBascetItem - добавляет товар в корзину. Если товар с таким наименованием и ценой уже есть, добавляет количество к существующей позиции
//возвращает индекс добавленной/измененной позиции
//count > 0 
function addBascetItem(nameItem, priceItem, count) {
    let newItem = true;
    let result;
    if (count <= 0) {
        return -1;
    }
    for (let i = 0; i < bascet.length; i++) {
        if (bascet[i][0] === nameItem && bascet[i][1] === priceItem) {
            bascet[i][2] += count;
            newItem = false;
            result = i;
        }
    }
    if (newItem) {
        bascet.push([nameItem, priceItem, count]);
        result = bascet.length;
    }
    return result;
}

function countBasketPrice() {
    let result = 0;
    for (let i = 0; i < bascet.length; i++) {
        result += bascet[i][1] * bascet[i][2];
    }
    return result;
}
