/*
1. Дан непустой массив чисел. Написать алгоритм (не исползьуя встроенные методы), который изменит исходный массив так, чтобы числа в нём шли в обратном порядке
  Например:
	const arr = [1, 2, 3, 4, 5];
	
	// алгоритм

	console.log(arr); // [5, 4, 3, 2, 1]
*/
console.clear();

const arr = [1, 2, 3, 4, 5];

let  reversedArr = [];
for (let i = 0, j=arr.length-1; i < arr.length; i++, j--) {
	reversedArr[j] = arr[i];
}
for (let i = 0; i < arr.length; i++) {
	arr[i] = reversedArr[i];
}

console.log(arr);