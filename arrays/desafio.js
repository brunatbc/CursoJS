function sum(){// retorna a soma dos elementos passados
    /*let arr = [...arguments]
    let total = 0
    for (n of arr){
        total += n
    }
    return total
}*/
    //resolução usando o reduce  
    const numbers = [...arguments]
    return numbers.reduce(function(sum, atual){
        return sum + atual
    }, 0)
    
}
    
function average(){ // média dos elementos passados {soma / length}
    return sum(...arguments) / arguments.length
}

let soma = sum(1, 2, 3, 4, 5, 6)
console.log(soma)

let media = average(1,2,3,4,5,6)
console.log(media)

