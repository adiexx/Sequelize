const prompt = require('prompt-sync')();
const sequelize = require('./db')
const Aluno = require('./aluno');

async function Listarmedia() {
  const aluno = await Aluno.findAll();
  console.log('Lista da Média deTodos os Alunos:');
  aluno.forEach((Aluno) => {
    console.log(`${Aluno.CPF} ${Aluno.Nome}  ${Aluno.Nota1} ${Aluno.Nota2} ${Aluno.Media}`);
  });
}

async function InserirAluno() {
  const CPF = (parseInt(prompt('Digite o CPF do Aluno: ')));
  const Nome = prompt('Digite o Nome do Aluno: ');
  const Nota1 = (parseFloat(prompt('Digite a nota 1: ')));
  const Nota2 = (parseFloat(prompt('Digite o nota 2: ')));
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
    console.log('1 - Listar Alunos');
    console.log('2 - Inserir Alunos');
    console.log('0 - Sair');

    const opcao = parseInt(prompt('Opção selecionada: '));

    switch (opcao) {
      case 0:
        console.log('Encerrando programa...');
        process.exit(0);
      case 1:
        await Listarmedia();
        break;
      case 2:
        await InserirAluno();
        break;
      default:
        console.log('Opção inválida!');
        break;
    }
  }
}

main();