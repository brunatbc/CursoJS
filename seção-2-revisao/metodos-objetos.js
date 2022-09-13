const produto = {
    nome="caneta",
    qtd = 10,
    comprar: function(n){
        console.log(this)
        if(n > this.qtd){
            return "quantidade insuficiente"
        }
        this.qtd -= n
    }   
} 

produto.comprar(3)
console.log(produto)