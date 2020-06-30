console.log('Algo')
// logeo del error
console.error('Algo')
// Un warning
console.warn('Algo')

var tabla = [
  {
    a: 1,
    b: 'Z'
  },
  {
    a: 2,
    b: 'Otra'
  }
]

console.log(tabla)
console.table(tabla)

console.group('Conversación: ')
console.log('Hola')
console.log('blablabla')
console.log('Adios')
console.groupEnd('Conversación: ')

function function1() {
  console.group('funcion 1')
  console.log('Esto es de la función 1')
  console.log('Esto tambien')
  function2()
  console.log('He vuelto a la función 1')
  console.groupEnd('funcion 1')
}

function function2() {
  console.group('funcion 2')
  console.log('Esto es de la funcion 2')
  console.log('Esto tambien es de la función 2')
  console.groupEnd('funcion 2')
}

function1() 

console.count('veces')
console.count('Hola')
console.count('veces')
console.countReset('Hola')
console.count('veces')
console.count('Hola')
