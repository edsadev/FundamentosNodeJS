const http = require('http')

http.createServer(router).listen(3000)

function router(request, response) {
  console.log('Nueva petición!')
  console.log(request.url)

  switch (request.url){
    case '/hola':
      let saludo = hola()
      response.write(saludo)
      response.end()
      break
    default:
      response.write('Error 404, no se lo que quieres')
      response.end()
  }

  // response.writeHead(201, {'Content-type': 'text/plain'})

  // // Escribir respuesta al usuario
  // response.write('Hola, ya se usar HTTP de NodeJs')

  // response.end()
}

function hola() {
  return 'Hola, que tal?'
}


console.log("Esuchando http en el puerto 3000")