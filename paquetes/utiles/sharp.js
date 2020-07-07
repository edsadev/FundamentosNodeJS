const sharp = require('sharp')

sharp('pug.jpg')
  .resize(80)
  .grayscale()
  .toFile('resized.png')