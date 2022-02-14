import readLine from 'readline-sync'

import utils from './utils/utils';


const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
/* function getValueByInput() {
   const value = readLine.questionFloat('Digite o valor a ser convertido: \n');

   const unitToConvert = readLine.keyInSelect(units, "Escolha um número para a unidade base:", { cancel: "SAIR" });

   if (unitToConvert === -1) return console.log("Saindo!");

   const unitBase = readLine.keyInSelect(units, "Escolha um número para a conversão:", { cancel: "SAIR" });

    
    if (unitBase === -1) return console.log("Saindo!");
} */

function makeError (unity: string) {
    throw new Error(`A unidade ${unity} nao é uma unidade valida`);
}


export function convert(value: number, unitBase: string, unitToConvert: string): number {
   return utils.convert(units, value, unitBase, unitToConvert);
}

