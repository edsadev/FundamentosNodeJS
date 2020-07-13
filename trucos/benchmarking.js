console.time('ProcesoEntero')

let suma = 0
console.time('bucle')
for (let i = 0; i < 1000000000; i++) {
  suma += 1
}
console.log(suma)
console.timeEnd('bucle')

let suma2 = 0
console.time('bucle 2')
for (let j = 0; j < 1000000000; j++) {
  suma2 += 1
}
console.log(suma2)
console.timeEnd('bucle 2')

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Termina el proceso asíncrono')
      resolve()
    },1000)
  })
}

console.time('asincrono')
asincrona()
  .then(() => {
    console.timeEnd('asincrono')
  })

console.timeEnd('ProcesoEntero')