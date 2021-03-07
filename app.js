// 5 x 1 = 5
// 5 x 2 = 10
// ... 
// 5 x 10 = 50

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

// option('l')
// listar
// boolean
// default: false

// node app -b 8 -l false

console.clear();

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.b);
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');

// const base = 1;

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err) );

