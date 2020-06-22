// Las funciones son elementos de primer nivel, por ende puedo usarlos como yo quiere, como pasarlo como parámetros
function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log('Hola, '+ nombre)
    miCallback(nombre)
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adiós, '+ nombre)
    otroCallback()
  }, 1000);
}

console.log('Iniciando proceso... ')
hola('Edmundo' , (nombre) => {
  adios(nombre, () => {
    console.log('Terminando proceso... ')
  })
})

