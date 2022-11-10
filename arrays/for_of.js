const arr = [1,2,3]

for (n of arr){
    console.log(n)
}

//~~~~~~~**~~~~~~~**~~~~~~~**~~~~~~~**~~~~~~~**~~~~~~~**~~~~~~~**v~~~~~~~**~~~~~~~**~~~~~~~**~~~~~~~**~~~~~

// relembrando o for...in -> usado com objetos

const obj= {
    nome: "a",
    idade: "1",
    cor: "c"
}

for (let prop in obj){
    console.log(prop) // mostra cada propriedade: nome, idade, cor
    console.log(obj[prop]) // mostra o valor de cada propriedade: a, 1, c
}