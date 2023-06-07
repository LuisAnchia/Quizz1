function ordenarLista(numeros) {
    for (let i = 0; i < numeros.length; i++) {
      for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] > numeros[j]) {
          const temp = numeros[i];
          numeros[i] = numeros[j];
          numeros[j] = temp;
        }
      }
    }
    return numeros;
  }
  module.exports = ordenarLista;