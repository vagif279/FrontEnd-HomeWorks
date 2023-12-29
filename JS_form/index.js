const textarea = document.querySelector('textarea');
const counter = document.createElement('div');
counter.textContent = 'Symbol amount: 0';

document.body.appendChild(counter);

textarea.addEventListener('input', function () {
    const charCount = textarea.value.length;
    counter.textContent = 'Symbol amount: ' + charCount;
});