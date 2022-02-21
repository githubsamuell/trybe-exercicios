type twoNumbers = {
    a: number;
    b:  number;
}

function sum(pt: twoNumbers) {
    console.log(`Valor a é ${pt.a}`);
    console.log(`Valor b é ${pt.b}`);
}

sum({a: 5, b: 4});

function retornarRG(rg: number | string){
    console.log("Seu rg é: " + rg);
  }


  interface Carro {
      marca: string;
      valor: number;
      dispo: boolean;
  }

  let meuCarro: Carro = {
      marca: 'civic',
      valor: 140000,
      dispo: true,

  }

  interface Felino {
      patas: boolean;
      mamifero: boolean;
      name: string;
  }

  let lili: Felino = {
      patas: true,
      mamifero: true,
      name: 'lili',
  }

