var setaDireita = window.document.getElementById("seta-direta")
var Leonardo = window.document.getElementById("leonardo")
var Samanta = window.document.getElementById("samanta")
var Bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita () {
     Leonardo.style = "display:none"
     Bruna.style = "display: flex"
     setaEsquerda.style = "display: flex; margin-top: 64px;"
     setaDireita.style = "display: none"
}

function RolarParaEsquerda () {
    Leonardo.style = "display:flex"
    Bruna.style = "display: none"
    setaEsquerda.style = "display: none"
    setaDireita.style = "display: flex"
}