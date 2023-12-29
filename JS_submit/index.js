let myButton = document.getElementsByTagName("form");

function submitForm(event) {
    event.preventDefault();
};

myButton.addEventListener('submit', submitForm);