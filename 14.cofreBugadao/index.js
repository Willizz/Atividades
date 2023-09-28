function processData(input) {
    let stringTratado = input.replace('\n', ' ');
    let arrayTratado = stringTratado.split(' ');

    let senhaCorreta = arrayTratado[0];
    let letrasDaSenhaCorreta = 0;
    for (let i = 0; i < arrayTratado[1].length; i++) {
        if (arrayTratado[1][i] === senhaCorreta[letrasDaSenhaCorreta]) {
            letrasDaSenhaCorreta++;
        }
    }
    if (letrasDaSenhaCorreta === arrayTratado[0].length) {
        console.log('SIM');
    } else {
        console.log('NAO');
    }

}

let senha = 'cubos\newvelrabsocaeln';
processData(senha)
