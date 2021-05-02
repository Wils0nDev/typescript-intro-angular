const dbsz : string[] = ['Goku', 'Vegeta', 'Trons'];

//Al igual que desestructurams el objeto, es lo mismo con el arreglo 
//pero esta vez con corchetes

const [ gokus, vegetas, tronss ]  = dbsz

console.log('Personje 1 :' + gokus  )
console.log('Personje 2 :'  + vegetas)
console.log('Personje 3 :'  + tronss )

//que pasa si queremos solo uno de ellos , ejemplo vegeta 
const [ , v ,  ]  = dbsz

//solo creamos la constante en la pocision que es.