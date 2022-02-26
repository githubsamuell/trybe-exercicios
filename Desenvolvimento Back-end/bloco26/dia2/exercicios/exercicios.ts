import readline from 'readline-sync';
import { exit } from "process";
enum Months {
    JANEIRO = "Janeiro",
    FEVEREIRO = "Fevereiro",
    MARCO = "Março",
    ABRIL = "Abril",
    MAIO = "Maio",
    JUNHO = "Junho",
    JULHO = "Julho",
    AGOSTO = "Agosto",
    SETEMBRO = "Setembro",
    OUTUBRO = "Outubro",
    NOVEMBRO = "Novembro",
    DEZEMBRO = "Dezembro",
}

enum Seasons {
    OUTONO = "Outono",
    INVERNO = "Inverno",
    PRIMAVERA = "Primavera",
    VERAO = "Verão",
}



const monthsNames = Object.values(Months).
    map(item => item);

const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

if (choiceMonth === -1) {
    console.log("Saindo!");
    exit();
}

const seasonsSouth = {
    [Seasons.OUTONO]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
    [Seasons.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
    [Seasons.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
    [Seasons.VERAO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
}
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também

const seasonsNorth = {
    [Seasons.PRIMAVERA]: seasonsSouth[Seasons.OUTONO],
    [Seasons.VERAO]: seasonsSouth[Seasons.INVERNO],
    [Seasons.OUTONO]: seasonsSouth[Seasons.PRIMAVERA],
    [Seasons.INVERNO]: seasonsSouth[Seasons.VERAO],
}

const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

if (choiceHemisphere === -1) {
    console.log("Saindo!");
    exit();
}

const month = Object.values(Months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere]
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar

    if (months.includes(month)) console.log(seasons);
});


enum Directions {
    LEFT = "Esquerda",
    RIGHT = "Direita",
}


enum Doors {
    DRIVER = "Da pessoa motorista",
    RIDE = "Da pessoa carona",
    BEHIND_DRIVER = "De trás da pessoa motorista",
    BEHIND_RIDE = "De trás da pessoa carona"
}

class Car {

    _make: Color;
    _color: string;
    _doors: number = 4;

        constructor(_make: string, colors: string, doors: number) {

        }
        turnOn(): void {
            console.log("ligando carro");
            
        }
        turnOf(): void {
            console.log('Desligando carro');
            
        }
        turn(direction: Directions): void {
            console.log(`virando para a ${direction}`);
            
        }
        speedUp(): void {
            console.log('acelerando carro');
            
        }
        speedDown(): void {
            console.log('diminuido velocidade');
            
        }
        stop(): void {
            console.log('parando carro');
            
        }
        openTheDoor(door: Doors): void {
            this.validateDoors(door);
        }
        closeTheDoor(door: Doors): void {
            this.validateDoors(door);
            console.log(`Fechando a porta: ${door}.`);
        }
    }

    enum Colors {
        BLACK = "Preta",
        WHITE = "Branca",
        RED = "Vermelha",
        SILVER = "Prata"
    }


    const gol = new Car("Volksvagem", Colors.SILVER, 4);

gol.openTheDoor(Doors.DRIVER);
gol.closeTheDoor(Doors.DRIVER);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.BEHIND_RIDE);
gol.closeTheDoor(Doors.BEHIND_RIDE);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.BEHIND_RIDE);
gol.closeTheDoor(Doors.BEHIND_RIDE);
gol.speedUp();

type Slices = 4 | 6 | 8;

    interface Pizza {
        flavor: string;
        slices: Slices;
    }

    const calabresa: Pizza = {
        flavor: "calabresa",
        slices: 4,
    }

    const quatroQueijos: Pizza = {
        flavor: "quatroQueijos",
        slices: 8,
    }

    const portuguesa: Pizza = {
        flavor: "portugues",
        slices: 6,
    }