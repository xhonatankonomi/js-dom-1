const lampImg = document.getElementById("lamp-image");
const imgPath = './assets/img/yellow_lamp.png'

function changeImage () {
    lampImg.src = imgPath;
    lampImg.alt = 'yellow_lamp';
}