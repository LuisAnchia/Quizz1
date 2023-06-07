const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function leerNumeros() {
  return new Promise((resolve, reject) => {
    let numeros = [];
    let contador = 0;
    rl.question('Ingrese un número entero positivo: ', (numero) => {
      numeros.push(parseInt(numero));
      contador++;
      if (contador === 20) {
        resolve(numeros);
      } else {
        leerSiguienteNumero();
      }
    });
    function leerSiguienteNumero() {
      rl.question('Ingrese otro número entero positivo: ', (numero) => {
        numeros.push(parseInt(numero));
        contador++;
        if (contador === 20) {
          resolve(numeros);
        } else {
          leerSiguienteNumero();
        }
      });
    }
  });
}

module.exports = leerNumeros;