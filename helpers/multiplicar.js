const fs = require('fs')
const colors = require('colors')

const crearArchivoTabla = async (base, listar = false, hasta) => {

    try {

        let salida, consola = ''

        for (let index = 1; index <= hasta; index++) {
            consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index} \n`
            salida +=`${base} x ${index} = ${base * index} \n`
        }

        if (listar) {
            console.log('=============================='.green)
            console.log('Tabla del'.yellow, colors.blue(base))
            console.log('=============================='.green)
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`

    } catch (err) {
        throw err
    }


}

module.exports = {
    crearArchivoTabla
}