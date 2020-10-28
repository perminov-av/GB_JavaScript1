'use strict';
/*
 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
 Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – *температура по 
 Цельсию 
*/

console.log('Задание 1');

let degreeCelsius = prompt('Введите температуру по Цельсию', '0');
console.log(degreeCelsiusToFahrenheit(degreeCelsius, 123, 123,123,123));


function degreeFahrenheitToCelsius(degreeFarenget) {
    return degreeFarenget * 5 / 9 - 32;
}

function degreeCelsiusToFahrenheit(degreeCelsius) {
    return 9 / 5 * degreeCelsius + 32;
}

function degreeCelsiusToFahrenheit(degreeCelsius, test) {
	console.log('degreeCelsiusToFahrenheit: ' + test);
    return 9 / 5 * degreeCelsius + 32;
}

/*
 3. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. 
 Вывести admin (должно вывести «Василий»).
*/

console.log('Задание 3');
let admin;
let name = 'Василий';
admin = name;
console.log(`admin=${admin}`);

/*
 4. *Чему будет равно JS-выражение 1000 + "108"/
*/
console.log('Задание 4');
let task4 = 1000 + "108";
console.log(`1000+"108" = ${task4}`);


/*
5. *Самостоятельно разобраться с атрибутами тега script (async и defer)/
Оба тега загружают скрипт, при этом не блокируя загрузку HTML
defer:
    1) скрипт выполняется после загрузки дерева DOM, но до наступления события DOMContentLoaded (то есть сам html 
	загружен, но могут отсутствовать некоторые изображения или стили);
    2) скрипты выполняются последовательно (сверху вниз), в порядке встречи в html-документе. 

async:
    1) скрипты никак не связаны с загрузкой html-документа, и могу быть исполнены как во время ее загрузки, так и 
	после ее завершения;
    2) порядок выполнения скриптов зависит от загрузки, кто первый загрузился, тот и будет запущен первым.    
*/
