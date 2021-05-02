
interface Reproductor {

    volumen : number
    segundo : number
    cancion : string
    detalles : Detalles
}

interface Detalles {
    autor : string
    anio : number
}

const reproductor : Reproductor = {

    volumen : 90,
    segundo : 36,
    cancion : 'Rock',
    detalles : {
        autor : "Amen",
        anio : 2021
    }
}


//Este seria una forma de poder obtener los datos de un objeto
console.log('El volumen actual es de : ' +reproductor.volumen )
console.log('El segundo actual es de : ' +reproductor.segundo )
console.log('La cancion actual es de : ' +reproductor.cancion)
console.log('El autor es de : ' + reproductor.detalles.autor)

//Desestructurando, creamos una constante objeto y le pasamos el reproductor

const { volumen, segundo, cancion, detalles : {autor}  } = reproductor 

//ahora ya podemos usar las constantaes creadas.
console.log('El volumen actual es de : ' + volumen )
console.log('El segundo actual es de : ' + segundo )
console.log('La cancion actual es de : ' + cancion)
console.log('El autor es de : ' +  autor)