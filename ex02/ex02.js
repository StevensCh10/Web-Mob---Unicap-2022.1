const inputTaxa = document.getElementById("Tx")
const inputDolar = document.getElementById("Dol")
const inputReal = document.getElementById("Real")

document.getElementById("btDol").disabled = true
document.getElementById("btReal").disabled = true

function verificaTaxa(){
    inputTaxa.focus();

    if(isNaN(inputTaxa.value) || inputTaxa.value === ""){
        alert('Nesse campo é esperado um número válido!')
    }else{
        document.getElementById("btTaxa").disabled = true
        document.getElementById("btDol").disabled = false
        document.getElementById("btReal").disabled = false
    }
}

function limpar(){
    document.getElementById("btTaxa").disabled = false
    document.getElementById("btDol").disabled = true
    document.getElementById("btReal").disabled = true

    inputDolar.innerHTML = ""
    inputReal.innerHTML = ""
    inputReal.innerHTML = ""
    document.getElementById("resultDol").innerHTML = ""
    document.getElementById("resultReal").innerHTML = ""    

    inputTaxa.value = ""
    inputDolar.value = ""
    inputReal.value = ""
    document.getElementById("resultDol").value = ""
    document.getElementById("resultReal").value = "" 
}

function verificaDol(){
    inputDolar.focus()
    let result = inputDolar.value
    
    if(isNaN(inputDolar.value) || inputDolar.value === ""){
        alert('Nesse campo é esperado um número válido!')
    }else{
        result *= inputTaxa.value
        document.getElementById("resultDol").innerHTML = `Resultado: R$${result}`
    }
}

function verificaReal(){
    inputReal.focus()
    let result = inputReal.value
    
    if(isNaN(inputReal.value) || inputReal.value === ""){
        alert('Nesse campo é esperado um número válido!')
    }else{
        result /= inputTaxa.value
        document.getElementById("resultReal").innerHTML = `Resultado: $${result}`
    }
}