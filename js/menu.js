var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
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

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleMenu)
    }
)


/*
let menuHamburguesa = document.getElementById('imagen_hamburguesa');

menuHamburguesa.addEventListener('click', () => {
    myFunction();
})

function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} */