'use strict';

//05-102  Webpack

function myModule() {
    this.hello = function() {
        console.log('hello');
    };
    this.goodbye = function() {
        console.log('bye!');
    };
}
// создаём-обращаемся обьект - module, со свойством - export
module.exports = myModule;