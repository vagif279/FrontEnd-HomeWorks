const button = document.getElementById('showMessagesBtn');
const listenersCount = 10;

// Добавляем 10 слушателей
for (let i = 1; i <= listenersCount; i++) {
    button.addEventListener('click', function handler() {
        console.log(i);
    });
}