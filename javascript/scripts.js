let energia = 100;
let sueno = 0;

function actualizarValores() {
  document.getElementById("energia").textContent = energia + "%";
  document.getElementById("sueño").textContent = sueno + "%";
}

function correr() {
  if (energia >= 25) {
    energia = Math.max(0, energia - 25); // Evitar valores negativos
    sueno = Math.min(100, sueno + 25); // Evitar que el sueño supere 100%
    actualizarValores();
  } else {
    alert("¡No tienes suficiente energía para correr!");
  }
}

function dormir() {
  if (sueno >= 25) {
    sueno = Math.max(0, sueno - 25); // Evitar valores negativos
    energia = Math.min(100, energia + 25); // Evitar que la energía supere 100%
    actualizarValores();
  } else {
    alert("¡No estás lo suficientemente cansado para dormir!");
  }
}

actualizarValores();
