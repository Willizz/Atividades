function solucao(texto) {
    let removerEspacosEmBranco = texto.trim();
    let textoEmArray = removerEspacosEmBranco.split(" ");
    let filtro = '';
    let local = textoEmArray.indexOf(filtro);
    while (local >= 0) {
        textoEmArray.splice(local, 1)
        local = textoEmArray.indexOf(filtro)
    }
    let tamanhoDoArray = 0;
    for (let i = 0; i < textoEmArray.length; i++) {
        tamanhoDoArray++
    }
    console.log(tamanhoDoArray);
}

let texto = 'Um    a   texto    qualquer';

solucao(texto);