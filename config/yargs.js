const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Numero de iteraciones en la multiplicacion'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b) ){
                        throw 'La base tiene que ser un numero';
                    }
                    if( isNaN( argv.h) ){
                        throw 'El limite tiene que ser un numero';
                    }
                    if( ( Number(argv.h) > 50 ) ){
                        throw 'El limite es de 50 iteraciones';
                    }
                    return true;
                })
                .argv;

module.exports = argv;