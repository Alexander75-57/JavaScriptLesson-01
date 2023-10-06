'use strict';

if (4 == 9) {
	console.log('Ok!'); 
} else {
	console.log('Error');
}

const num = 50;

if (num < 49) {
	console.log('Error');
} else if (num>100) {
	console.log('More');
} else {
	console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');

const num = 50;

switch (num) {
	case 49:
		console.log('Not correct');
		break;
	case 100:
		console.log('Not correct');
		break;
	case 50:
		console.log('Correct');
		break
	default:
		console.log('Not to this time');
		break;		
}