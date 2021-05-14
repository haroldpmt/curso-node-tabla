const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.b);



// console.log(process.argv);
// const [ , , arg3='base-5'] = process.argv;
// const [ , base = 5] = arg3.split('=');


// const base = 6;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log('hubo un error', err));

