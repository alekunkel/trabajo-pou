// Clase del Pou
class Pou {
  constructor() {
    this.energia = 100;
    this.energiaMax = 100;
    this.sueno = 0;
    this.suenoMax = 100;
  }

  getEnergia() {
    return this.energia;
  }

  getSueno() {
    return this.sueno;
  }

  correr() {
    const energiaConsumida = this.energiaMax * 0.25;
    if (this.energia >= energiaConsumida) {
      this.energia -= energiaConsumida;
      this.sueno += 25;
      return "Estoy corriendo";
    } else {
      return "Estoy cansado jefe, no puedo correr";
    }
  }

  dormir() {
    if (this.sueno === 0) {
      return "¡Ya dormí mucho!";
    }
    const energiaRecuperada = this.energiaMax * 0.25;
    this.energia += energiaRecuperada;
    this.sueno -= 25;
    if (this.sueno < 0) {
      this.sueno = 0;
    }
    if (this.energia > this.energiaMax) {
      this.energia = this.energiaMax;
    }
    return "Estoy durmiendo";
  }
}

var pou = new Pou();

document.addEventListener("DOMContentLoaded", function () {
  refrescar();
});

function refrescar() {
  document.getElementById("energia").textContent = pou.getEnergia() + "%";
  document.getElementById("sueno").textContent = pou.getSueno();
  if (pou.getEnergia() >= 25) {
    document.getElementById("neymarTristeContainer").style.display = "none";
    document.getElementById("neymar-felis-container").style.display = "flex";
  } else {
    document.getElementById("neymarTristeContainer").style.display = "flex";
    document.getElementById("neymar-felis-container").style.display = "none";
  }
}

// Función para correr
function correr() {
  alert(pou.correr());
  refrescar();
}

// Función para dormir
function dormir() {
  alert(pou.dormir());
  refrescar();
}
// Función para obtener un número entero aleatorio entre min (inclusive) y max (exclusivo)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener("DOMContentLoaded", function () {
  const botonEnviar = document.getElementById("enviar");
  const botonReiniciar = document.getElementById("reiniciar");
  let numeroAleatorio = getRandomInt(0, 101); // Genera el número aleatorio al cargar la página 

  let pulsacionesBoton = 0;
  const limitePulsaciones = 3;

  botonEnviar.addEventListener("click", function () {
    var numeroIngresado = parseInt(document.getElementById("numero").value);

    if (pulsacionesBoton < limitePulsaciones) {
      pulsacionesBoton++;
      botonEnviar.textContent = `Enviar (Límite: ${limitePulsaciones - pulsacionesBoton})`;

      if (numeroIngresado === numeroAleatorio) {
        alert("¡Correcto! ¡Adivinaste el número!");
        botonEnviar.disabled = true; // Deshabilita el botón después de adivinar
        botonReiniciar.style.display = "block"; // Muestra el botón de reinicio
      } else {
        alert("Incorrecto, ¡inténtalo de nuevo! ");
        console.log(numeroAleatorio);
      }

      // Limpia el valor del campo de entrada
      const numero = document.getElementById("numero");
      numero.value = "";

      // Verifica si se alcanzó el límite de pulsaciones
      if (pulsacionesBoton >= limitePulsaciones) {
        botonEnviar.disabled = true;
        botonReiniciar.style.display = "block"; // Muestra el botón de reinicio
        alert(`¡No te quedan más intentos! El número correcto era ${numeroAleatorio}.`);
      }
    }
  });

  botonReiniciar.addEventListener("click", function () {
    // Reinicia el juego
    pulsacionesBoton = 0;
    botonEnviar.disabled = false;
    botonReiniciar.style.display = "none"; // Oculta el botón de reinicio
    botonEnviar.textContent = "Enviar";
    numeroAleatorio = getRandomInt(0, 101); // Genera un nuevo número aleatorio
  });
});
