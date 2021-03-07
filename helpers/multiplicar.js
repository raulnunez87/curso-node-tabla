const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = true, hasta = 10 ) => {

    try {
    
        let salida, consola = '';
    
        for (let index = 1; index <= hasta; index++) {
            consola += `${base} ${ 'x'.green } ${index} ${ '='.green } ${index * base}\n`;
            salida += `${base} x ${index} = ${index * base}\n`;
        }

        if ( listar ) {
            console.log('================================='.green);
            console.log('       Tabla del:'.green, colors.blue(base));
            console.log('================================='.green);

            console.log(consola);
        }
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

        return `tabla-${ base }.txt`;

    } catch (error) {
        throw error;
    }

}

module.exports = { crearArchivo };