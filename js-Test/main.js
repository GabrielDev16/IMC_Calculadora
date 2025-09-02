
// capturando elementos do html
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let btn = document.getElementById("btn");
let resultado = document.getElementById("resultado");
let limparDados = document.getElementById("limparDados");
let msg = document.getElementById("msg");
let tabelaId = document.getElementById("tabelaId");


// calculo imc
btn.addEventListener("click", function (event) {
    event.preventDefault(); //impede o reload da página
    let p = parseFloat(peso.value);
    let a = parseFloat(altura.value);

    if(!peso.value || !altura.value){
        alert("Preencha todos os campos corretamente")
        return
    }

    let imc = p / (a * a);

    resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;


    if (imc <= 18.5) {
        tabelaId.innerHTML = "Você é Abaixo do Peso!";
        tabelaId.style.color = "#FFD700";
        tabelaId.style.fontWeight = "bold";
    }
    else if (imc > 18.5 && imc <= 24.9) {
        tabelaId.innerHTML = "Peso Normal.";
        tabelaId.style.color = "#32CD32";
        tabelaId.style.fontWeight = "bold";
    }
    else if (imc >= 25.0 && imc <= 29.9) {
        tabelaId.innerHTML = "Sobrepeso.";
        tabelaId.style.color = "#FFA500";
        tabelaId.style.fontWeight = "bold";
    }
    else if (imc >= 30.0 && imc <= 34.9) {
        tabelaId.innerHTML = "Obesidade de Grau I.";
        tabelaId.style.color = "#FF4500";
        tabelaId.style.fontWeight = "bold";
    }
    else if (imc >= 35.0 && imc <= 39.9) {
        tabelaId.innerHTML = "Obesidade de Grau II.";
        tabelaId.style.color = "#DC143C";
        tabelaId.style.fontWeight = "bold";
    }
    else {
        tabelaId.innerHTML = "Obesidade de Grau III.";
        tabelaId.style.color = "#8B0000";
        tabelaId.style.fontWeight = "bold";
    }
});

//limpar dados
limparDados.addEventListener("click", function () {
    resultado.innerHTML = "";
    tabelaId.innerHTML = "";
});

