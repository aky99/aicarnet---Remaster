var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade');
    });
    hamburger.classList.toggle("toggleBurger")
});

