const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const _ = require('saudacao')
console.log(_.ola)

// const c = require('./pastaC/index') tambem da certo
const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
   res.write('Bom dia!')
   res.end()
}).listen(8080)