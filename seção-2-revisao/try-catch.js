function sum (n1,n2){
    if (typeof n1 !== "number" || typeof n2 !== "number"){
        throw Error ("Esse comando aceita apenas números")
    }
    return n1+n2
}

let soma = "";
try {
    soma = sum(5,"l")
} catch (e){
    console.log("Ocorreu um erro.")
    console.log(e.message)
}