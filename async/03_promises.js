function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola, ' + nombre);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla.. bla.. bla..');
      resolve(nombre);
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios, ' + nombre);
      resolve();
    }, 1000);
  });

}

function conversacion(nombre, veces, callback) {
  if (veces >= 0) {
    hablar(function() {
      conversacion(nombre, --veces, callback);
    });

  } else {
    callback(nombre, callback);
  }
}

console.log('Iniciando el proceso');
hola('kevin')
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log('Terminando el proceso');
  })
  .catch(err => {
    console.log(err);
  });