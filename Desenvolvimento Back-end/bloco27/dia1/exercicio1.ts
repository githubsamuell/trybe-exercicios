class Student {
   private _matricula: string;
   private _nome: string;
   private _notas: number[];
   private _trabalho: string[];

    constructor (matricula: string, nome: string, notas: number[], trabalho: string[]) {
        this._matricula = matricula;
        this._nome = nome;
        this._notas = notas;
        this._trabalho = trabalho;
    }

    get matricula(): string {
        return this._matricula;
    }
    set matricula(parameter: string) {
        this._matricula = parameter
    }

    get name(): string {
        return this._nome;
    }
    set name(parameter: string) {
        if(parameter.length < 3) throw Error('o nome deve conter no minimo 3 caracteres');
        this._nome = parameter
    }

    get notas(): number[] {
        return this._notas
    }
    set notas(parameter: number[]) {
        if(parameter.length > 4) throw Error('Um aluno so poder ter no maximo 4 notas')
    }

    get trabalho(): string[] {
        return this._trabalho;
    }
    set trabalho(parameter: string[]) {
        if(parameter.length > 2) throw Error('a pessoa estudante pode ter no maximo 2 notas de trabalho')
    }
}

const StudentNumberOne = new Student("Trybe", "Samuel", [100, 90, 100], ['Backend', 'Frontend']);

console.log(StudentNumberOne);

StudentNumberOne.name = 'Guilherme'

console.log(Student);

