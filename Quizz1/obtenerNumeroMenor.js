function obtenerNumeroMenor(numeros) {
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] < menor) {
        menor = numeros[i];
      }
    }
    return menor;
  }
  module.exports = obtenerNumeroMenor;