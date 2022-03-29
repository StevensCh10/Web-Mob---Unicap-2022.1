const inputTaxa = document.getElementById("Tx")
const inputDolar = document.getElementById("Dol")
const inputReal = document.getElementById("Real")

document.getElementById("dol").disabled = true
document.getElementById("real").disabled = true

function verificaTaxa(){
    inputTaxa.focus();

    if(isNaN(inputTaxa.value) || inputTaxa.value === ""){
        alert('Nesse campo é esperado um número válido!')
    }else{
        document.getElementById("btTaxa").disabled = true
        document.getElementById("dol").disabled = false
        document.getElementById("real").disabled = false
    }
}

function limpar(){
    document.getElementById("btTaxa").disabled = false
    document.getElementById("dol").disabled = true
    document.getElementById("real").disabled = true
}

function verificaDolar(){
    inputDolar.focus()
    
    if(isNaN(inputTaxa.value) || inputTaxa.value === ""){
        alert('Nesse campo é esperado um número válido!')
    }else{
        
    }
}

