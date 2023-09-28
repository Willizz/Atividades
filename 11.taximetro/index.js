function solucao(min, km) {

    let precoDosMinutosAntesDoVinte = 1000;
    let precoMin = 50;
    let precoMinDpsDoVinte = 30;
    let valorFinalDosMinutos = 0;

    if (min > 20) {
        valorFinalDosMinutos = precoDosMinutosAntesDoVinte + (min - 20) * precoMinDpsDoVinte;
    } else if (min <= 20) {
        valorFinalDosMinutos = min * precoMin;
    }

    let precoDosKmAntesDoDez = 700;
    let precoKm = 70;
    let precoKmDpsDoDez = 50;
    let valorFinalDosKm = 0;

    if (km > 10) {
        valorFinalDosKm = precoDosKmAntesDoDez + (km - 10) * precoKmDpsDoDez;
    } else if (km <= 10) {
        valorFinalDosKm = km * precoKm;
    }

    let resultado = valorFinalDosMinutos + valorFinalDosKm;
    console.log(resultado);
}

solucao(25, 11.5);