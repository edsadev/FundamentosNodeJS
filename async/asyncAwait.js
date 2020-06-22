async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola, '+ nombre)
      resolve(nombre)
    }, 1500);
  })
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla... ')
      // resolve(nombre)
      resolve(nombre)
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

async function main(){
  let nombre = await hola('Edmundo')
  await hablar()
  // Si saco el await, no espera y simplemente arroja el resultado
  hablar()
  await hablar()
  await adios(nombre)
}

console.log('Empezamos el Proceso...')
main()
console.log('Termina el Proceso')