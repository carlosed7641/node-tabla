const argv = require('yargs')
    .options(
        {
            'b': {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            },

            'l': {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en consola'
            },

            'h': {
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: 'Estable el límite'
            }


        })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número'
        }

        if (isNaN(argv.h)) {
            throw 'El límite debe ser un número'
        }

        return true
    })
    .argv

module.exports = argv