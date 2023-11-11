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
  
   if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
      console.error('Время должно быть в формате HH:mm:ss');
      return;
   }
  
   const now = new Date();
   const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, seconds);
  
   if (alarmTime <= now) {
      alarmTime.setDate(alarmTime.getDate() + 1);
   }
  
   const delay = alarmTime - now;
   setTimeout(function() {
      console.log('Будильник сработал!');
   }, delay);
}

setAlarm("13:21:00");