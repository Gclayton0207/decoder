function escolhaCriptografia(){
    if (document.querySelector(".select").value != "Cesar") {
        document.querySelector(".rotacao").style.visibility = "hidden";
        document.querySelector(".rotacaop").style.visibility = "hidden";
    } else if (document.querySelector(".select").value == "Cesar"){
        document.querySelector(".rotacao").style.visibility = "visible";
        document.querySelector(".rotacaop").style.visibility = "visible";
        document.querySelector(".rotacao").style.width = "30px";
        document.querySelector(".rotacao").style.background = "rgba(0, 0, 0, 0.76)";
        document.querySelector(".rotacao").style.border = "1px solid #fff";
        document.querySelector(".rotacao").style.borderRadius = "10px";
        document.querySelector(".rotacao").style.margin = "0 10px 20px 0";
        document.querySelector(".rotacao").style.padding = "5px";
        document.querySelector(".rotacao").style.color = "white";
    }
}

function cripto() {
    if (document.querySelector(".select").value == "base64") {  
        base64();
    } else if(document.querySelector(".select").value == "Cesar"){
        cifraCesar();
    }
}

function botaoCriptografar() {
    var TextButton = document.querySelector ('.textButton')
    TextButton.textContent = 'Codificar';

}

function botaoDescriptografar() {
    var TextButton = document.querySelector ('.textButton')
    TextButton.textContent = 'Decodificar';
    
}

function recarregar() {
    return (location = "./index.html");
  }