function otraFuncion() {
  return serompe()
  // serompe()
}

function serompe() {
  return 3 + z
}

function seRompeAsync(cb) {
  setTimeout(() => {
    try {
      return 3 + a
    } catch (err) {
      console.error('Error en mi función async')
      cb(err)
    }
  }, 1000)
}

try {
  seRompeAsync((err) => {
    console.log(`El error capturado es: "${err.message}"`)
  })
  // otraFuncion()
  // serompe()
} catch(err) {
  console.error('Vaya, algo se ha roto... ' + err)
  console.log('Pero no pasa nada, lo hemos capturado')
}

console.log('Esto de aquí esta al final')