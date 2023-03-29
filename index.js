const prompt = require('prompt-sync')();
const sequelize = require('./db')
const aluno = require('./aluno');

async function Listarmedia() {
  const aluno = await aluno.findAll();
  console.log('Lista da Média deTodos os Alunos:');
  aluno.forEach((aluno) => {
    console.log(`${aluno.CPF} ${aluno.Nome}  ${aluno.Nota1} ${aluno.Nota2} ${aluno.Media}`);
  });
}

async function InserirAluno() {
  const CPF = (parseInt(prompt('Digite o CPF do Aluno: ')));
  const Nome = prompt('Digite o Nome do Aluno: ');
  const Nota1 = (parseFloar(prompt('Digite o preço do celular: ')));
  const Nota2 = (parseFloat(prompt('Digite o preço do celular: ')));
  const Media = ((Nota1 + Nota2) / 2);
  await aluno.create({ CPF, Nome, Nota1, Nota2, Media });
  console.log('Celular cadastrado com sucesso!');
}

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

async function main() {
  while (true) {
    console.log('\nSelecione uma opção:');
    console.log('1 - Listar celulares');
    console.log('2 - Inserir celular');
    console.log('3 - Atualizar celular');
    console.log('4 - Apagar celular');
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
        await inserirCelular();
        break;
      case 3:
        await atualizarCelular();
        break;
      case 4:
        await apagarCelular();
        break;
      default:
        console.log('Opção inválida!');
        break;
    }
  }
}

main();