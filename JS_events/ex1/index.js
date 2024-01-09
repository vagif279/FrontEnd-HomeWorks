const links = document.querySelectorAll('ul li a');

links.forEach(link => {
    
});

//Функция случайного выбора цвета ссылки
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}