let menu = document.querySelector(".nav__lista__menu");
let hamburguesa = document.querySelector(".header__nav__boton__hamburguesa");
let xIcon = document.querySelector(".nav__cierre__icon");
let menuIcon = document.querySelector(".nav__menu__icon");

hamburguesa.addEventListener("click", modificarMenu);

function modificarMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        xIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

let menuLinks = document.querySelectorAll(".menuLink");

if (screen.width < 1200) {
    menuLinks.forEach(function (menuLink) {
        menuLink.addEventListener("click", modificarMenu)
    })
}