/*  Написать функцию, которая возвращает всю цепочку прототипов для любого 
    объекта вплоть до null. После того как показывается null в консоли 
    программа завершает свою работу */

console.clear();

function showProtoChain(obj) { //функция цепочки прототипов
    while (obj !== null) {
      console.log(obj);
      obj = Object.getPrototypeOf(obj);
    }
    process.exit();
}

const exampleObject = {A: 1, B: 2, C: 3}; 
showProtoChain(exampleObject); //вызов функции