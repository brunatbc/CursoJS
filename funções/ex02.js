        function calcularIMC(peso,altura){
            if (typeof peso !== "number" || typeof altura !== "number"){
                throw Error ("Por Favor Insira Apenas Números")
             } else if (peso=== 0 || altura===0){
                throw Error ("Para Calcular o IMC é Necessário que Nenhum dos Valores Seja 0")
             } else {
                return  peso / (altura ** 2)
              }
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
                
                let resIMC = calcularIMC(74,1.57);
                console.log(resIMC);
                console.log(classificarIMC(resIMC))


 