/*
3. Написать функцию будильник. Функция должна принимать 1 аргумент:
	+ Время - строка формата HH:mm:ss
   Если хоть одна из частей времени не является формата - 2 цифры, то выводить ошибку и ничего не делать.
   При наступлении указанного времени выводить адекватное сообщение и завершать работу функции
*/
console.clear();

function setAlarm(timeString) {
   const timeParts = timeString.split(':');
   if (timeParts.length !== 3) {
      console.error('Время должно быть в формате HH:mm:ss');
      return;
   }
  
   const hours = parseInt(timeParts[0]);
   const minutes = parseInt(timeParts[1]);
   const seconds = parseInt(timeParts[2]);
  
   
}

setAlarm("13:09:00");