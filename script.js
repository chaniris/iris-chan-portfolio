/********** image carousel **********/

let imgs = document.querySelectorAll('.carouselImg');
let dots = document.querySelectorAll('.dot');
let imgPosition = 0;

document.querySelector('.next').addEventListener('click', nextImg);
document.querySelector('.prev').addEventListener('click', prevImg);

// update image position 
function updatePosition() {

    for (let img of imgs) {
        img.classList.remove('visible');
        img.classList.add('hidden');
    }
    imgs[imgPosition].classList.remove('hidden');
    imgs[imgPosition].classList.add('visible')

    for (let dot of dots) {
        dot.className = dot.className.replace('active', '');
    }
    dots[imgPosition].classList.add('active');

}

// previous image 
function prevImg() {
    if (imgPosition === 0) {
        imgPosition = imgs.length - 1;
    } else {
        imgPosition--;
    }
    updatePosition();
}

// next image 
function nextImg() {
    if (imgPosition === imgs.length - 1) {
        imgPosition = 0;
    } else {
        imgPosition++;
    }
    updatePosition();
}

// dot positioning 
dots.forEach((dot, dotPosition) => {
    dot.addEventListener('click', () => {
        imgPosition = dotPosition
        updatePosition(dotPosition)
    })
})


/********** back to top button **********/

// get button
const button = document.getElementById('homeButton');

// display button when user scrolls down
window.onscroll = () => { 
    scrollFunction() 
};

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

// scroll to top on button click 
const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}