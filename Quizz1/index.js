const leerNumeros = require('./leerNumeros');
const obtenerNumeroMayor = require('./obtenerNumeroMayor');
const obtenerNumeroMenor = require('./obtenerNumeroMenor');
const obtenerSumatoria = require('./obtenerSumatoria');
const ordenarLista = require('./ordenarLista');

async function main() {
  const numeros = await leerNumeros();
  console.log(`El número mayor es: ${obtenerNumeroMayor(numeros)}`);
  console.log(`El número menor es: ${obtenerNumeroMenor(numeros)}`);
  console.log(`La sumatoria de los números es: ${obtenerSumatoria(numeros)}`);
  console.log(`La lista ordenada de menor a mayor es: ${ordenarLista(numeros)}`);
}

main();

