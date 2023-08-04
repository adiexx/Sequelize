const prompt = require('prompt-sync')();
const Aluno = require('./aluno');

async function BuscaID() {
    const id = (parseInt(prompt('Digite o ID: ')));
    console.log('');
    console.log("Buscando...");
    console.log('');
   

    try{
      const ida = await Aluno.findByPk(id);
      if (ida === null) {
        console.log('');
        throw new Error ('Aluno Não encontrado!')
  
        } else{
          console.log(ida);
       
      }
    }
   catch(error){
    console.log(error.message)
   }
};

async function BuscaCPF() {
    const cpf = prompt('Digite o CPF: ');
    console.log('');
    console.log("Buscando...");
    console.log('');

    try{

    const cpffind = await Aluno.findAll({where: {CPF: cpf}});
    if (cpffind === null) {
      console.log('');
      throw new Error ('Aluno Não encontrado!');
      
      } else{
        console.log(cpffind);
     
    }
    }

    catch(error){
      console.log(error.message)
     }
    
};

async function BuscaNome() {
    const nm = prompt('Digite o Nome: ');
    console.log('');
    console.log("Buscando...");
    console.log('');
    const nmfind = await Aluno.findAll({where: {Nome: nm}});

    try{
      if (nmfind === null) {
        console.log('');
        throw new Error ('Aluno Não encontrado!');
      } else{
        console.log(nmfind);
     
    }

    }

    catch(error){
      console.log(error.message)
     }

     
    
};

async function BuscaIdade() {
  const age = prompt('Digite o Nome: ');
  console.log('');
  console.log("Buscando...");
  console.log('');
  const agefind = await Aluno.findAll({where: {Idade: age}});

  try{
    if (agefind === null) {
      console.log('');
      throw new Error ('Aluno Não encontrado!');
    } else{
      console.log(agefind);
   
  }

  }

  catch(error){
    console.log(error.message)
   }

   
  
};


  

async function submenubusca(opcao1) {

    switch (opcao1) {
        case 0:
          console.clear();
          console.log('');
          console.log('Voltado...');  
        return '';

        case 1:
         console.clear();
         console.log('');
         await BuscaID();
         return '';

        case 2:
         console.clear(); 
         console.log('');
         await BuscaCPF();
         return '';

        case 3:
         console.clear();
         console.log('');
         await BuscaNome();
         return '';
        
        case 4:
        console.clear();
        console.log('');
        await BuscaIdade();
        return '';

        default:
         console.clear();
         console.log('');
         console.log('Opção inválida!');
         return '';

    

    }
}
module.exports = submenubusca;