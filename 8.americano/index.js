const array = [0, 0, 0];
function solucao(numeros) {

    let total = numeros.reduce((acumulador, elementoAtual) => {
        return acumulador + elementoAtual;
    });

    if (total % numeros.length === 0) {
        console.log(numeros.length);
    } else {
        console.log(total % numeros.length);
    }
}

solucao(array);