var tabela_alunos = [];


function Adicionar(){
  
	var nome_aluno = document.getElementById('nome').value;
    var sobrenome_aluno = document.getElementById('sobrenome').value;
    var ra_aluno = document.getElementById('ra').value;
    var genero_aluno = document.getElementById('sexo').value;
    var idade_aluno = document.getElementById('idade').value;
    var data_nao_formatada = document.getElementById('data').value;
    data = new Date(data_nao_formatada);
    data_aluno = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    
    let disciplina_aluno = document.querySelectorAll('input[type="checkbox"]:checked');
    let disciplinas_array = [];

    for (let check_ok of disciplina_aluno) {
        disciplinas_array.push(check_ok.value);
    }

    if(nome_aluno !== '' && sobrenome_aluno !== '' && genero_aluno !== '' && idade_aluno !== '' && data_aluno !== '' && disciplina_aluno !== ''){

    var aluno = {
        ra: '',
        primeiro_nome: '',
        sobrenome: '',
        idade:'',
        genero:'',
        data:'',
        disciplinas:'',

    }; // objeto aluno
   
    // colocando valores dentro dos objetos através das variavéis que foram armazenadas os valores dos inputs
    aluno.primeiro_nome = nome_aluno;
    aluno.sobrenome = sobrenome_aluno;
    aluno.ra = ra_aluno;
    aluno.genero = genero_aluno;
    aluno.data = data_aluno;
    aluno.idade = idade_aluno;
    aluno.disciplinas = disciplinas_array;

    console.log(aluno);
    // inserindo os valores do objeto aluno para dentro do array tabela_alunos
    tabela_alunos.push(aluno); 

    console.log(tabela_alunos);

    alert('Matricula realizada com sucesso!');
    Listar();

    } else{
        //validando campos
       alert('Todos os campos devem estar preenchidos! Confirme e tente novamente')
    } // fechando else
}


      
function Listar() {
  // listar elementos do array em tabela
  var tabela = '<br><h4 class="text-center"> LISTA DE ALUNOS CADASTRADOS: </h4> <br> <table class="table table-striped "><thead>';
	tabela += '<tr>';
  tabela += '<th scope="col">RA</th>';
	tabela += ' <th scope="col">NOME </th>';
	tabela += ' <th scope="col">SOBRENOME</th>';
	tabela += '<th scope="col">IDADE</th>';
	tabela += '<th scope="col">SEXO</th>';
	tabela += '<th scope="col">DATA</th>';
  tabela += '<th scope="col">DISCIPLINA(S)</th></tr>';
	tabela += '</thead>';

  tabela_alunos.forEach(function(DadosAtuais, posicao){
    console.log('Objeto array dados listados:');
    console.log(DadosAtuais);

    tabela +=
    '<tbody><td>' +
    DadosAtuais.ra +
    ' </td> <td>' +
    DadosAtuais.primeiro_nome +
    ' </td> <td> ' +
    DadosAtuais.sobrenome +
    ' </td> <td> ' +
    DadosAtuais.idade +
    ' </td> <td> ' +
    DadosAtuais.genero +
    ' </td> <td> ' +
    DadosAtuais.data +
    ' </td> <td> ' +
    DadosAtuais.disciplinas +
    '</td></tbody>';

  });

  tabela += '</table>';

  document.getElementById('tabela_alunos').innerHTML = '<br>' + tabela;
}

function Remover() {
    tabela_alunos.pop();
    console.log('Último objeto foi removido!');
    Listar();
  }
  
  function Limpar() {
    // limpar o array tabela_alunos
    tabela_alunos = [];
    tabela = '';
    document.getElementById('tabela_alunos').innerHTML = tabela;
    document.getElementById('limpar').innerHTML = '';
    
    Listar();
  }