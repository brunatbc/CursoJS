function somar (){
    console.log(arguments)
    let total = 0;

    for (let i =0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total
}

console.log(somar(1,2,3))
console.log(somar(1,2,3,7,90))
console.log(somar(1,2,3,13,55,67))
console.log(somar(1,2,3,800,50))

