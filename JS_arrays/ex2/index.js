/*
2. Дан массив и переменная с неким значением. Реализовать алгоритм встроенного метода unshift, не используя встроенные методы
  Например:
	const arr = [1, 2, 3];
	const element = 'begin';
	
	// алгоритм

	console.log(arr); // ['begin', 1, 2, 3]
*/
console.clear();

const arr = [1, 2, 3];
const element = 'begin';

let newArr = [];
newArr[0] = element;

for (let i = 0; i < arr.length; i++) {
    newArr[i+1] = arr[i];
}
for (let i = 0; i < newArr.length; i++) {
	arr[i] = newArr[i];
}

console.log(arr); // ['begin', 1, 2, 3]