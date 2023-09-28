// function isLowerCase(text) {
//     return text === text.toLowerCase() && text !== text.toUpperCase();
// }
// function isUpperCase(text) {
//     return text === text.toUpperCase() && text !== text.toLowerCase();
// }

let string = 'eu GOSTO'

function processData(input) {

    if (input === input.toUpperCase()) {
        console.log(input.toLowerCase());
    }

    let [primeiraLetra, ...resto] = input.split('');
    resto = resto.join('');

    if (primeiraLetra === primeiraLetra.toLowerCase() && resto === resto.toUpperCase()) {
        console.log(primeiraLetra.toUpperCase() + resto.toLowerCase());
    }

    if (input === input.toLowerCase()) {
        console.log(input);
    }

}

processData(string);