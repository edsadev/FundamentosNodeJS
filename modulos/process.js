// const p = require('process')

process.on('beforeExit', () => {
  console.log('El proceso va a terminar')
})

process.on('exit', () => {
  console.log('Ok, el proceso acabó')
  setTimeout(() => {
    console.log('Esto no se va a ver nunca por que aquí ya se desconecto del event loop')
  }, 0)
})

setTimeout(() => {
  console.log('Esto si se va a ver nunca')
}, 0)

// Para exepciones que no sean capturadas
process.on('uncaughtException', (err, origin) => {
  console.error('Vaya, no se ha capturado un error: ' + err.message)
})

// functionqueno()

console.log('Esto si el error no se recoje no sale')

// Para promesas que son rechazadas y no capturadas
process.on('uncaughtRejection', () => {})

// Para ver todas las señales pon process.on(') y te apareceran las opciones que podrías usar