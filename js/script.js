'use strict';

/*
// 2-40 --------------------------------------------

let number = 5; debugger

function logNumber() {
	console.log(number); debugger
}
number = 6;
logNumber(); debugger

number = 8;
logNumber(); debugger

// -------------------------------

function createCounter() {
	let counter = 0;
	const myFunction = function() {
		counter = counter + 1;
		return counter;
	}
	return myFunction
}

const increment =  createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

//47 ----------------------

function pow(x, y) {
	let result = 1;
	for (let i = 1; i < y; i++) {
//		result = x * result; 
		result *=x;
	};
	return result;
};
// или
function pow(x, y) {
	if (y=== 1) {
		return x;
	}else {
		return x * pow(x, y-1);
	}
};

pow(2, 1) // 2
pow(2, 2) // 4
pow(2, 3) // 8
pow(2, 4) // 16

// ------------------------------

let students = {
	js: [{
		name: 'John',
		progress: 100
	}, {
		name: 'Ivan',
		progress: 60
	}],

	html: {
		basic: [{
			name: 'Peter',
		    progress: 20
		}, {
			name: 'Ann',
		    progress: 18
		}],

		pro: [{
			name: 'Sam',
		    progress: 10
		}]
	}
};

function getTotalProgressByIteration(data) {
	let total = 0;
	let students = 0;
	
	for (let course of Object.values(data)) {
		if (Array.isArray(course)) {
			students += course.length;

			for (let i = 0; i < course.length; i++) {
				total += course[i].progress; 
			}
		}else {
			for (let subCourse of Object.values(course)) {
				students += subCourse.length;

				for (let i = 0; i < subCourse.length; i++) {
					total += subCourse[i].progress; 
				}

			}			
		}
	}

	return total / students;
};
console.log(getTotalProgressByIteration(students));

//---------------------------------------------------

let students = {
	js: [{
		name: 'John',
		progress: 100
	}, {
		name: 'Ivan',
		progress: 60
	}],

	html: {
		basic: [{
			name: 'Peter',
		    progress: 20
		}, {
			name: 'Ann',
		    progress: 18
		}],

		pro: [{
			name: 'Sam',
		    progress: 10
		}],

		semi: {
			students: [{
				name: 'Test',
				progress: 100
			}]
		}
	}
};


function getTotalProgressByRecursion(data) {
	if (Array.isArray(data)) {
		let total = 0;
		
		for (let i = 0; i < data.length; i++) {
			total += data[i].progress; 
		}

		return [total, data.length];
	} else {
		let total = [0, 0];

		for (let subData of Object.values(data)) {
			const subDataArr = getTotalProgressByRecursion(subData);
			total[0] += subDataArr[0];
			total[1] += subDataArr[1];
		}

		return total;
	}

}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);

// 49 ------------------------------------------

// touchstart
// touchmove
// touchend
// tochenter
// touchleave
// touchcancel

*/
// 50 -------------------------------------------
/*
const p = document.querySelectorAll('p');
console.log(p);


// const script = document.createElement('script');
// script.src = "js/test.js";
// script.async = false;
// document.body.append(script);

function loadScript(src) {
	const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
};
loadScript("js/test.js");
loadScript("js/some.js");
*/
// 66 -----------------------------
/*
function func() {
//	something = "string"; без обьявленмя переменной это тоже самое что и
//  как создание глобальной переменой и неможет быть удалена из памяти
	windows.something = "string"; 
};
*/
//--------------------------------------
/*
const someRes = getData();
const node = document.querySelector('.class');

setInterval(func() {
	if (node) {
		node.innerHTML = someRes; 
	}
}, 1000);
*/
//-------------------------------------------
/*
function outerFunction() {
	const potentiallyHugeArray = [];
	return function inner() {
		potentiallyHugeArray.push('Helloy');
		console.log('Function Helloy');
	} 
};
const sayHelloy = outerFunction(); // учечка памяти
*/
// ----------------------------------
/*
function createElement() {
	const div = document.createElement('div');
	div.id = 'test';
	return div;
};

const testDiv = createElement(); // утечка памяти
document.body.append(testDiv);

function deletElement() {
	document.body.removeChild(document.getElementById('test'));
}
deletElement();

// исправляем на:

function createElement() {
	const div = document.createElement('div');
	div.id = 'test';
	document.body.append(testDiv);
};

createElement();

function deletElement() {
	document.body.removeChild(document.getElementById('test'));
}
deletElement();
*/
//67 ---------------------------------
/*
let user = {name: 'Ivan'};

const arr = [user]; // после удаления следующей строкой массив будет существоаать в памяти это
user = null; // то же утечка памяти, так существует на него сылка

console.log(user);
console.log(arr[0]);
*/
// исправляем на --------------------------
/*
let user = {name: 'Ivan'};

let map = new WeakMap();
map.set(user, 'data');

user = null; 

console.log(map.has(user));
*/
//------------------------------
/*
let cashe = new WeakMap();

function casheUser(user) {
	if (!cashe.has(user)) {
		cashe.set(user, Date.now());
	}
	return cashe.get(user);
};

let lena = {name: 'Elena'};
let alex = {name: 'Alexander'};

casheUser(lena);
casheUser(alex);

lena = null;

console.log(cashe.has(lena));
console.log(cashe.has(alex));
*/
//--------------------------
// WeakMap - может add, has, delet, get
// WeakSet - может add, has, delet, неможет перебираться
/*
let messages = [
	{text: 'Hello', from: 'Ivan'},
	{text: 'World', from: 'Alex'},
	{text: '.....', from: 'Elena'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
//readMessages.add(messages[1]);
messages.shift(); // удаляем первый обьет массива message

console.log(readMessages.has(messages[0]));

// 68 -----------------------------------------------

const now = new Date();
console.log(now); // выводит 2023-12-18T12:46:27.228Z

//--------------------------
const now = new Date('2023-12-18');
console.log(now); // выводит 22023-12-18T00:00:00.000Z

//-----------------------------
const now = new Date(2023, 7, 23, 12);
console.log(now);

//-------------------

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours());

//****************************

const now = new Date();

console.log(now.getTimezoneOffset());
console.log(now.getTime());
*/
//-----------------------
/*
const now = new Date('2023-12-18T');
 // new Date.parsel('2023-12-18');


console.log(now.setHours(18, 45));
console.log(now);
*/
/*
let start = new Date();

for (let i = 0; i < 1000000; i++) {
	let some = i ** 3;
};

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);
*/
// 04-75 --------------
/*
function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log(`Hello ${this.name}`)
	}
}

User.prototype.exit = function(){
	console.log(`Пользователь ${this.name} ушёл`);
}
//добавили с помощью prototype - метод в обьект;

const ivan = new User('Ivan', 28); 
// ivan новый обьект соссвойствами функции User;
// function User -конструкторж
//this.hello - добавляем метод.
const alex = new User('Alex', 25);

ivan.hello();
alex.hello();
// вызов метода обьекта
ivan.exit();

console.log(ivan);
console.log(alex);
// выводит:
// User { name: 'Ivan', id: 28, human: true }
// User { name: 'Alex', id: 25, human: true }
// обьект со свойстами - name, user ..., значение Ivan ....;
*/
// 04-76 ------------------------------

// способы вызова фукции
/*
function showThis() {
	console.log(this);
}
showThis();
//1) вверху обычная функция: this = windows, но если стоит 'use strict' то будет- undefined;
*/
//-------------------------------------
/*
function showThis(a, b) {
	console.log(this);
	function sum() {
		console.log(this);
		return a + b;
	}

	console.log(sum());
}
showThis(4, 5); 
*/
// 2-й способ ниже --------------------------
/*
const obj = {
	a: 20,
	b: 15,
	sum: function() {
		console.log(this);
	}
};
obj.sum();
//контекст у метода (в даном случаи "sum") обьекта - будет сам обьект;
*/
// но если добавить в метотд ещё фукцию 
/*
const obj = {
	a: 20,
	b: 15,
	sum: function() {
		function shout() {
			console.log(this);
		}
		shout();		
	}
};
obj.sum();
*/
// будет- undefined;

//3-й способ будет конструктор ------------------------
// this  в конструторах и классах - это новй экземпляр обьекта;
/*
function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log(`Hello ${this.name}`)
	};	
}

const ivan = new User('Ivan', 28); 
const alex = new User('Alex', 25);
*/
//4-й споасоб -----------------------
/*
function sayName() {
	console.log(this);
	console.log(this.name);

}

const user = {
	name: 'John' 
};
// 1) метод вызова функции через ".call":
sayName.call(user);
// 2) метод вызова функции через ".apply":
sayName.apply(user);
*/
// ----------------------------
/*
function sayName(surname) {
	console.log(this);
	console.log(this.name + surname);
}

const user = {
	name: 'John' 
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

// 3-й метод вызова

function count(num) {
	return this*num;
};

//в переменную 'double' вставим фукцию
const double = count.bind(2);
console.log(double(10));

// 4-й способ - метод Ручная привязка через this: call, apply, bind
// -----------------------

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
	console.log(this);
});
// через function при кликанье на обьект "this" - вызываем сам обьект
btn.addEventListener('click', function(){
	this.style.backgroundColor = 'red'; // заменили фон обьекта
});
*/

const obj = {
	num: 5,
	sayNumber: function() {
		const say = () => {    // переделатьв обычную функцию выведет ошибку
			console.log(this);
		}
		say();
	}
};

obj.sayNumber();

//------------------------------------

const double = (a) => {
	return a * 2;
}
// если в одну строку то можно написать так:

const double = (a) => a * 2;

// ------------------------------------
// но если заменить обычную функуцию на стрелочную ниже

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
	this.style.backgroundColor = 'red'; // работать не будет
});
// нужно исправить тог да см ниже
btn.addEventListener('click', (e) => {
	e.target.this.style.backgroundColor = 'red'; // работать не будет
});

