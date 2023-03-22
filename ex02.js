/*class Pessoa {
    _nome;
    _idade;
    _peso;
    _altura;
    _imc;

    constructor(nome, idade, peso, altura ){
        this._nome = nome;
        this.idade = idade;
        this._peso = peso;
        this._altura = altura;
 
    }
    calculaImc(){
        return(this._peso / (this._altura * this._altura));
    }

}
let pessoa1 = new Pessoa("Edson", 40, 66, 1.55);
console.log(pessoa1.calculaImc());*/
class Discente{
    _nome;
    _matricula;
    _materias;

    constructor(nome,matricula,materias){
        this._nome= nome;
        this._matricula = matricula;
        this._materias = materias;
    }

    addmateria(disciplina){
        return (console.log(this._materias.push(disciplina)));
    }
}

let aluno1 = new Discente("barbara",1234,"calculo1","alc");
aluno1.addmateria("matematica");

