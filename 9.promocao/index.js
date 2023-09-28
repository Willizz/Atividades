function solucao(precos) {
    let arrayEmOrdemCrescente = precos.sort((menor, maior) => {
        return menor - maior;
    });
    let soma = arrayEmOrdemCrescente.reduce((soma, numero) => {
        return soma + numero;
    });
    if (precos.length < 3) {
        console.log(soma);
    } else {
        let resultado = arrayEmOrdemCrescente[0] / 2;
        arrayEmOrdemCrescente.shift()
        console.log(resultado + arrayEmOrdemCrescente.reduce((soma, numero) => {
            return soma + numero;
        }));
    }
}
let precos = [1, 2, 3, 4];

solucao(precos);