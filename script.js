/********** smooth page scroll **********/

document.querySelectorAll('.anchor').forEach(anchor => {

    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
    
});

/********** back to top button **********/

// get button
const button = document.getElementById('homeButton');

// display button when user scrolls down
window.onscroll = () => { 
    scrollFunction() 
};

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// scroll to top on button click 
const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}