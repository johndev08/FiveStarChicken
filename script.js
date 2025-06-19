document.getElementById('menubtn').addEventListener('click', openmenu);
function openmenu() {
    let menubar = document.getElementById('menubar');
    menubar.style.width = (menubar.style.width === "0px") ? "220px" : "0px";
}

const navItems = document.querySelectorAll('header nav ul li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            let menubar = document.getElementById('menubar');
            menubar.style.width = "0px";
        }
        navItems.forEach(navItem => {
            navItem.parentElement.style.backgroundColor = '';
        });
        item.parentElement.style.backgroundColor = '#460000';
    });
});
navItems[0].parentElement.style.backgroundColor = '#460000';


document.getElementById('gallerybtn').addEventListener('click', opengallery);
function opengallery() {
    let gallerybox = document.getElementById('gallery');
    gallerybox.style.display = "grid";
}

document.getElementById('closegallerybtn').addEventListener('click', closegallery);
function closegallery() {
    let gallerybox = document.getElementById('gallery');
    gallerybox.style.display = "none";
}

let gallerybox = document.getElementById('gallery');
let maindiv = document.getElementById('main');

maindiv.style.overflowX = (gallerybox.style.display === "grid") ? "hidden" : "auto";

