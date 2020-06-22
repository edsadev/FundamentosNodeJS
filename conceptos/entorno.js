// Las variables de entorno se ponen en MAYÚSCULAS, y si son dos palabras sería PALABRA_PALABRA <- Buena practicas
let nombre = process.env.NOMBRE || 'Sin nombre'
let web = process.env.WEB || 'No tengo web'

console.log('Hola '+ nombre)
console.log('Mi web es '+ web)

console.log('Otro proceso...')

/* Para poder darle un valor a las variables de entorno, debes hacer: 
  NOMBRE=Edmundo WEB=loquesea.com node conceptops/entorno.js
  Le das valor de esta manera a las variables de entorno 
*/