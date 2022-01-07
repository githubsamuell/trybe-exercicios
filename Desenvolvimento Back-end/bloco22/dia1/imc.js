function calculaIMC () {
    const peso = 90;
    const altura = 160;

    console.log(`Peso ${peso}, Altura ${altura}`);

    const imc = (peso / Math.pow (altura / 100, 2)).toFixed(2);

    console.log(`IMC ${imc}`);
}

calculaIMC();