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
		return "Ошибка. Проверьте правильность введенного номера места";
	} else {
		if ( place >=1 & place <=4) {
			return 1;
		}
		if ( place >=5 & place <=8) {
			return 2;
		}
		if ( place >=9 & place <=12) {
			return 3;
		}
		if ( place >=13 & place <=16) {
			return 4;
		}
		if ( place >=17 & place <=20) {
			return 5;
		}
		if ( place >=21 & place <=24) {
			return 6;
		}
		if ( place >=25 & place <=28) {
			return 7;
		}
		if ( place >=29 & place <=32) {
			return 8;
		}
		if ( place >=33 & place <=36) {
			return 9;
		}
		if ( place === 0 || place > 36) {
			return "Таких мест в вагоне не существует";
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

function getTimeFromMinutes(minutes) {
	let hours = 0;
	if (typeof(minutes) !== 'number' || !Number.isInteger(minutes) || minutes < 0 ) {
		console.log("Ошибка, проверьте данные");
	}else {
		hours = Math.trunc(minutes/60);
		if (hours == 2 || hours == 3 || hours == 4 || hours == 22 || hours == 23 || hours == 24 || hours == 32 || hours == 33 || hours == 34) {
			console.log(`Это ${hours} часа и ${minutes - (hours*60)} минут`);
		}
		else if (hours == 1 || hours == 21 || hours == 31) {
			console.log(`Это ${hours} час и ${minutes - (hours*60)} минут`);
		}
		else {
			console.log(`Это ${hours} часов и ${minutes - (hours*60)} минут`);
		}
					
	}
}
getTimeFromMinutes(150);
getTimeFromMinutes(50);
getTimeFromMinutes(500);
getTimeFromMinutes(240);
getTimeFromMinutes(-150);

//-------------------------------------------------

function findMaxNumber(a, b, c, d) {
	if (typeof(a) !== 'number' || typeof(b) !== 'number'|| typeof(c) !== 'number' || typeof(d) !== 'number' ) {
		console.log(0);
	} else {
		if (a > b & a > c & a > d) {
			console.log(a);
		}
		else if (b > a & b > c & b > d) {
			console.log(b);
		}
		else if (c > a & c > b & c > d) {
			console.log(b);
		}
		else if (d > a & d > b & d > c) {
			console.log(d);
		}
	}
}

findMaxNumber(1, 5, 6.6, 11);
findMaxNumber(1, 5, '6', '10');
findMaxNumber(1, 15, 6.6, 11);

// ----------------------------------------------

function fib(number) {
    if (typeof(number) !== 'number' || number == 0 || !Number.isInteger(number)) {
		console.log(``);
	}
		else {
			if (number == 1) {
			console.log("0");
		}
		else if (number == 2) {
			console.log("0 1");			
		}
		else if (number == 3) {
			console.log("0 1 1");
		}
		else {
			let a = 0;
		    let b = 1;
			let result = `${a} ${b} ${(a+b)} ${(b+(a+b))}`;
			for (let i = 4; i < number ; i++) {	
				let c = a + b;
				a = b;
				b = c		
				result += ` ${a + b + c} `;		
			}
			console.log(result);
		}
	}
	
}
fib(6);

// -------------------------------------------------

function first () {
	// Do something
	setTimeout(function () {
		console.log(1);
	}, 500);
}

function second () {
	console.log(2);
}
first();
second();

//------------------------------------------------

function learnJS(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}
function done() {
	console.log('Я прошёл этот урок!');
}
learnJS('JavaScript', done);

// 32 ------------------------------------------------

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		backgrount: 'red'
	}
};

// console.log(options["colors"]["border"]);
// delete options.name;
// console.log(options);
 
let counter = 0; // Сounter

for (let key in options) {
	if (typeof(options[key]) === 'object') {
		for (let keyColors in options[key]) {
			console.log(`Свойство ${keyColors} имеет значение ${options[key][keyColors]}`);
			counter++;
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
		counter++;
	}
}
console.log(counter);

// ----------------------------

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		backgrount: 'red'
	},
	makeTest: function() {
		console.log("Test");
	}
};

options.makeTest();

//console.log(Object.keys(options));
console.log(Object.keys(options).length);

// --------------------------------

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		backgrount: 'red'
	},
	makeTest: function() {
		console.log("Test");
	}
};

options.makeTest();

const {border, backgrount} = options.colors;
console.log(border);

// 33 ---------------------------------

const arr = [2, 3, 6, 8, 10];

// arr.pop(); // delet last key in massif
// arr.push(10); // add last key to massif

// console.log(arr);

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// -------------------------

const arr = [2, 3, 6, 8, 10];

for (let value of arr) {
	console.log(value);
}

// ----------------------------

const arr = [2, 3, 6, 8, 10];
arr[99] = 0;
console.log(arr.length);
console.log(arr);

//-----------------------------

const arr = [2, 3, 6, 8, 10];

arr.forEach(function(item, numberOfItem, arr) {
	console.log(`${numberOfItem}: ${item} внутри массива ${arr}`);
})

// ----------------------------------------

const str = prompt("", "");
const products = str.split(", ");
// console.log(products);
console.log(products.join('; '));

//---------------------------------------------

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a,b) {
	return a - b;
}
// 35 ----------------------------------

let a = 5;
	b = a;

b = b + 5;

console.log(b);
console.log(a);

//---------------------------

const obj = {
	a: 5,
	b: 1
}

const copy = obj; // Ссылка на obj !!!!! 
copy.a = 10;

console.log(copy);
console.log(obj);

// -------------------------

function copy(mainObj) {
	let copyObj = {};
	
	let key;
	for (key in mainObj) {
		copyObj[key] = mainObj[key];
	}
	return copyObj;	
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const copyNumbers = copy(numbers);

copyNumbers.a = 10;
// copyNumbers.c.x = 10; // не работает (не изменяет)

console.log(numbers);
console.log(copyNumbers);

const addToNumbers = {
	d: 17,
	e: 20
};

console.log(Object.assign(numbers, addToNumbers));
console.log(Object.assign({}, addToNumbers));

const cloneObject = Object.assign({}, addToNumbers);

cloneObject.d = 20;

console.log(addToNumbers);
console.log(cloneObject);

//---------------------------------

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'Night'

console.log(oldArray);
console.log(newArray);

//------------------------------

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],	
      internet = [...video, ...blogs, 'email', 'facebook'];

console.log(internet);

//----------------------------------

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);

//----------------------------

const array = ["a", "b"]
const newArray = [...array]

console.log(array);
console.log(newArray);

//---------------------------

const q = {
	one: 1,
	two: 2
};

const newObjFromQ = {...q};
console.log(newObjFromQ);

//-----------------------------
