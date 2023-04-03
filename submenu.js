const prompt = require('prompt-sync')();
const Aluno = require('./aluno');

async function BuscaID() {
    const id = (parseInt(prompt('Digite o ID: ')));
    console.log('');
    console.log("Buscando...");
    const ida = await Aluno.findByPk(id);
    if (id == null) {
        console.log('Aluno Não encontrado!');
      } else{
        console.log(ida);
     
    }
};

async function BuscaCPF() {
    const cpf = prompt('Digite o CPF: ');
    console.log('');
    console.log("Buscando...");
    const cpffind = await Aluno.findAll({where: {CPF: cpf}});
    if (cpf == null) {
        console.log('Aluno Não encontrado!');
      } else{
        console.log(cpffind);
     
    }
};

async function BuscaNome() {
    const nm = prompt('Digite o Nome: ');
    console.log('');
    console.log("Buscando...");
    const nmfind = await Aluno.findAll({where: {Nome: nm}});
    if (nm == null) {
        console.log('Aluno Não encontrado!');
      } else{
        console.log(nmfind);
     
    }
};
  

async function submenubusca(opcao1) {

    switch (opcao1) {
        case 0:
          console.log('');
          console.log('Voltado...');  
        return '';

        case 1:
         console.log('');
         await BuscaID();
         return '';

        case 2:
         console.log('');
         await BuscaCPF();
         return '';

        case 3:
         console.log('');
         await BuscaNome();
         return '';

        default:
         console.log('');
         console.log('Opção inválida!');
         return '';

    

    }
}
module.exports = submenubusca;