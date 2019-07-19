function calcular() {
    let numero1 = document.getElementById('valor1').value;
    numero1 = validaCampo(numero1, 'mensagem1', 'Campo 1 deve ser número');
    
    let numero2 = document.getElementById('valor2').value;
    numero2 = validaCampo(numero2, 'mensagem2', 'Campo 2 só número');
    
    let resultado = numero1 + numero2;
    
    document.getElementById('resultado').value = resultado;
}

function ehNumero(numero) {
    return !isNaN(numero);
}

function validaCampo(valor, id, mensagem) {
    document.getElementById(id).innerHTML = '';
    if (ehNumero(valor)) {
        return parseInt(valor);
    } else {
        document.getElementById(id).style.color = 'red';
        document.getElementById(id).innerHTML = mensagem;
    }
    return 0;
}
