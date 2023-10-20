console.clear();

const titles = ['Заголовок 1', 'Очень длинный заголовок во всей книжке', 'Заголовок 2'];
const pages = [10, 20, 123456789012345];

for (let i = 0; i < titles.length; i++) {
    const stringPages = pages[i].toString();
    const dots = 20 - titles[i].length - stringPages.length;
    console.log(titles[i].padEnd(dots, '*') + stringPages);
}