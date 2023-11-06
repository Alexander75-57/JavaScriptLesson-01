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

//-----------------------------------

const usdCurr = 38;
const eurCurr = 42;

function convert(amount, curr ) {
	console.log(amount * curr);
}
convert(500, usdCurr);
convert(500, eurCurr);

// ---------------------------------

const usdCurr = 38;
const discount = 0.9; 

function convert(amount, curr ) {
	return amount * curr;
}

function promotion(result) {
	console.log(result * discount);
}

const res = convert(500, usdCurr)
promotion(res);

// ---------------------------------

function test() {
	for (let i=0; i<5; i++) {
		console.log(i);
		if (i === 3) return;
	}
	console.log('Done');
}

test();

//-------------------------------------

function doNothing() {};
console.log(doNothing() === undefined);

//------------------------------------

function sayHello(name) {
	return `Привет, ${name} !`;
}
console.log(sayHello('Антон'));

//------------------------------------

function returnNeighboringNumbers(num) {
	return [(num-1),num,(num+1)];
}

console.log(returnNeighboringNumbers(5));

//---------------------------------------

function getMathResult(num, how) {
	for (let i=1; i<=how; i++) {
		result=(num*i + '---');
		if (i === how) result=num*i;
		console.log(result);
	}
		
}
getMathResult(5, 3);