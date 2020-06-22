function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola, '+ nombre)
      resolve(nombre)
    }, 1500);
  })
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla... ')
      // resolve(nombre)
      reject('Hay un error dentro de la función hablar')
    }, 1000)
  })
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adiós, '+ nombre)
      resolve()
    }, 1000);  
  })
}

console.log('Iniciando el Proceso... ')
hola('Edmundo')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log('Terminado el Proceso')
  })
  .catch(error => {
    console.error('Ha habido un error: '+ error)
  })