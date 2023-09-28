function solucao(lista) {
    let quantidadeMaior = 0
    let listaOrdemCrescente = lista.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < listaOrdemCrescente.length; i++) {
        if (lista[i] >= 18) {
            console.log(listaOrdemCrescente[i]);
            quantidadeMaior++
            break;
        }
    }
    if (quantidadeMaior === 0) {
        console.log('CRESCA E APARECA');
    }
}
let array = [19, 18]
solucao(array);