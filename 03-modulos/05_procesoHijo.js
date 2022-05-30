const {exec, spawn} = require('child_process');

exec('ls -la', (err, stdout, sterr) => {
  if (err) {
    console.log(`exec error: ${ err }`);
    return false;
  }
  console.log(`stdout: ${ stdout }`);
});

exec('node 03-modulos/03_consola.js', (err, stdout, sterr) => {
  if (err) {
    console.log(`exec error: ${ err }`);
    return false;
  }
  console.log(`stdout: ${ stdout }`);
});

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (data) => {
  console.log(proceso.killed);
  console.log(`stdout proceso: ${ data.toString() }`);
});

proceso.on('exit', () => {
  console.log('el proceso termino');
  console.log(proceso.killed);
});