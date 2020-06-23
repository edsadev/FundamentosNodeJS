// Como viene instalado en el core de node, no es necesario importarlo o especificar de donde viene
const fs = require('fs')
const { dir } = require('console')

function leer (ruta, cb) {
  fs.readFile(ruta, (error, data) => {
    cb(data.toString())
  })
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (error) => {
    if (error) {
      console.error('No he podido escribir: ' + error)
    } else {
      cb('Se ha escrito correctamente')
    }
  })
}

function borrar(ruta, cb) {
  fs.unlink(ruta, (error) => {
    if (error) {
      console.error('No he podido borrar el archivo: ' + error)
    } else {
      cb('Se ha borrado correctamente')
    }
  })
}

// leer(__dirname + '/archivo.txt', console.log)
// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)
// leer(__dirname + '/archivo1.txt', console.log)
// borrar(__dirname + '/archivo1.txt', console.log)
