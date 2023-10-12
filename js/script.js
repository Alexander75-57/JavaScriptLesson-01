'use strict';

for (let i = 0; i < 3; i++) {
	console.log(i)
	for (let j = 20; j < 23; j++) {
		console.log(j)
	}
}

//*
//**
//***
//****
//*****
//******

let result = '';
const length = 7;

for (let i  = 1; i < length; i++ ){
	for (let j = 0; j < i; j++){
		result +="*";
	}

	result += '\n';
}

console.log(result);


first: for (let i = 0; i < 3; i++) {
	console.log(`First Level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second Level: ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) continue first;
			console.log(`Third Level: ${k}`);
		}
	}
}
// Tasks
// 1
let num = 5;
while (num <= 10) {
	console.log(num);
	num++;
}

//2
for (let i = 20; i >= 10; i--) {
	if (i === 13) break;
	console.log(i);
}

//3
for (let i = 2; i <= 10; i++) {
	if (i % 2 === 0)
	console.log(i);
}

//4

for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

let num = 2;
while (num < 16) {
	num++;
	if (num % 2 !== 0) {
		console.log(num);
	}	
	
}
