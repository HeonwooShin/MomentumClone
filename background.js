const body = document.querySelector('body');

const NUMBER_OF_IMAGES = 12;

function loadBackground(){
    const randomNum = Math.ceil(Math.random()*NUMBER_OF_IMAGES);
    const img = new Image();
    img.classList.add('background');
    img.src = `./backgrounds/${randomNum}.jpg`;
    body.appendChild(img);
}


function init(){
    loadBackground();
}

init();