function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log('Hola, '+ nombre)
    miCallback(nombre)
  }, 1500);
}

function hablar(hablarCallback) {
  setTimeout(() => {
    console.log('Bla bla bla... ')
    hablarCallback()
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adiós, '+ nombre)
    otroCallback()
  }, 1000);
}

function conversacion(nombre, veces, callback){
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback)
    })
  } else {
    adios(nombre, callback)
  }
}

// ---------------------

console.log('Iniciando proceso... ')
hola('Edmundo', (nombre) => {
  conversacion(nombre, 3, () => {
    console.log('Proceso terminado...')
  })
})
// hola('Edmundo' , (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       hablar(() => {
//         adios(nombre, () => {
//           console.log('Terminando proceso... ')
//         })
//       })
//     })
//   })
// })