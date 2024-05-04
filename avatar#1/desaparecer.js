function mostrarContenido() {
    var boton = document.getElementById("myButton");
    var contenidoAnterior = document.getElementById("contenidoAnterior");

    if (boton.innerHTML === "COMENZAR UNA HISTORIA MUY TRISTE") {
        boton.style.display = "none"; 
        contenidoAnterior.style.display = "block"; 
    } else {
        boton.style.display = "block";
        contenidoAnterior.style.display = "none"; 
    }
}

function ocultarContenidoAnterior() {
    var contenidoAnterior = document.getElementById("contenidoAnterior");
    var nuevoContenido = document.getElementById("nuevoContenido");
    var miAudio = document.getElementById("miAudio");

    contenidoAnterior.style.display = "none"; 
    nuevoContenido.style.display = "block"; 
    miAudio.play(); 
}
function detenerAudio() {
    var miAudio = document.getElementById("miAudio");
    miAudio.pause(); 
}


function verContenido() {
    var nuevoContenido = document.getElementById("nuevoContenido");
    var nuevoContenido2 = document.getElementById("nuevoContenido2");

    nuevoContenido.style.display = "none"; 
    nuevoContenido2.style.display = "block"; 
}


function ojearContenido() {
    var nuevoContenido2 = document.getElementById("nuevoContenido2");
    var nuevoContenido3 = document.getElementById("nuevoContenido3");

    nuevoContenido2.style.display = "none"; 
    nuevoContenido3.style.display = "block"; 
}

var miAudio2 = document.getElementById("miAudio2");

function reproducirAudio2() {
    miAudio2.play();
}

function detenerAudio2() {
    miAudio2.pause();
    miAudio2.currentTime = 0; 
}


var miAudio3 = document.getElementById("miAudio3");

function reproducirAudio3() {
    miAudio3.play();
}

function detenerAudio3() {
    miAudio3.pause();
    miAudio3.currentTime = 0; 
}


function mostrarNuevoContenido() {
    var nuevoContenido3 = document.getElementById("nuevoContenido3");
    var nuevoContenido4 = document.getElementById("nuevoContenido4");

    nuevoContenido3.style.display = "none";
    nuevoContenido4.style.display = "block";
}


var miAudio4 = document.getElementById("miAudio4");

function reproducirAudio4() {
    miAudio4.play();
}

function detenerAudio4() {
    miAudio4.pause();
    miAudio4.currentTime = 0; 
}


function ojearNuevoContenido() {
    var nuevoContenido4 = document.getElementById("nuevoContenido4");
    var nuevoContenido5 = document.getElementById("nuevoContenido5");

    nuevoContenido4.style.display = "none";
    nuevoContenido5.style.display = "block";
}


var miAudio5 = document.getElementById("miAudio5");

function reproducirAudio5() {
    miAudio5.play();
    miAudio5.addEventListener('ended', function() {
        this.currentTime = 0; 
        this.play(); 
    }, false);
}

function detenerAudio5() {
    miAudio5.pause();
    miAudio5.currentTime = 0; 
}



function checarNuevoContenido() {
    var nuevoContenido5 = document.getElementById("nuevoContenido5");
    var nuevoContenido6 = document.getElementById("nuevoContenido6");

    nuevoContenido5.style.display = "none";
    nuevoContenido6.style.display = "block";
}


var miAudio6 = document.getElementById("miAudio6");

function reproducirAudio6() {
    miAudio6.play();
    miAudio6.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}

function detenerAudio6() {
    miAudio6.pause();
    miAudio6.currentTime = 0;
}


function observarNuevoContenido() {
    var nuevoContenido6 = document.getElementById("nuevoContenido6");
    var nuevoContenido7 = document.getElementById("nuevoContenido7");

    nuevoContenido6.style.display = "none";
    nuevoContenido7.style.display = "block";
}


var miAudio7 = document.getElementById("miAudio7");

function reproducirAudio7() {
    miAudio7.play();
    miAudio7.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}

function detenerAudio7() {
    miAudio7.pause();
    miAudio7.currentTime = 0;
}


function pasarNuevoContenido() {
    var nuevoContenido7 = document.getElementById("nuevoContenido7");
    var nuevoContenido8 = document.getElementById("nuevoContenido8");

    nuevoContenido7.style.display = "none";
    nuevoContenido8.style.display = "block";
}


var miAudio8 = document.getElementById("miAudio8");

function reproducirAudio8() {
    miAudio8.play();
    miAudio8.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}

function detenerAudio8() {
    miAudio8.pause();
    miAudio8.currentTime = 0;
}


function noNuevoContenido() {
    var nuevoContenido8 = document.getElementById("nuevoContenido8");
    var nuevoContenido9 = document.getElementById("nuevoContenido9");

    nuevoContenido8.style.display = "none";
    nuevoContenido9.style.display = "block";
}


var miAudio9 = document.getElementById("miAudio9");

function reproducirAudio9() {
    miAudio9.play();
    miAudio9.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}

function detenerAudio9() {
    miAudio9.pause();
    miAudio9.currentTime = 0;
}


function suNuevoContenido() {
    var nuevoContenido9 = document.getElementById("nuevoContenido9");
    var nuevoContenido10 = document.getElementById("nuevoContenido10");

    nuevoContenido9.style.display = "none";
    nuevoContenido10.style.display = "block";
}


var miAudio10 = document.getElementById("miAudio10");

function reproducirAudio10() {
    miAudio10.play();
    miAudio10.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}

function detenerAudio10() {
    miAudio10.pause();
    miAudio10.current
    Time = 0;
}


function soyNuevoContenido() {
    var nuevoContenido10 = document.getElementById("nuevoContenido10");
    var nuevoContenido11 = document.getElementById("nuevoContenido11");

    nuevoContenido10.style.display = "none";
    nuevoContenido11.style.display = "block";
}