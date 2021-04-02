let menu = document.querySelector(".menu");
let hamburguesa = document.querySelector(".boton_hamburguesa");
let xIcon = document.querySelector(".xIcon");
let menuIcon = document.querySelector(".menuIcon");

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