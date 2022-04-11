let idDiv = 0
let idBt = 0
let cont = 0

function gerarCor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;

}

function gerarDiv(){
    let div = document.createElement('div')
    div.setAttribute('style', `background-color: ${gerarCor()}`)
    div.setAttribute('id', `${idDiv+1}`)
    div.setAttribute('onclick', 'contar(id)')
    div.setAttribute('cont', `0`)
    div.setAttribute('txt', receberInput().value)

    idDiv += 1
    
    document.body.appendChild(div)
    
    return div
}

function addSpanEButtonNaDiv() {
    let input = receberInput()
    
    if(input !== undefined){
        let newDiv = gerarDiv()

        let span = document.createElement('span')
        span.innerHTML = `Texto digtado: ${input.value}, Contador: 0`

        let bt = document.createElement('button')
        bt.innerHTML = 'Zerar Contador'
        bt.setAttribute('id', `${idBt + 1}`)
        bt.setAttribute('onclick', 'zerarCont(id);event.stopPropagation()')

        idBt += 1

        newDiv.appendChild(span)
        newDiv.appendChild(bt)  
    }
}

function criarContador(){
    addSpanEButtonNaDiv()
}

function contar(id){
    let contAux = document.getElementById(id).getAttribute('cont')
    let input = document.getElementById(id).getAttribute('txt')
    document.getElementById(id).firstChild.innerHTML = `Texto digtado: ${input}, Contador: ${parseInt(contAux) + 1}`
    document.getElementById(id).setAttribute('cont', `${parseInt(contAux) + 1}`)
}

function zerarCont(id){
    let div = document.getElementById(id)

    let input = document.getElementById(id).getAttribute('txt')

    div.setAttribute('cont', `0`)
    div.firstChild.innerHTML = `Texto digtado: ${input}, Contador: 0`
}

function receberInput(){
    if(document.getElementById('entrada').value !== ''){
        return this.document.getElementById('entrada')
    }else{
        alert('Insira algo!')
        document.location.reload(true)
    }
}