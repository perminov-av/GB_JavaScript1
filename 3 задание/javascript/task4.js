'use strict';

/*
4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/



console.log(printPiramid(20));


function printPiramid(lineCount) {
    let piramid = '';
    let piramidLine = '';
    const symbol = 'x';
    for (let i = 0; i < lineCount; i++) {
        piramidLine += 'x';
        piramid += piramidLine + '\n';
    }
    return piramid;
}
