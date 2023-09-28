let jogadores = [
    {
        "nome": "Herman",
        "jogada": 0
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 1
    }
]

function solucao(jogadores) {
    let vencedor = 0;
    let quantidadeDeZero = 0;
    let quantidadeDeUm = 0;
    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].jogada === 0) {
            quantidadeDeZero++;
        } else {
            quantidadeDeUm++;
        }
    }
    if (quantidadeDeUm > 1 && quantidadeDeZero === 1) {
        for (let i = 0; i < jogadores.length; i++) {
            if (jogadores[i].jogada === 0) {
                console.log(jogadores[i].nome);
                vencedor++;
                break;
            }
        }
    } else if (quantidadeDeZero > 1 && quantidadeDeUm === 1) {
        for (let i = 0; i < jogadores.length; i++) {
            if (jogadores[i].jogada === 1) {
                console.log(jogadores[i].nome);
                vencedor++;
                break;
            }
        }
    }
    if (vencedor === 0) {
        console.log('NINGUEM');
    }
}

solucao(jogadores);