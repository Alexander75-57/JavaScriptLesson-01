'use strict';

//const hamburger = 5;
//const fries = 0;

//if (hamburger && fries) {
//	console.log('Good !!!');
//}

const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries);

console.log(1 && 0);
console.log(1 && 5); 
console.log(null && 5);
console.log(0 && 'Something');   

if (hamburger === 3 && cola === 1 && fries) {
	console.log('All Good !!!');
}else {
	console.log('lets go to another place');
}