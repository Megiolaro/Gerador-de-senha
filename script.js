let numeroCaracteres = document.querySelector("span")
let gerarSenha = document.querySelector("button")
let senha = document.querySelector(".senha")
let inputValue = document.querySelector("#slider")
let conatiner = document.querySelector(".hide")

let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*?0123456789"
let senhaNova = ""

numeroCaracteres.innerHTML = inputValue.value

slider.oninput = function(){
    numeroCaracteres.innerHTML = this.value
}

function geraSenha(){
    let novaSenha = ""
    for(i = 0, n = caracteres.length; i < inputValue.value; i++){
        novaSenha += caracteres.charAt(Math.floor(Math.random() * n))
    }
    conatiner.classList.remove("hide")
    senha.innerHTML = novaSenha
    senhaNova = novaSenha
}

function copiarSenha(){
    navigator.clipboard.writeText(senhaNova);
    alert("Senha copiada com sucesso!")
}