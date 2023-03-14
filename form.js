function validar(){
    nome = document.getElementById("nome");
    senha = document.getElementById("senha");

    if(nome.value = "admin"){
        if(senha.value ="admin"){
            alert("Tudo certo, até aqui");
        }else{
            alert("Senha incorreta");
        }
    }else{
        alert("Nome incorreto");
    }
}