function changeImage(src) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = src;
}

function borderChange(id, color) {
    document.getElementsByClassName(id).style.borderColor = color;
}
