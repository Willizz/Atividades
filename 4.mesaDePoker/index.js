let numeros = [0, 5, 6, 10, 11];

function solucao(min, max, valores) {
    let newArray = [];
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= min && valores[i] <= max) {
            newArray.push(valores[i]);
        }
    }
    console.log(newArray);
}

solucao(2, 10, numeros);