'use strict';

// 05-82 ---------------------------

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

// ---------------------------------------------------------------
