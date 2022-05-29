function otraFuncion() {
  seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function() {
    try {
      return 3 + z;
    } catch (error) {
      console.error('error en mi funcion asincrona');
      cb(error);
    }
  }, 1000);
}

try {
  // otraFuncion();
  seRompeAsincrona(function() {
    console.log('hay error');
  });
} catch (error) {
  console.log('algo se ha roto:', error.message);
}