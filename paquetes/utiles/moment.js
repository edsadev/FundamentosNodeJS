const moment = require('moment')

let inicio = moment().startOf('week')
let ahora = moment()

console.log(ahora.toString())
console.log(ahora.format('YYYY/MM/DD - HH:mm')) 
console.log(inicio.format('YYYY/MM/DD - HH:mm')) 
console.log(ahora.subtract(inicio).format('DD - HH:mm'))
// console.log(ahora.subtract(10, 'minute'))
// console.log(ahora.startOf('week'))



