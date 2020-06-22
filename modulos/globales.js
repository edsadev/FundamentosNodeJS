// Objeto gloabl, donde esta todo
// console.log(global)

// // Esto se usa bastante en node, como para pedidos a servidores, si no hay respuesta x veces, no vuelve a intentar
// let i = 0
// let intervalo = setInterval(() => {
//   console.log(i)
//   if (i === 3) {
//     clearInterval(intervalo)
//   }
//   i++
// }, 1000)

setImmediate(() => {
  console.log('hola')
}) 
