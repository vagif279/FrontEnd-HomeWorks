/*
2. Написать функцию таймера обратного отчёта. Функция должна принимать 2 аргумента:
    + Временной интервал в секундах между выводом чисел
    + Число, с которого начнётся обратный отчёт. Число будет передано неотрицательное и целое
Выводить нужно начиная с числа включительно и до 0 включительно
По достижении 0 функция завершает свою работу
*/
console.clear();

function countdownTimer(interval, start) {
    let counter = start;

    console.log(counter);

    const intervalID = setInterval(() => {
        counter--;

        if (counter >= 0) {
            console.log(counter);
        } else {
            clearInterval(intervalID);
        }
    }, interval * 1000);
}

countdownTimer(1, 5); //обычный пример
//countdownTimer(0.1, 100); //этот пример тоже рабочий. можно использовать доли секунды