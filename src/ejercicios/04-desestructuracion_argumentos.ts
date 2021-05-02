export interface Producto {
    desc : string
    precio : number
}

const telefono : Producto = {
    desc : "Huawey Y7p",
    precio : 800
}

const tablet : Producto = {
    desc : 'Ipad Air 250',
    precio : 1500 
}

export function calcularTotal_IGV(productos : Producto[]) : [number, number]  {

    let total = 0;

    //lo que necesitamos es solo el precio, por lo tanto solo le pasamos el precio
    //y Ts ya sabe que es el precio del producto.
    productos.forEach(({ precio }) => {
        total += precio
    });

    //retornamos un array para despues desestructurarlo 
    return [total, total*0.18 ]
}

const articulos = [telefono, tablet]

//desestructuramos el array
const [total, igv] = calcularTotal_IGV(articulos)

//console.log('el total es: '  + total)
//console.log('el igv es: '  + igv)