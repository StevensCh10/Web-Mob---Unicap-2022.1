let cont = 0;

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
    div.setAttribute('background-color', gerarCor())
    div.setAttribute('margin', '10px')
    div.setAttribute('id', `${cont++}`)
    div.setAttribute('onclick', 'criarContador()')

    return div
}

function criarSpan() {
    let span = document.createElement('span')

    let div = gerarDiv()

    
}

function criarContador(){
    
}