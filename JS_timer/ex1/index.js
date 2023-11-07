/*
1. Дан массив. Написать функцию, которая будет каждую секунду
выводить в консоль элементы массива, пока они не закончатся
    Функция должна принимать на вход 1 аргумент:
	+ Массив
*/
console.clear();

function printArrayElements(array) {
    let index = 0;

    const intervalId = setInterval(function(){
        if (index < array.length) {
            console.log(array[index]);
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

const myArr = [1,'a',3,'b',5];
printArrayElements(myArr);