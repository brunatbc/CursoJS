(function(){
    function calcMedia(){
        let total =0;
        let qtd = arguments.length;

        for(i=0; i<qtd; i++){
            if (typeof arguments[i] !== "number"){
                throw Error ("Apenas Números")
            }
            total += arguments[i];
        }
            return (total / qtd) || 0
}
    let media =calcMedia(9,7,8,3)
    console.log(media);
}
)()