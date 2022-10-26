const arr = [ 1,5,10,"ola", true]

let onlyNumbers = arr.every(function(el){
    return typeof el === "number" 
})

console.log(onlyNumbers)