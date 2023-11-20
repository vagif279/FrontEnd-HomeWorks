/* В функцию конструктор MyArray добавить методы shift и unshift */

console.clear();

class MyArray {
    constructor() {
        this.length = 0;
    }
    shift() {
        //сдвиг всех элементов влево
        for (let i = 0; i <= this.length - 1; ++i) {
            if (i === this.length - 1) {
                this[i] = this[0];
            }
            this[i] = this[i + 1];
        }
        return 0;
    }
    unshift() {
        //сдвиг всех элементов вправо
        //тут я начал с конца чтобы не дойти до отрицательных значений
        for (let i = this.length - 1; i >= 0; --i) {
            if (i === 0) {
                this[i] = this[this.length - 1];
            }
            this[i] = this[i - 1];
        }
        return 0;
    }
}

const arr = new MyArray(1, 2, 3);

arr.shift();
console.log(arr); // { 3, 1, 2 }

arr.unshift();
console.log(arr); // { 1, 2, 3 }