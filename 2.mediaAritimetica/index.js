function solucao(lista) {
    let soma = 0
    for (let i = 0; i < lista.length; i++) {
        soma = soma + lista[i];
    }
    let media = soma / lista.length;
    console.log(media);
}


let lista = [10, 20, 30, 50, 40, 20];


solucao(lista);