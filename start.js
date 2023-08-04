const prompt = require('prompt-sync')();
const Aluno = require('./aluno');

async function ListarAlunos() {
  const aluno = await Aluno.findAll();
  console.log('Lista de Alunos:');
  console.log(``);
  aluno.forEach((Aluno) => {
  console.log(`ID: ${Aluno.ID}`);
  console.log(``);
  console.log(`CPF: ${Aluno.CPF}`);
  console.log(`Nome: ${Aluno.Nome}`);
  console.log(`Idade: ${Aluno.Idade}`);
  console.log(`Nota 1: ${Aluno.Nota1}`);
  console.log(`Nota 2: ${Aluno.Nota2}`);
  console.log(`Media Final: ${Aluno.Media}`);
  console.log(``);
  console.log(``);
  });
}

async function InserirAlunos() {

  try {

    const validarCpf = require('validar-cpf');
    const CPF = prompt('Digite o CPF do Aluno: ');

    if (validarCpf(CPF) === false){
      console.clear();
      console.log('')
      throw new Error('CPF Inválido')
    }

    const Nome = prompt('Digite o Nome do Aluno: ');
    const Idade = (parseInt(prompt('Digite a Idade do Aluno: ')));
    const Nota1 = (parseFloat(prompt('Digite a Nota 1: ')));
  
    if (Nota1 < 0 || Nota1 > 10){
      console.clear();
      console.log('')
      throw new Error('Nota inválida!')
    }
    
    const Nota2 = (parseFloat(prompt('Digite a Nota 2: ')));
  
    if (Nota2 < 0 || Nota2 > 10){
      console.clear();
      console.log('')
      throw new Error('Nota inválida!')
    }
  
    const Media = ((Nota1 + Nota2) / 2);
    await Aluno.create({ CPF, Nome, Idade, Nota1, Nota2, Media });
    console.log('Aluno cadastrado com sucesso!');
  
    }
  
    catch(error){
     console.error(error.message)
    
  }
}


async function main() {
  while (true) {
    console.log('\nSelecione uma opção:');
    console.log('');
    console.log('1 - Inserir Alunos');
    console.log('2 - Listar Alunos');
    console.log('3 - Buscar Alunos');
    console.log('0 - Sair');
    console.log('');

    const opcao = parseInt(prompt('Opção selecionada: '));

    switch (opcao) {
      case 0:
        console.log('');
        console.log('Encerrando programa...');
        console.log('');
        process.exit(0);
      case 1:
        console.clear();
        await InserirAlunos();
        break;
      case 2:
        console.clear();
        await ListarAlunos();
        break;
      case 3:
        console.clear();
        const opcao1 = require('./submenu');
  
        console.log('\nSelecione uma opção:');
        console.log('');
        console.log('1 - Busca Por ID');
        console.log('2 - Busca Por CPF');
        console.log('3 - Busca Por Nome');
        console.log('4 - Busca Por Idade');
        console.log('0 - Voltar');
        console.log('');
        const op = parseInt(prompt('Opção selecionada: '));
        const a = await opcao1(op)
        console.log(a)
     
        break;
      default:
        console.clear();
        console.log('');
        console.log('Opção inválida!');
        console.log('');
        break;
    }
  }
}

main();