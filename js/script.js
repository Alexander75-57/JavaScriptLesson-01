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
	
	if (typeof(how) !== 'number' || how <= 0) {
        console.log(num);
    }

	let result = '';

	for (let i = 1; i <= how; i++) {
		
		if (i === how) {
			result += `${num * i}`;	

		} else {
			result += `${num * i}---`; 
		}

	}
	console.log(result);
}
getMathResult(5, 3);

//----------------------------------

const str = "test";
const arr = [1, 4, 16];

console.log(arr.length);
console.log(arr[1]);

//-----------------------------------

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

//29
//-----------------------------------

function calculateVolumeAndArea(lenth) {
	if (typeof (lenth) !== 'number' || !Number.isInteger(lenth) || lenth < 0) {
		return "При вычислении произошла ошибка";
	} else {
		return `Объем куба: ${(lenth*lenth*lenth)}, площадь всей поверхности: ${(6*lenth*lenth)}`;
	} 
}
calculateVolumeAndArea(5);
calculateVolumeAndArea(15);
calculateVolumeAndArea(15.5);
calculateVolumeAndArea('15');
calculateVolumeAndArea(-15);
//-------------------------------

function getCoupeNumber(place) {
	if (typeof(place) !== 'number' || !Number.isInteger(place) || place < 0) {
		console.log("Ошибка. Проверьте правильность введенного номера места");
	} else {
		if ( place >=1 & place <=4) {
			console.log(1);
		}
		if ( place >=5 & place <=8) {
			console.log(2);
		}
		if ( place >=9 & place <=12) {
			console.log(3);
		}
		if ( place >=13 & place <=16) {
			console.log(4);
		}
		if ( place >=17 & place <=20) {
			console.log(5);
		}
		if ( place >=21 & place <=24) {
			console.log(6);
		}
		if ( place >=25 & place <=28) {
			console.log(7);
		}
		if ( place >=29 & place <=32) {
			console.log(8);
		}
		if ( place >=33 & place <=36) {
			console.log(9);
		}
		if ( place === 0 || place > 36) {
			console.log("Таких мест в вагоне не существует");
		}		
	} 
}
getCoupeNumber(33);
getCoupeNumber(7);
getCoupeNumber(300);
getCoupeNumber(0);
getCoupeNumber(7.7);
getCoupeNumber(-10);
getCoupeNumber('Hello');
//-----------------------------------