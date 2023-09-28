function solucao(lista) {
    let resultado = lista.reduce((soma, numero) => {
        return soma + numero;
    });
    console.log(resultado);
}

solucao([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);