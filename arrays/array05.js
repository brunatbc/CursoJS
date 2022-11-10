const nomes = ["a", "b", "c", "ca"]
let nomesPorOrdem = nomes.reduce(function(nomes,nomeAtual){

    let primeiraLetra = nomeAtual[0]
        if (nomes[primeiraLetra]){
            nomes[primeiraLetra]++
        } else {
            nomes[primeiraLetra] = 1
        }
        return nomes
},{})

console.log(nomesPorOrdem)

const numeros =[1, 3, 4, 1, 4, 5, 3, 5, 8, 9]

const numerosUnicos = numeros.reduce(function(numerosUnicos, numeroAtual){
    if (numerosUnicos.indexOf(numeroAtual)<0){
        numerosUnicos.push(numeroAtual)
    }
    return numerosUnicos
},[])

console.log(numerosUnicos)