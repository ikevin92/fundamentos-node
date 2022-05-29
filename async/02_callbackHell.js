function hola(nombre, miCallBack) {
  console.log("soy una funcion asincrona");
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    miCallBack(nombre);
  }, 1500);
}

function hablar(callBackHablar) {
  setTimeout(() => {
    console.log('bla.. bla.. bla..');
    callBackHablar();
  });
}

function adios(nombre, otroCallBack) {
  setTimeout(() => {
    console.log('Adios, ' + nombre);
    otroCallBack();
  }, 1000);
}

console.log('Iniciando proceso...');
hola('kevin', function(nombre) {
  hablar(function() {
    adios(nombre, () => {
      console.log('Terminando proceso...');
    });
  });
});

// hola('kevin', () => { })
// adios('kevin', () => { })