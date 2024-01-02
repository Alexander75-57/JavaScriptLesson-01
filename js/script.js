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
//-------------------------------


