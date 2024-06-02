/*
Q3) let string = 'INDIA'
output = 'INDONESIA'
Use array.splice
*/

let string = 'INDIA';
let stringArray = string.split('');
let substring = 'ONES';
let insertIndex = 3;
stringArray.splice(insertIndex,0, ...substring);
let result = stringArray.join('');
console.log(result);