//importar , exportar

//que pasa si queremos una interface que esta en otro archivo
//pero le colocamos la palabra export a lo que queremos importar

import { Producto, calcularTotal_IGV } from './04-desestructuracion_argumentos';

const telefonos : Producto[] = [

    {
        desc : 'Telefono 1',
        precio : 2500
    },

    {
        desc : 'Telefono 1',
        precio : 3500
    }
]


//desestructuramos el array
const [total, igv] = calcularTotal_IGV(telefonos)

console.log('el total es: '  + total)
console.log('el igv es: '  + igv)