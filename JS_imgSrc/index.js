const progressBar = document.getElementById('progress');
let loadedCount = 0; // из 10
// Функция для обновления полоски прогресса
function updateProgressBar() {
    const percent = (loadedCount / imageSrcs.length) * 100; //10
    progressBar.style.width = percent + '%'; //10%
    progressBar.textContent = percent + '%';
}


function loadImage(src) {
    const img = new Image();
    img.src = src;

    img.addEventListener('load', function () {
        document.body.append(img);
        loadedCount++;
        updateProgressBar();
    });
}


const imageSrcs = [
    'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg', //1
    'https://images.pexels.com/photos/819697/nature-landscape-barn-farm-819697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', //2
    'https://images.pexels.com/photos/206768/pexels-photo-206768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', //3
    'https://images.pexels.com/photos/580276/pexels-photo-580276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', //4
    'https://images.pexels.com/photos/14023017/pexels-photo-14023017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', //5
    'https://images.pexels.com/photos/10605267/pexels-photo-10605267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', //6
    'https://images.pexels.com/photos/18521419/pexels-photo-18521419/free-photo-of-aerial-view-of-terrace-plantation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', //7
    'https://images.pexels.com/photos/14036080/pexels-photo-14036080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', //8
    'https://images.pexels.com/photos/8314510/pexels-photo-8314510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', //9
    'https://images.pexels.com/photos/12535320/pexels-photo-12535320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', //10
];



for (let i = 0; i < imageSrcs.length; i++) {
    loadImage(imageSrcs[i]);
}