'use strict';

let num1 = 20;

function showFirstMessage(text) {
	console.log(text);
	console.log(num1);
	num2 = 5;
}

showFirstMessage('Helloy World!');
console.log(num2);

//-----------------------------------

function calc(a, b) {
	return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 8));

//------------------------------

function ret() {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

//-------------------------------

const logger = function() {
	console.log('Helloy !!!')
}; 
logger();

//----------------------------------

const calc = (a, b) => a + b;
