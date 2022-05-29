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
  }, 1000);
}

function adios(nombre, otroCallBack) {
  setTimeout(() => {
    console.log('Adios, ' + nombre);
    otroCallBack();
  }, 1000);
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


console.log('Iniciando proceso...');
hola('Kevin', function() {
  conversacion('Kevin', 3, function() {
    console.log('Proceso terminado...');
  });
});

// hola('kevin', function(nombre) {
//   hablar(function() {
//     hablar(function() {
//       hablar(function() {
//         adios(nombre, function() {
//           console.log('Terminando proceso...');
//         });
//       });
//     });
//   });
// });

// hola('kevin', () => { })
// adios('kevin', () => { })