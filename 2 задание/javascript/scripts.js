'use strict';
/*
1. Дан код:
//В постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование. 
//В префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением.

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 ++a возвращает 2; c = 2; a = 2;
d = b++; alert(d);           // 1 b++ возвращает 1; d = 1; b = 2;
c = (2+ ++a); alert(c);      // 5 ++a возвращает 3; c = 2 + 3 = 5; a = 3;
d = (2+ b++); alert(d);      // 4 b++ возвращает 2; d = 2 + 2 = 4; b = 3;
alert(a);                    // 3
alert(b);                    // 3

Почему код даёт именно такие результаты?
*/


/*
2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);
//скобки имеют наивысший приоритет, из-за этого в начале выполняется  
a *= 2;// a = 4; 
x = 1 + a; //x = 5
*/

/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; 
    ноль можно считать положительным числом.
*/
{
    console.log('Задание 3');
    alert('Задание 3.\nВведите 2 целых числа. Для пропуска задания введите - "Q"');

    let a = inputInteger();
    if (a !== null) {
        let b = inputInteger();
        if (b !== null) {
            if (a >= 0 && b >= 0) {
                alert(a - b);
            } else if (a < 0 && b < 0) {
                alert(a * b);
            } else {
                alert(a + b);
            }
        }
    }

}

function inputInteger() {
    let a = prompt('Введите число');
    if (!Number.isInteger(Number.parseInt(a))) {
        console.log(a);
        if (a.toLowerCase() === 'q') {
            return null;
        } else {
            alert('Введенное значение не удалось преобразовать к целому числу. Попробуйте еще раз. Для выхода введите "Q"');
            return inputInteger();
        }
    }
    return Number.parseInt(a);
}


/*  
    ### 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. 
*/
{
    console.log('Задание 4');
    alert('Задание 4.\nВведи число, от 0 до 15. Для пропуска задания введите - "Q"');
    let a = inputInteger();
    if (a >= 0 && a <= 15) {

        switch (a) {
            case 0:
                console.log(0 + '\n');
            case 1:
                console.log(1 + '\n');
            case 2:
                console.log(2 + '\n');
            case 3:
                console.log(3 + '\n');
            case 4:
                console.log(4 + '\n');
            case 5:
                console.log(5 + '\n');
            case 6:
                console.log(6 + '\n');
            case 7:
                console.log(7 + '\n');
            case 8:
                console.log(8 + '\n');
            case 9:
                console.log(9 + '\n');
            case 10:
                console.log(10 + '\n');
            case 11:
                console.log(11 + '\n');
            case 12:
                console.log(12 + '\n');
            case 13:
                console.log(13 + '\n');
            case 14:
                console.log(14 + '\n');
            case 15:
                console.log(15 + '\n');

        }
    } else {
        alert('Введено число большее 15 или меньше 0 ');
    }

}

/*
    ### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. 
*/
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

{
    console.log('Задание 5');
    console.log(`sum(4, 5) = ${sum(4, 5)}`);
    console.log(`sub(4, 5) = ${sub(4, 5)}`);
    console.log(`multiplication(4, 5) = ${multiplication(4, 5)}`);
    console.log(`division(4, 5) = ${division(4, 5)}`);
}


/*    
    
    ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 
    */
function mathOperation(arg1, arg2, operation) {
    let result;
    switch (operation.toLowerCase()) {
        case 'sum':
            result = sum(arg1, arg2);
            break;
        case 'sub':
            result = sub(arg1, arg2);
            break;
        case 'multiplication':
            result = multiplication(arg1, arg2);
            break;
        case 'division':
            result = division(arg1, arg2);
            break;
        default:
            break;
    }
    return result;
}

{
    console.log('Задание 6');
    console.log(`mathOperation(10, 12, sum) = ${mathOperation(10, 12, 'sum')}`)
    console.log(`mathOperation(10, 12, sub) = ${mathOperation(10, 12, 'sub')}`)
    console.log(`mathOperation(10, 12, multiplication) = ${mathOperation(10, 12, 'multiplication')}`)
    console.log(`mathOperation(10, 12, division) = ${mathOperation(10, 12, 'division')}`)
}

/*
    ### 7. *Сравнить null и 0. Попробуйте объяснить результат. 
    */
console.log('Задание 7');
if (null === 0) {
    console.log('null===0')
} else if (null == 0) {
    console.log('null==0');
} else if (null != 0) {
    console.log('null != 0')
} else if (isnull) {
    console.log('Черт знает, что творится');
}
//


/*
    ### 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/
function power(val, pow) {
    if (pow === 0) return 1;
    if (pow === 1) return val;
    return val * power(val, pow - 1);
}

console.log('Задание 8');
console.log(`power(6, 15) = ${power(6, 15)}`);
