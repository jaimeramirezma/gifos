// CAPTURA DE EVENTOS DE LOS BOTONES 1, 2 Y 3
let botonComenzar = document.getElementsByClassName('cii__boton__comenzar');
let botonGrabar = document.getElementsByClassName('cii__boton__grabar');
let botonSubirGifo = document.getElementsByClassName('cii__boton__subir_gifo');
let botonFinalizar = document.getElementsByClassName('cii__boton__finalizar');
let botonSelector = document.getElementsByClassName('cim__botonera__boton');
let textoSelector2 = document.getElementById("cis_rectangulo_crear_gifos_h1");
let textoSelector3 = document.getElementById("cis_rectangulo_crear_gifos_h2");
//let textoSelector4 = document.getElementById("cii__boton__comenzar__h1");

botonSelector[1].addEventListener("click", modificarBotonYTextoRecuadro2);
botonComenzar[0].addEventListener("click", ocultarBotonComenzarYTextoRecuadro);
botonGrabar[0].addEventListener("click", modificarBotonGrabarYTextoRecuadro4);
botonFinalizar[0].addEventListener("click", modificarBotonGrabarYTextoRecuadro5);
botonSubirGifo[0].addEventListener("click", modificarBotonGrabarYTextoRecuadro6);

let textoACambiar;

function ocultarBotonComenzarYTextoRecuadro() {
    sessionStorage.setItem('cambio', 0);
}
//función que habilita dar clic al 2 para continuar
function modificarBotonYTextoRecuadro2() {
    sessionStorage.setItem('cambio', 2);
}

//
function modificarBotonGrabarYTextoRecuadro4() {
    sessionStorage.setItem('cambio', 4);
}
function modificarBotonGrabarYTextoRecuadro5() {
    sessionStorage.setItem('cambio', 5);
}
function modificarBotonGrabarYTextoRecuadro6() {
    sessionStorage.setItem('cambio', 6);
}

if (sessionStorage.getItem("cambio") == 0) {
    botonSelector[0].style.backgroundColor = "#572EE5";
    textoACambiar = document.getElementById("textoBoton1");
    textoACambiar.style.color = 'white';
    textoSelector2.innerHTML = "¿Nos das acceso <br> a tu cámara?";
    textoSelector3.innerHTML = "El acceso a tu camara será válido sólo <br> por el tiempo en el que estés creando el GIFO.";
    botonComenzar[0].style.display = 'none';
    botonGrabar[0].style.display = 'none';

} else if (sessionStorage.getItem("cambio") == 2) {
    botonSelector[1].style.backgroundColor = "#572EE5";
    textoACambiar = document.getElementById("textoBoton2");
    textoACambiar.style.color = 'white';
    textoSelector2.innerHTML = "";
    textoSelector3.innerHTML = "";
    botonComenzar[0].style.display = 'none';
    botonGrabar[0].style.display = 'block';

} else if (sessionStorage.getItem("cambio") == 4) {
    // Acá desactivamos el botón Grabar y activamos el botón finalizar
    botonSelector[1].style.backgroundColor = "#572EE5";
    textoACambiar = document.getElementById("textoBoton2");
    textoACambiar.style.color = 'white';
    textoSelector2.innerHTML = "";
    textoSelector3.innerHTML = "";
    botonGrabar[0].style.display = 'none';
    botonComenzar[0].style.display = 'none';
    botonFinalizar[0].style.display = 'block';

}
else if (sessionStorage.getItem("cambio") == 5) {
    // Acá desactivamos el botón Finalizar y activamos el botón Subir Gifo
    botonSelector[1].style.backgroundColor = "#572EE5";
    textoACambiar = document.getElementById("textoBoton2");
    textoACambiar.style.color = 'white';
    textoSelector2.innerHTML = "";
    textoSelector3.innerHTML = "";
    botonFinalizar[0].style.display = 'none';
    botonComenzar[0].style.display = 'none';
    botonSubirGifo[0].style.display = 'block';

}
else if (sessionStorage.getItem("cambio") == 6) {
    // Acá desactivamos el botón Grabar y activamos el botón finalizar
    botonSelector[2].style.backgroundColor = "#572EE5";
    textoACambiar = document.getElementById("textoBoton3");
    textoACambiar.style.color = 'white';
    textoSelector2.innerHTML = "";
    textoSelector3.innerHTML = "";
    botonFinalizar[0].style.display = 'none';
    botonComenzar[0].style.display = 'none';
    botonSubirGifo[0].style.display = 'none';
}

