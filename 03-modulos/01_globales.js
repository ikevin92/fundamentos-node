// console.log(global);

let i = 0;

let intervalo = setInterval(() => {
  console.log('hola');
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);


setImmediate(
  function() {
    console.log('setImmediate');
  }
);

console.log(process);
console.log({__dirname});
console.log({__filename});



global.miVariable = 'variable global';
console.log(miVariable);