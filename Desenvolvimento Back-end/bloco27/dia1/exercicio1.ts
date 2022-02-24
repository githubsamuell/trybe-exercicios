class Student {
  private _matricula: string;

  private _nome: string = String();

  private _notas: number[];

  private _trabalho: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notas = [];
    this._trabalho = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(parameter: string) {
    this._matricula = parameter;
  }

  get name(): string {
    return this._nome;
  }

  set name(parameter: string) {
    if (parameter.length < 3) throw new Error('o nome deve conter no minimo 3 caracteres');
    this._nome = parameter;
  }

  get notas(): number[] {
    return this._notas;
  }

  set notas(parameter: number[]) {
    if (parameter.length > 4) throw new Error('Um aluno so poder ter no maximo 4 notas');
  }

  get trabalho(): number[] {
    return this._trabalho;
  }

  set trabalho(parameter: number[]) {
    if (parameter.length > 2) throw new Error('a pessoa estudante pode ter no maximo 2 notas de trabalho');
  }

  somaDasNotas(): number {
    return [...this._notas, ...this._trabalho]
      .reduce((acc, curr) => {
         curr += acc;
          return curr;
         }, 0);
  }

  mediaDasNotas(): number {
    const somaDasNotas = this.somaDasNotas();
    const divisao = this._trabalho.length + this._nome.length;
    return (somaDasNotas / divisao);
  }
}

const personOne = new Student('trybe', "Maria da Silva");

personOne.notas = [25, 20, 23, 23];
personOne.trabalho = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.somaDasNotas());
console.log('Média de todas as notas: ', personOne.mediaDasNotas());