const lampImg = document.getElementById("lamp-image");
const imgPath = './assets/img/yellow_lamp.png'
const clickButton = document.getElementById("click");

function changeImage () {
    lampImg.src = imgPath;
    lampImg.alt = 'yellow_lamp';
}

clickButton.addEventListener('click', changeImage);