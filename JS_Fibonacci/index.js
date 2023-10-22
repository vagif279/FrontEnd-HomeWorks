/*
Дано неотрицательное целое число n. Написать функцию, которая на вход принимает 
данное число и возвращает n-ое число из ряда Фибоначчи

// n -> return
// 0 -> 0
// 1 -> 1
// 2 -> 1
// 3 -> 2
// 4 -> 3
// 10 -> 55
// 16 -> 987
*/
console.clear();

function fibo(num) {
    if(num === 0){
        return 0;
    }
    let before = 1;
    let after = 1;
    for (let i = 0; i < num-2; i++) {
        let sum = before + after;
        before = after;
        after = sum;
    }
    return after;
}

console.log(fibo(0)); //0
console.log(fibo(1)); //1
console.log(fibo(2)); //1
console.log(fibo(3)); //2
console.log(fibo(4)); //3
console.log(fibo(10)); //55
console.log(fibo(16)); //987