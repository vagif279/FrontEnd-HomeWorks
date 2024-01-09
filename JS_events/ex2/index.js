const button = document.getElementById('showMessagesBtn');
const listenersCount = 10;

//Добавляем 10 слушателей
for (let i = 1; i <= listenersCount; i++) {
    button.addEventListener('click', function handler() {
        console.log(i);
    });
}

//Функция для ввода числа от 1 до 10 от пользователя
function getUserNumber() {
    const userNumber = parseInt(prompt('Введите число от 1 до 10:'), 10);

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
        alert('Некорректный ввод. Пожалуйста, введите число от 1 до 10.');
        return getUserNumber(); // Вызов заново если некорректный ввод
    }
    
    return userNumber;
}

//Функция для отображения сообщений
function showMessages(count) {
    for (let i = 1; i <= count; i++) {
        console.log(i);
    }
}

button.addEventListener('click', function () {
    const userNumber = getUserNumber();
    showMessages(userNumber);
});