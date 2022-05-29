async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola, ' + nombre);
      resolve(nombre);
    }, 1500);
  });
}

async function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla.. bla.. bla..');
      resolve();
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios, ' + nombre);
      resolve();
    }, 1000);
  });

}

async function main() {
  let nombre = await hola('Kevin');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('termina');
}

console.log('inicia')
main();
