        function calcularIMC(peso,altura, cb){
            if (peso=== undefined || altura === undefined){
                throw Error ("São Necessários Dois Parâmetros");
            }
            let resIMC = peso / (altura *2)
            if (typeof cb === "function"){
                return cb (resIMC)
            }

            return resIMC
              
            }


                function classificarIMC(resIMC){
                    if (resIMC<=16.9){ // nesse caso não é recomendado usar o switch devido aos números quebrados
                        return "Seu IMC indica que você está muito abaixo do peso ideal"
                    } else if(resIMC<=18.4){
                        return "Seu IMC indica que você está abaixo do peso ideal"
                    } else if (resIMC <=24.9){
                        return "Seu IMC indica que você está no seu peso normal"
                    }else if (resIMC<=29.9){
                        return "Seu IMC indica que você tá acima do seu peso ideal"
                    }else if (resIMC<=34.9){
                        return "Seu IMC indica que você está com obesidade grau 1"
                    }else if (resIMC<=40){
                        return "Seu IMC indica que você está com obesidade grau 2"
                    }else 
                    return "Seu IMC indica que você está com obesidade grau 3"    
                     }
                
                let resIMC = calcularIMC(74,1.80);
                let resIMC2 = calcularIMC(74,1.80, classificarIMC);

                console.log(resIMC);
                console.log(resIMC2)

                

