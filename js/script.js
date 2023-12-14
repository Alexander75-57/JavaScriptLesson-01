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

//---------------------------------

