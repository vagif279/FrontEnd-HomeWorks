/* В функцию конструктор MyArray добавить методы shift и unshift */

console.clear();

function MyArray() {
    
}

MyArray.prototype.shift = function() {
    
}

MyArray.prototype.unshift = function() {

}


const arr = new MyArray(1, 2, 3);

arr.shift();
console.log(arr); // { 3, 1, 2 }

arr.unshift();
console.log(arr); // { 1, 2, 3 }