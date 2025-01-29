function resultado() {
    let divResultado = document.getElementById("resultado")
    divResultado.style.display = "block";

    let ano = Number(document.getElementById("anoNas").value)
    let atual = new Date().getFullYear()
    let idade = atual - ano
    let sexo = document.querySelector('input[name="genero"]:checked').value
    let img = document.getElementById("imagem")

    if (sexo == 'feminino') {

        if (idade <= 2) {
            msg.innerHTML = `Detectamos um bebe com <strong> ${idade}</strong> anos, sexo ${sexo}.`
            img.src = 'feminino/bebe.jpg'
            img.alt = 'Imagem mulher bebe'
            document.body.style.background = '#f198c4'

        } else if (idade <= 12) {
            msg.innerHTML = `Detectamos uma criança com <strong> ${idade}</strong> anos, sexo ${sexo}.`
            img.src = 'feminino/criança.jpg'
            img.alt = 'Imagem mulher criança'
            document.body.style.background = '#ac927c'

        } else if (idade <= 17) {
            msg.innerHTML = `Detectamos uma adolecente com <strong> ${idade}</strong> anos, sexo ${sexo}.`
            img.src = 'feminino/adolecente.jpg'
            img.alt = 'Imagem mulher adolecente'
            document.body.style.background = '#e89082'

        } else if (idade <= 29) {
            msg.innerHTML = `Detectamos uma mulher adulta jovem <strong> ${idade}</strong> anos.`
            img.src = 'feminino/adultajovem.jpg'
            img.alt = 'Imagem mulher adulta jovem'
            document.body.style.background = '#9b664f'

        } else if (idade <= 59) {
            msg.innerHTML = `Detectamos uma mulher adulta <strong> ${idade}</strong> anos.`
            img.src = 'feminino/adultamadura.jpg'
            img.alt = 'Imagem mulher bebe'
            document.body.style.background = '#c89b68'

        } else {
            msg.innerHTML = `Detectamos uma mulher idosa <strong> ${idade}</strong> anos.`
            img.src = 'feminino/idosa.jpg'
            img.alt = 'Imagem mulher idosa'
            document.body.style.background = '#d06a53'

        }

    } else {//masculino
        if (idade <= 2) {
            msg.innerHTML = `Detectamos um bebe com <strong> ${idade}</strong> anos, sexo ${sexo}.`
            img.src = 'masculino/bebe.jpg'
            img.alt = 'Imagem homem bebe'
            document.body.style.background = '#f13d2c'

        } else if (idade <= 12) {
            msg.innerHTML = `Detectamos uma criança com <strong> ${idade}</strong> anos, sexo ${sexo}.`
            img.src = 'masculino/menino.jpg'
            img.alt = 'Imagem homem criança'
            document.body.style.background = '#05499e'

        } else if (idade <= 17) {
            msg.innerHTML = `Detectamos uma adolecente com <strong> ${idade}</strong> anos, sexo ${sexo}.`
            img.src = 'masculino/adolescente.jpg'
            img.alt = 'Imagem homem adolecente'
            document.body.style.background = '#dd390c'

        } else if (idade <= 29) {
            msg.innerHTML = `Detectamos um homem adulto jovem <strong> ${idade}</strong> anos.`
            img.src = 'masculino/homemjovem.jpg'
            img.alt = 'Imagem homem adulto jovem'
            document.body.style.background = '#607da7'

        } else if (idade <= 59) {
            msg.innerHTML = `Detectamos um homem adulto <strong> ${idade}</strong> anos.`
            img.src = 'masculino/homem maduro.jpg'
            img.alt = 'Imagem homem maduro'
            document.body.style.background = '#33313c'

        } else {
            msg.innerHTML = `Detectamos um homem idoso <strong> ${idade}</strong> anos.`
            img.src = 'masculino/idoso.jpg'
            img.alt = 'Imagem homem idoso'
            document.body.style.background = '#c5b197'

        }
    }

}

function selecionarApenasUm(marcado, desmarcar) {
    let checkboxMarcado = document.getElementById(marcado)
    let checkboxDesmarcar = document.getElementById(desmarcar)

    if (checkboxMarcado.checked) {
        checkboxDesmarcar.checked = false
    }
}

function mostrarFaixa() {
    var section = document.getElementById("faixaEtaria")
    var botao = document.getElementById("botaoMostrar")
  
    if (section.style.display === "block") {
      section.style.display = "none"
      botao.value = "Mostrar faixa etária comuns"
    } else {
      section.style.display = "block"
      botao.value = "Ocultar faixa etária comuns"
    }
  }
