// =========================
// CONTADOR EXACTO
// =========================

const fechaInicio = new Date(2025, 8, 29, 0, 0, 0);
// OJO:
// Enero = 0
// Septiembre = 8

function actualizarContador() {

    const ahora = new Date();

    let años = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();

    let horas = ahora.getHours() - fechaInicio.getHours();
    let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
    let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

    // Segundos
    if (segundos < 0) {
        segundos += 60;
        minutos--;              
    }

    // Minutos
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }

    // Horas
    if (horas < 0) {
        horas += 24;
        dias--;
    }

    // Días
    if (dias < 0) {

        const ultimoMes = new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            0
        ).getDate();

        dias += ultimoMes;
        meses--;

    }

    // Meses
    if (meses < 0) {
        meses += 12;
        años--;
    }

    document.getElementById("tiempo").innerHTML = `
        ${años} años •
        ${meses} meses •
        ${dias} días •
        ${String(horas).padStart(2,"0")} horas •
        ${String(minutos).padStart(2,"0")} minutos •
        ${String(segundos).padStart(2,"0")} segundos
    `;

}

actualizarContador();

setInterval(actualizarContador,1000);

// =========================
// TRANSICIÓN CINEMATOGRÁFICA
// =========================

const botonHistoria = document.getElementById("btnHistoria");

botonHistoria.addEventListener("click", () => {

    // Evita que se pueda presionar dos veces
    botonHistoria.disabled = true;

    // Animación inmediata del botón
    botonHistoria.style.transition = "transform .12s ease";
    botonHistoria.style.transform = "scale(0.96)";

    // Tarjeta
    const tarjeta = document.querySelector(".tarjeta");
    tarjeta.style.transition = "opacity .6s ease";
    tarjeta.style.opacity = "0.65";

    const inicio = window.scrollY;
    const destino = document.getElementById("galeria").offsetTop;
    const distancia = destino - inicio;

    const duracion = 5500; // Cambia este número si quieres más lento o más rápido

    let inicioTiempo = null;

    // Comienza a moverse INMEDIATAMENTE
    window.scrollTo(0, inicio + 8);

    function animar(tiempoActual){

        if(!inicioTiempo){
            inicioTiempo = tiempoActual;
        }

        const tiempoTranscurrido = tiempoActual - inicioTiempo;

        let progreso = tiempoTranscurrido / duracion;

        if(progreso > 1){
            progreso = 1;
        }

        // Curva suave:
        // Empieza inmediatamente y termina muy despacio
        const suavizado = 1 - Math.pow(1 - progreso, 3);

        window.scrollTo(
            0,
            inicio + (distancia * suavizado)
        );

        if(progreso < 1){

            requestAnimationFrame(animar);

        }else{

            tarjeta.style.opacity = "1";
            botonHistoria.style.transform = "scale(1)";
            botonHistoria.disabled = false;

        }

    }

    requestAnimationFrame(animar);

});

// =========================
// FLORES, PÉTALOS Y UNICORNIOS
// =========================

const contenedorPetalos = document.getElementById("petalos");

function crearPetalo(){

    const elemento = document.createElement("div");

    elemento.classList.add("petalo");

    // Elementos que caerán
    const objetos = [
        "🌸",
        "🌹",
        "🌺",
        "🌷",
        "🦄"
    ];

    elemento.innerHTML =
        objetos[Math.floor(Math.random() * objetos.length)];

    // Posición horizontal aleatoria
    elemento.style.left = Math.random() * 100 + "%";

    // Tamaño aleatorio
    const tamaño = 18 + Math.random() * 30;
    elemento.style.fontSize = tamaño + "px";

    // Duración aleatoria
    const duracion = 8 + Math.random() * 8;
    elemento.style.animationDuration = duracion + "s";

    // Opacidad aleatoria
    elemento.style.opacity = 0.45 + Math.random() * 0.45;

    // Rotación inicial
    elemento.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    contenedorPetalos.appendChild(elemento);

    // Eliminar al terminar la animación
    setTimeout(() => {

        elemento.remove();

    }, duracion * 1000);

}

// Crear un nuevo elemento cada 220 ms
setInterval(crearPetalo, 220);

// =========================
// CORAZONES CAYENDO
// =========================

const contenedorCorazones = document.getElementById("corazones");

function crearCorazon(){

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    // Diferentes tipos de corazones
    const corazones = [
        "❤️",
        "🩷",
        "💖",
        "💕"
    ];

    corazon.innerHTML =
        corazones[Math.floor(Math.random()*corazones.length)];

    // Posición horizontal aleatoria
    corazon.style.left = Math.random()*100 + "%";

    // Tamaño
    const tamaño = 14 + Math.random()*20;
    corazon.style.fontSize = tamaño + "px";

    // Duración
    const duracion = 10 + Math.random()*8;
    corazon.style.animationDuration = duracion + "s";

    // Opacidad
    corazon.style.opacity = .35 + Math.random()*.45;

    // Rotación inicial
    corazon.style.transform =
        `rotate(${Math.random()*360}deg)`;

    contenedorCorazones.appendChild(corazon);

    setTimeout(()=>{

        corazon.remove();

    },duracion*1000);

}

setInterval(crearCorazon,1000);
//==========================
// APARICIÓN DE LAS FOTOS
//==========================

const fotos=document.querySelectorAll(".marcoFoto");

const observador=new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("visible");

        }

    });

},{
    threshold:.35
});

fotos.forEach((foto)=>{

    observador.observe(foto);

});

fotos.forEach((foto)=>{

    observador.observe(foto);

});
//==========================
// ESTRELLAS
//==========================

const estrellas = document.getElementById("estrellas");

for(let i=0;i<180;i++){

    const estrella=document.createElement("div");

    estrella.classList.add("estrella");

    estrella.style.left=Math.random()*100+"%";

    estrella.style.top=Math.random()*100+"%";

    estrella.style.animationDelay=Math.random()*3+"s";

    estrella.style.animationDuration=(2+Math.random()*4)+"s";

    estrellas.appendChild(estrella);

}