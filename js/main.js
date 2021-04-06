//Captura Evento clic en botón + de Crear Gifos y limpiar el STORAGE

let botonCrearGifos = document.getElementById("header__imagen__crear__gifo");
botonCrearGifos.addEventListener("click", sessionStorage.clear());

// Llegar el logo al home
let logo = document.getElementById("header__logo__gifos");
logo.addEventListener("click", function () { window.location = "index.html"; });
