function calcular() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var operacao = document.getElementById('operacao').value;
    var resultado;

    switch (operacao) {
        case 'soma':
            resultado = valor1 + valor2;
            break;
        case 'subtracao':
            resultado = valor1 - valor2;
            break;
        case 'multiplicacao':
            resultado = valor1 * valor2;
            break;
        case 'divisao':
            resultado = valor1 / valor2;
            break;
        default:
            alert('Operação inválida');
            return;
    }

    alert('O resultado é: ' + resultado);
}