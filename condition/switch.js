let nota = 9
switch(nota){
    case 10:
        return console.log('aprovados com excelencia maxima')
    case (nota >= 7):
        return console.log('aprovados')
    case (nota >= 4.5):
        return console.log(`sua nota foi ${nota}, por isso tá na boca da morte pae`)
    default:
        return console.log(`sua nota foi ${nota}, por isso se fudeu fdp incompentente nem dá pra repetir no 1° ano do fund 1. Cabaço.`)
}
