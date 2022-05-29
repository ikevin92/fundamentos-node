const fs = require('fs');
const fileRead = `${ __dirname }/archivo.txt`;
const fileWrite = `${ __dirname }/archivo01.txt`;


function leer(path, callback) {
  fs.readFile(path, (err, data) => {
    console.log(data.toString());
  });
}


function escribir(path, data, callback) {
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.log('No he podido escribirlo', err);
    }
    else {
      console.log('Archivo escrito correctamente');
    }
  }
  );
}

function borrar(path, callback) {
  console.log(path);
  fs.unlink(path, callback);
}

// leer(fileRead, console.log('leer'));
// escribir(fileWrite, 'nueva linea', console.log('imprimir'));
borrar(fileWrite, console.log);