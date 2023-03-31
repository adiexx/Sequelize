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

        default:
         console.log('');
         console.log('Opção inválida!');
         return '';

    

    }
}
module.exports = submenubusca;