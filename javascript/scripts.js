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
  document.getElementById("energia").textContent = pou.getEnergia();
  document.getElementById("sueno").textContent = pou.getSueno();
  if (pou.getEnergia() > 80) {
    document.getElementById("neymarTristeContainer").style.display = "none";
  } else {
    document.getElementById("neymarTristeContainer").style.display = "block";
  }
}

function correr() {
  alert(pou.correr());
  refrescar();
}

function dormir() {
  alert(pou.dormir());
  refrescar();
}
