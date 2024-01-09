const links = document.querySelectorAll('ul li a');

links.forEach(link => {
    //Отвечает за то покраску ссылки
    link.addEventListener('mouseenter', () => {
        link.style.color = getRandomColor();
    });

    //Отвечает за очищение цвета ссылки после того как мышку убрали
    link.addEventListener('mouseleave', () => {
        link.style.color = '';
    });

    //Убирает дефолтное поведение ссылки (переход по ней)
    link.addEventListener('click', (event) => {
        event.preventDefault();
    });
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