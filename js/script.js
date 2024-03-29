'use strict';

// 05-82 ---------------------------
/*
const persone = {
	name: 'Alex',
	tel: '+75577557'
};

console.log(JSON.stringify(persone));
// {"name":"Alex","tel":"+75577557"} - такой фомат (текстовый) можно отправлять на сервер;

// ---------------------------------

const persone = {
	name: 'Alex',
	tel: '+75577557'
};

console.log(JSON.parse(JSON.stringify(persone)));

//{ name: 'Alex', tel: '+75577557' } - при возврате получаем наш обьект;

//-------------------------

const persone = {
	name: 'Alex',
	tel: '+75577557',
	parents: {
		mom: 'Olga',
		dad: 'Mike'
	}
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);
*/
// 05-86 --------------------------------------------------------
/*
console.log('Запрос данных.....'); // - синхронный код
// далее асинхронный  который выполнится чкркз 2 сек.
setTimeout(() => {
	console.log('Подготовка данных.....');

	const product = {
		name: 'TV',
		price: 450
	}

	setTimeout(() => {
		product.status = 'order';
		console.log(product);
	}, 4000);

}, 2000);
*/
// переделываем выше код через Promise ----------------------------
/*
console.log('Запрос данных.....');
// создаём с помощью конструктора, в Promise функция - двумя аргументами которые являются функциями resolve и reject;
const req = new Promise(function(resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных.....');
	
		const product = {
			name: 'TV',
			price: 450
		}

		resolve(product); //при положительном исходе передаём Product - делаем Return припомощи функции resolve;  
	
	}, 2000);
});
//в случаи положительного исхода(resolve) испльзуем метод then в Promise
req.then((product) => {
	setTimeout(() => {
		product.status = 'order';
		console.log(product);
	}, 4000);
});
*/
// упрощаем конструкцию Promise---------------------------------
/*
console.log('Запрос данных.....');

const req = new Promise(function(resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных.....');

		const product = {
			name: 'TV',
			price: 450
		}

		resolve(product);

	}, 2000);
});

req.then((product) => {
	const req2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product); // выводи данные
		}, 4000);
	});
// выводим 	данные Promise2 (product помещаем в data)
	req2.then(data => {
		console.log(data);
	});
});
*/
// модернезируем код убираем req2 2-й Promise---------------- 
/*
console.log('Запрос данных.....');

const req = new Promise(function(resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных.....');

		const product = {
			name: 'TV',
			price: 450
		}
		resolve(product);
	}, 2000);
});

req.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product); 
		}, 4000);
	});
}).then(data => {
	console.log(data);
});
*/
// ------------------------------------
/*
console.log('Запрос данных.....');

const req = new Promise(function(resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных.....');

		const product = {
			name: 'TV',
			price: 450
		}
		resolve(product);
	}, 2000);
});

req.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product); 
		}, 4000);
	});
}).then(data => {
	data.modify = true;
	return data;
}).then(data => {
	console.log(data);
});

// ниже тест на Reject - если не выполнелось условие, завис сервер т.д.;

console.log('Запрос данных.....');

const req = new Promise(function(resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных.....');

		const product = {
			name: 'TV',
			price: 450
		}
		resolve(product);
	}, 2000);
});

req.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			reject(); // не нашли продукт
		}, 4000);
	});
}).then(data => {
	data.modify = true;
	return data;
}).then(data => {
	console.log(data);
}).catch (() => {   // действие выполняется при ошибке сработал Reject; все then пропускаются и выполняется catch;
 console.error('Произошла ошибка')
});

// блок Finaly ----------------------------------
//Finally выпоняется в любом случаи, при любом значении Promise - resolve или reject, прописывается в конце после than и catch;

console.log('Запрос данных.....');

const req = new Promise(function(resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных.....');

		const product = {
			name: 'TV',
			price: 450
		}
		resolve(product);

	}, 2000);
});

req.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			reject(); // 
		}, 4000);
	});
}).then(data => {
	data.modify = true;
	return data;
}).then(data => {
	console.log(data);
}).catch (() => {   
	console.error('Произошла ошибка')
}).finally(() => {
	console.log('Finally');
});

// у Promise есть метод all и race ---------------------

const test = time => {
	return new Promise(resolve => {
			setTimeout(() => resolve(), time);
	});
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

// используем в Promise метод  - all

const test = time => {
	return new Promise(resolve => {
			setTimeout(() => resolve(), time);
	});
};
// Promise.all - выподняется после завершения всех промисов, при положительном результате будет then, при отрицательном catch;
Promise.all([test(1000), test(2000)]).then(() => {
	console.log('ALL');
});

//метод race -------------------
// выполняется когда отработает хоть один Promise;
const test = time => {
	return new Promise(resolve => {
			setTimeout(() => resolve(), time);
	});
};
Promise.race([test(1000), test(2000)]).then(() => {
	console.log('ALL'); // выполнится через 1 сек (1000 ms)
});
*/

//05-88 Методы перебора массивов -----------------------
/*
// filter - метод - филдьтрует и возвращает новый массив;
const names = ['Ivan', 'Ann', 'Ksenia', 'Oleksandr'];

const shortNames = names.filter(function(name) {
	return name.length < 5;
});
console.log(shortNames);
// -------------------------------------

// map - метод изменяем исходный массив
const answer = ['IvAn', 'AnnA', 'Hello'];
/*
const result = answer.map(item => {
	return item.toLowerCase();
})
*//* //так как  одна строка упрощаем
const result = answer.map(item => item.toLowerCase());
console.log(result);
//----------------------------
// модернизируем запись- Но лучше делать через пересенную как выше;
let answer = ['IvAn', 'AnnA', 'Hello'];
answer = answer.map(item => item.toLowerCase());
console.log(answer);
//-------------------------------------
*/
// every и some - методы - возвращают True или False булиновые значения;
/*
const arr = [4, 'fhfhf', 'yiyigjkgjkgy'];

console.log(arr.some(item => typeof(item) === 'number'));
// получаем в консоль - true
//-------------------------

const arr = [4, 'fhfhf', 'yiyigjkgjkgy'];
console.log(arr.every(item => typeof(item) === 'number'));
// получаем в консоль - false;
*/
// reduce - метод   собирать массив в одно целое ------------------
/*
const arr = [4, 5, 1, 2, 3, 6];
const result = arr.reduce((sum, current) => sum + current);

//сперва sum=0, идёт
//первый этап 0+4
//затем 4+5
//затем 9 + 1 и т.д
console.log(result);
*/
// ------------------------
/*
const arr = ['apple', 'pear', 'solt', 'plum'];
const result = arr.reduce((sum, current) => sum + ', ' + current);

console.log(result);
// или модернизировать:
const arr = ['apple', 'pear', 'solt', 'plum'];
const result = arr.reduce((sum, current) => `${sum}, ${current}`);

console.log(result);
*/
// --------------------------
/*
const arr = [4, 5, 1, 2, 3, 6];
const result = arr.reduce((sum, current) => sum + current, 3); // первоначальное значение будет 3;

console.log(result)
*/
//-------------------
/*
const obj = {
	Ivan: 'person',
	ann: 'person',
	dog: 'animal',
	cat: 'animal'
};

const newArr = Object.entries(obj);

// Object.entries - меняет обьект на массив в массиве

console.log(newArr);

// ----------------------

const obj = {
	ivan: 'person',
	ann: 'person',
	dog: 'animal',
	cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

// Object.entries - меняет обьект на массив в массиве и к массиву применяем метод filter и map;

console.log(newArr);
*/
//05-96 -----------------
/*
// new RegExp('pattern', 'flags');
// /pattern/f
const ans = prompt('Введите ваше имя');
const reg = /n/; // n -патерн, что ищем
// ищем внутри строки ввода "n";
// метод search - ищеет первое совпадение, результат в виде если найдено: 1; если нет: -1
console.log(ans.search(reg)); 

// Флаги - своства поиска
// i - что то найти внезависимости от регистра
// g - флаг глобальносьти,найти несколько нахождений;
// m - поиск в многострочном режиме;
*/
//метод - match, результат в виде массива
/*
const ans = prompt('Введите ваше имя');
const reg = /n/ig;
console.log(ans.match(reg));
*/
// Replace - метод замены----------------------
/*
const pass = prompt('Password');

// 1-й аргумент что заменяем, 2-й на что заменяем;
console.log(pass.replace(/./g, "*")); // /./g - регулярнык выражения;

//заменяем девисы на двоеточие;
console.log('12-34-56'.replace(/-/g, ':'));
*/
// Test - метод ------ возвращает True или Fals
/*
const ans = prompt('Введите ваше имя');
const reg = /n/ig;

console.log(reg.test(ans)); 
// \d - ищем цифры
// \w - ищем все слова и буквы
// \s - ищем все пробелы
*/
/*
const ans = prompt('Введите ваше число');
const reg = /\d/g;
console.log(ans.match(reg)); 
*/ /*

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));
*/
// Обратные классы - ищем не буквы, не цифры и т.д.
// \D - ищем не цифры
// \W - ищем не слова и буквы

// 05 - 99 -своство обьектов акцесоры - get, set
/*
const persone = {
	name: "Alex",
	age: 25,

	get userAge() {      // берем значение;
		return this.age; 
	},
	set userAge(num) {   // назначаем значение;
		this.age = num;   
	}
	
};
console.log(persone.userAge = 30);
console.log(persone.userAge);
*/
// 05 - 100 Инкапсуляция - принцип обьектно орентированное програмирование
/*
// создаёи конструктор обьекта
function User(name, age) {
	this.name = name;
	this.age = age;

	this.say = function() {
		console.log(`Имя пользователя: ${this.name}, возраст: ${this.age}`);
	}
};
//создаём обьект спомощью конструктора
const ivan = new User('Ivan', 27);
//получаем свойства обьекта
console.log(ivan.name);
console.log(ivan.age);
//можем менять значеня
ivan.age = 30;
ivan.name = 'Alex';
// и вызовем метод обьекта say
ivan.say();
// результат:
// Ivan
// 27
// Имя пользователя: Alex, возраст: 30
*/
// что бы избежать вмешательство из вне применяем Инкапсуляцию
/*
function User(name, age) {
	this.name = name;
	let userAge = age;

	this.say = function() {
		console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
	}
	// создаём функцию - метод для получения данных
	this.getAge = function() {
		return userAge;
	}
	// создаём функцию для изменения данных
	this.setAge = function(age) {
		if (typeof age === 'number' && age > 0 && age < 110) {
			userAge = age;
		} else {
			console.log('Недопустимое значение');
		}
	} 

};
const ivan = new User('Ivan', 27);
console.log(ivan.name);
console.log(ivan.getAge());

ivan.setAge(30);
ivan.setAge(300);
console.log(ivan.getAge());
ivan.say();
*/
// преобразуем в классы
/*
class User {
	constructor(name, age) {
		this.name = name;
	    this._age = age; // используем слодаж - "_"
	}
	
	#surname = 'Morozov';  // # - создаёт приватное свойство

	say = () => {
		console.log(`Имя пользователя: ${this.name}, ${this.#surname}, возраст: ${this._age}`);
	}
	get age() {
		return this._age;
	}
	set age(age) {
		if (typeof age === 'number' && age > 0 && age < 110) {
			this._age = age;
		} else {
			console.log('Недопустимое значение');
		}
	} 
};
const ivan = new User('Ivan', 27);
/*
console.log(ivan._age);
ivan.age = 99;
console.log(ivan._age);
*//*
console.log(ivan.surname);
ivan.say();
*/
// 05 - 101 Модуль
/*
// 1-й способ через аннанимную самовызывающая функция
const number = 1;
(function(){
	let number = 2;
	console.log(number);
	console.log(number+3);
}());
console.log(number);
*/

// 2-й способ  обьектный интерфейс
/*
const user = (function(){
	const privat = function() {
		console.log('I am privat!');
	};
	return {             // конструируем обьект и даём ему метод вызов ссылки privat;                                      
		sayHello: privat
	};

}());
user.sayHello();
*/
//05-102  Webpack - file main.js  "Webpack сборщик модулей"
/*
const myModule = require('./js/main'); // берём данные из файла main;

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();
*/
// 05-106 Ошибки. Как избежать “поломки” своего кода
// Конструкция try-catch;
/*
try {
	console.log('Normal');
	console.log(a); // вносим ошибку (a переменной такой нет) 
	console.log('result');

} catch(error) {     // в скобках запишется вид ошибка
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);

} 
//finally {
//
// }
console.log('Still normal');
*/
// 05 - 111 Генератор - функции
// выдёют результат последовательно
/*
function* generator() {
	yield 's';
	yield 'c';
	yield 'r';
	yield 'i';
	yield 'p';
	yield 't';
}
const str = generator();

// console.log(str.next()); // выводит { value: 's', done: false }
// console.log(str.next()); // выводит{ value: 'c', done: false }
// console.log(str.next()); // выводит{ value: 'r', done: false }
// console.log(str.next()); // выводит{ value: 'i', done: false }
// console.log(str.next()); // выводит{ value: 'p', done: false }
// console.log(str.next()); // выводит{ value: 't', done: false }
// console.log(str.next()); // выводит{ value: undefined, done: true }
// -----------------
console.log(str.next().value); // выводит s
*/
/*
function* count(n) {
	for(let i = 0; i < n; i++ ) {
		yield i;
	}
}
const counter = count(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value); // выводит каждый результат цикла
*/
/*
function* count(n) {
	for(let i = 0; i < n; i++ ) {
		yield i;
	}
}

for (let k of count(7)) {
	console.log(k)
}
*/
// 05-114. Event loop ---------------
/*
console.log(1);

setTimeout(() => {
	console.log('timeout_4000');
}, 4000);

setTimeout(() => {
	console.log('timeout_4000');
}, 4000);

console.log(2);
*/
//---------------------
/*
setTimeout(() => {
	console.log(1)	
}, 0); // минимум по умолчанию 4 сек - 40000
console.log(2);
//выводит сперва 2 затем 1
*/
// 05-115 - микрозадачи - then, catch, finaly, await 
/*
setTimeout(() => console.log('timeout'));

Promise.resolve()
	.then(() => console.log('promise')); // микрозадача

console.log('code');
*/
// 1) () => {}
// 2) microtasks: then, catch, finaly, await 
// 3) render 
// 4) () = {}
// 5) microtasks: then, catch, finaly, await
// 6) .........

setTimeout(() => console.log('timeout'));

Promise.resolve()
	.then(() => console.log('promise')); // микрозадача

queueMicrotask(() => console.log('WOW')); // запуск внутри очереди микрозадач;

Promise.resolve()
.then(() => console.log('promise')); // микрозадача	

console.log('code');

// 05- 116 