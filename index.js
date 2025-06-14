class formaDeBolo {
  constructor(saborDaMassa, saborDoRecheio) {
    this.saborDaMassa = saborDaMassa; 
    this.saborDoRecheio = saborDoRecheio;
  }

  // Método para descrever o bolo
  escrever() {
    console.log(`Este bolo tem massa de ${this.saborDaMassa} e recheio de ${this.saborDoRecheio}.`);
  }
  assar(){
    console.log(`Bolo de ${this.saborDaMassa} assando`)
  }
}
let boloFesta = new formaDeBolo("Chocolate", "Nutella");
boloFesta.escrever();
boloFesta.assar();
