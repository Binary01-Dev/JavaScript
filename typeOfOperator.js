let number1 = 10;
let number2 = 22;

let text = "Hello";

let concatanate_1= number1 + number2;

let concatanate_2 = number1 + "text";

console.log(concatanate_1);
console.log(concatanate_2);
console.log(typeof concatanate_1); // number
console.log(typeof concatanate_2); // string : for priority of string
//document.getElementById("demo2").innerHTML = concatanate_1;

let lenghtTest = "1\t2";
console.log(lenghtTest.length);
document.getElementById("demo2").innerHTML = lenghtTest;

let m = new Number(5);
let n = 5;
// now check value and type
console.log(m === n); // false