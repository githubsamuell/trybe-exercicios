const readLine = require ('readline-sync');

function calculaIMC () {
    const peso = readLine.questionFloat(`Qual seu peso?`);
    const altura = readLine.questionInt(`Qual sua altura?`);

    console.log(`Peso ${peso}, Altura ${altura}`);

    const imc = (peso / Math.pow (altura / 100, 2)).toFixed(2);

    console.log(`IMC ${imc}`);
}

calculaIMC();