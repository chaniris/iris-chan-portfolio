/********** page scroll **********/

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
    
});

