window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolling');
    } else {
        navbar.classList.remove('scrolling');
    }
});


/* Codigo para hacer scroll y la barra del nav decienda junto con la pagina*/