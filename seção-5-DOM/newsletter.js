    /*const txtEmail = document.getElementById("txtEmail");
    const msgFeedback = document.getElementById("newsletterFeedback")
    
    
    function cadastrarEmail(){
        let email = txtEmail.value; // Se essa declaração estiver fora da função, o valor de retorno será vazio, o trecho não retornará nada por ser renderizado antes do que deveria. 
        msgFeedback.innerHTML= `O email ${email} foi cadastrado com sucesso!`
    }*/


    const txtEmail = document.getElementById("txtEmail");


    function editarEmail(){
        txtEmail.disabled=false
        txtEmail.focus()
    }

    function disableEmail(){
        txtEmail.disabled=true
    }






