const arr =[1,2,3]
const arr2= [4,5,6]


sum(1,2,3)// arguments.lenght = 3
sum(arr)// arguments.lenght = 1

sum(...[1,2,3])
sum(...arr)

function sum(){
    console.log(arguments)
    console.log(arguments.length)
}

arr.push(...arr2)
console.log(arr)

//~~~~~~~**~~~~~~~**~~~~~~~**~~~~~~~**~~~~~~~**~~~~~~~**~~~~~~~**~~~~~~~**~~~~~~~**~~~~~~~**~~~~~~~**

