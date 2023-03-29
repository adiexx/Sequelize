const prompt = require('prompt-sync')();
const sequelize = require('./db')
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
  console.log(`Nota 1: ${Aluno.Nota1}`);
  console.log(`Nota 2: ${Aluno.Nota2}`);
  console.log(`Media Final: ${Aluno.Media}`);
  console.log(``);
  console.log(``);
  });
}

async function InserirAlunos() {
  const CPF = prompt('Digite o CPF do Aluno: ');
  const Nome = prompt('Digite o Nome do Aluno: ');
  const Nota1 = (parseFloat(prompt('Digite a Nota 1: ')));
  const Nota2 = (parseFloat(prompt('Digite a Nota 2: ')));
  const Media = ((Nota1 + Nota2) / 2);
  await Aluno.create({ CPF, Nome, Nota1, Nota2, Media });
  console.log('Aluno cadastrado com sucesso!');
}
/*
async function atualizarCelular() {
  const id = parseInt(prompt('Digite o ID do celular a ser atualizado: '));
  const celular = await Celular.findByPk(id);
  if (celular) {
    const marca = prompt(`Digite a nova marca do celular (${celular.marca}): `) || celular.marca;
    const modelo = prompt(`Digite o novo modelo do celular (${celular.modelo}): `) || celular.modelo;
    const preco = parseFloat(prompt(`Digite o novo preço do celular (${celular.preco}): `)) || celular.preco;
    await celular.update({ marca, modelo, preco });
    console.log('Celular atualizado com sucesso!');
  } else {
    console.log('Celular não encontrado!');
  }
}

async function apagarCelular() {
  const id = parseInt(prompt('Digite o ID do celular a ser apagado: '));
  const celular = await Celular.findByPk(id);
  if (celular) {
    await celular.destroy();
    console.log('Celular apagado com sucesso!');
  } else {
    console.log('Celular não encontrado!');
  }
}
*/
async function main() {
  while (true) {
    console.log('\nSelecione uma opção:');
    console.log('');
    console.log('1 - Inserir Alunos');
    console.log('2 - Listar Alunos');
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
        await InserirAlunos();
        break;
      case 2:
        await ListarAlunos();
        break;
      default:
        console.log('');
        console.log('Opção inválida!');
        console.log('');
        break;
    }
  }
}

main();