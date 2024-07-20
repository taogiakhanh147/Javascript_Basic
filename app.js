// Bai tap 1: Module trong javascript ES6
import logger from './logger/index.js'

// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constant.js';

import * as constants from './constant.js'

console.log(constants)

logger("khanh", constants.TYPE_WARN)

// bài tập 2: Enhanced object literals trong javascript ES6
// 2.1
var name = 'khanh';
var age = 23;
var info = {
    name,
    age,
    getName() {
        return name;
    }
};
console.log(info.getName())

// 2.2 rest parameters (...) (rest dung trong ham)
function logger2([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}
logger2([1, 2, 3, 4, 5]);

// bai tap 3: Spread (spread dung trong goi ham)
//3.1 Noi chuoi
var array1 = ['javascript', 'java', 'C#'];
var array2 = ['PHP', 'Python'];
var array3 = [...array2, ...array1]; // spread
console.log(array3);

// 3.2 mang
var subject = ['javascript', 'C#', 'java'];
function showSubject(a,b,...rest) { // rest
    console.log(rest.length); 
}

showSubject(...subject); //spread