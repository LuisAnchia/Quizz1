function obtenerNumeroMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayor) {
        mayor = numeros[i];
      }
    }
    return mayor;
  }
  module.exports = obtenerNumeroMayor;