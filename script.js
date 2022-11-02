import {listaColunas, Coluna, ToDo, adicionarColuna, addVarListaColunas, adicionarToDo, removerToDo} from "/classeToDo.js";

var tasksDatabase = [];
var id_colunas = [];

var element = document.getElementById("createColumn");
element.addEventListener("click", nameColumn);
var tasksDatabase = [];
var mainSection = document.getElementById("main");
var localStorageIndex = 0;
var i = 0;
var j = 0;
var k = 0;
var a = 0;
var b = 0;
var c = 0;

addVarListaColunas(listaColunas, colunasBD, TaskBD);

function mostrarV(){
  console.log(listaColunas);
}

function colunasBD(colunaTitle){  
  var div = document.createElement("div");
  var h2 = document.createElement("h2");
  h2.textContent = colunaTitle;
  div.setAttribute("id", "column-" + getIdColumn());
  div.setAttribute("class", 'styleColumn');
  appendNewColumn(div);
  var inputSubmit = createSubmitColumnField(div);
  appendNewColumnFields(div, h2, inputSubmit);
  return div.id;
}

function TaskBD(titulo, descricao, idColumn){
  var title = document.createElement('h3');
  title.textContent = titulo;
  var description = document.createElement('p');
  description.textContent = descricao;
  var div = document.createElement('div');
  div.setAttribute("onclick", "mudarTarefa(this.id);");
  var id_div = getIdTask();  
  div.setAttribute("id", id_div);
  div.style.cursor = "pointer";    

  description.setAttribute("id", getIdDescription());
  
  div.appendChild(title);
  div.appendChild(description);

  var coluna = document.querySelector(`#${idColumn}`);
  let botaocoluna = document.querySelector(`#${idColumn}`);
  // coluna.insertBefore(div, botaocoluna);
  cardTarefa(div, title, description);
  coluna.appendChild(div);
}







function getIdColumn() {
  id_colunas.push(`column-${i}`);
  return i++;
}

function getIdInput() {
  return j++;
}

function getInputIdCheckbox() {
  return k++;
}

function getIdTask() {
  return `tarefa-${a++}`;
}

function getIdDel() {
  return b++;
}

function getIdDescription() {
  return c++;
}

//exportar as funções para módulos
function nameColumn() { //criando coluna
  element.disabled = true;
  mainSection.classList.toggle('hide');

  var div = document.createElement('div');
  div.setAttribute("id", "divTemporaria");
  var input = document.createElement('input');
  input.setAttribute("Placeholder", "TÍTULO");
  input.setAttribute("id", "ColunaTemporaria");

  var titleColumn = document.createElement("p");
  titleColumn.textContent = "NOME DA COLUNA";

  var inputButton1 = document.createElement("input");
  inputButton1.setAttribute("type", "submit");
  inputButton1.setAttribute("value", "CANCELAR");
  inputButton1.setAttribute("id", "removeComlun");

  var inputButton2 = document.createElement("input");
  inputButton2.setAttribute("type", "submit");
  inputButton2.setAttribute("value", "ENVIAR");
  inputButton2.setAttribute("id", "addComlun");

  div.appendChild(titleColumn);
  div.appendChild(input);
  div.appendChild(inputButton1);
  div.appendChild(inputButton2);

  colunaTemporaria(div, input, inputButton1, inputButton2);

  document.body.appendChild(div);

  inputButton2.addEventListener("click", function() {
    if (input.value) {
      play();
      element.disabled = false;
    }
  });

  inputButton1.addEventListener("click", function() {
    document.querySelector("#divTemporaria").remove();
    mainSection.classList.toggle('hide');
    element.disabled = false;

  });
}

function colunaTemporaria(div, input, input2, input3) {
  div.setAttribute("class", "colTemporariaDiv");
  input.setAttribute("class", "colTemporariaInput");
  input2.setAttribute("class", "colTemporariaInput2");
  input3.setAttribute("class", "colTemporariaInput3");
}

function play() { //responsável por 
  var newColumn = createNewColumn(); //adiciona div de tarefas feitas, fazendo, cumpridas
  newColumn.setAttribute("class", 'styleColumn');
  appendNewColumn(newColumn); //adiciona div
  var titulo = createNewNome(); //dá nome à coluna
  document.querySelector("#divTemporaria").remove();
  setNomeStyle(titulo);
  var inputSubmit = createSubmitColumnField(newColumn);
  //setSubmitColumnFieldStyle(inputSubmit);
  appendNewColumnFields(newColumn, titulo, inputSubmit);
  mainSection.classList.toggle('hide');

  adicionarColuna(titulo);
}

function tarefaDesign(descricao, div) {
  descricao.setAttribute("class", "taskDesignDescricao");
  div.style.height = "16rem";

}

function createNewColumn() {
  var div = document.createElement("div");
  div.setAttribute("id", "column-" + getIdColumn());
  div.value = document.querySelector('#ColunaTemporaria').value;
  return div;
}


function appendNewColumn(div) {
  mainSection.appendChild(div);
}

function createNewNome() {
  var titulo = document.createElement("h2");
  titulo.textContent = document.querySelector('#ColunaTemporaria').value;
  titulo.setAttribute("id", "column-texts-name-" + getIdInput());
  return titulo;
}

function setNomeStyle(titulo) {
  titulo.style.fontsize = "32px";
}


function createSubmitColumnField(div) { //botao enviar
  var inputSubmit = document.createElement("input");
  inputSubmit.setAttribute("type", "submit");
  inputSubmit.setAttribute("value", "NOVA TAREFA");
  inputSubmit.id = div.id;
  inputSubmit.setAttribute("class", "inputNewTarefa")
  inputSubmit.addEventListener("click", () => { definicaoTarefa(inputSubmit) });
  return inputSubmit;
}


function appendNewColumnFields(div, titulo, inputSubmit) { //adicionando div
  div.appendChild(titulo);
  div.appendChild(inputSubmit);
}


function definicaoTarefa(botaoColuna) { //tela de criar as tarefas; aqui ainda não tem funçao para enviar as tarefas
  element.disabled = true;
  mainSection.classList.toggle('hide');

  var div = document.createElement('div');
  div.setAttribute("id", "divTemporariaTarefa");

  var titleColumn = document.createElement("p");
  titleColumn.textContent = "TAREFA";

  var input = document.createElement('input');
  //é aqui
  input.setAttribute("id", "tarefaTemporaria");
  input.setAttribute("Placeholder", "TÍTULO");

  var descricao = document.createElement('textarea');
  descricao.setAttribute("id", "descricao");
  descricao.setAttribute("Placeholder", "DESCRIÇÃO");
  descricao.style.resize = "none";

  var inputButton1 = document.createElement("input");
  inputButton1.setAttribute("type", "submit");
  inputButton1.setAttribute("value", "CANCELAR");
  inputButton1.setAttribute("id", "removeComlun");

  var inputButton2 = document.createElement("input");
  inputButton2.setAttribute("type", "submit");
  inputButton2.setAttribute("value", "ENVIAR");
  inputButton2.setAttribute("id", "addComlun");

  div.appendChild(titleColumn);
  div.appendChild(input);
  div.appendChild(descricao);
  div.appendChild(inputButton1);
  div.appendChild(inputButton2);

  colunaTemporaria(div, input, inputButton1, inputButton2);
  tarefaDesign(descricao, div);
  document.body.appendChild(div);

  inputButton2.addEventListener("click", function() {
    if (input.value && descricao.value) {
      insertTasks2(botaoColuna);
      element.disabled = false;
      document.querySelector("#divTemporariaTarefa").remove();
      mainSection.classList.toggle('hide');
    }
  });

  inputButton1.addEventListener("click", function() {
    document.querySelector("#divTemporariaTarefa").remove();
    mainSection.classList.toggle('hide');
    element.disabled = false;

  });

}

function mudarTarefa(id_div) {
  mudarTarefaSelect(id_div);
}

function mudarTarefaSelect(id_div) {

  element.disabled = true;
  mainSection.classList.toggle('hide');

  var div = document.createElement('div');
  div.setAttribute("id", "divTemporaria");
  var select = document.createElement('select');

  preencherSelect(select);

  select.setAttribute("id", "alterarTarefa");



  var titleColumn = document.createElement("p");
  titleColumn.textContent = "ALTERAR TAREFA";

  var inputButton1 = document.createElement("input");
  inputButton1.setAttribute("type", "submit");
  inputButton1.setAttribute("value", "CANCELAR");
  inputButton1.setAttribute("id", "removeComlun");

  var inputButton2 = document.createElement("input");
  inputButton2.setAttribute("type", "submit");
  inputButton2.setAttribute("value", "ENVIAR");
  inputButton2.setAttribute("id", "addComlun");

  div.appendChild(titleColumn);
  div.appendChild(select);
  div.appendChild(inputButton1);
  div.appendChild(inputButton2);

  colunaTemporaria(div, select, inputButton1, inputButton2);

  select.style.height = "3rem";

  document.body.appendChild(div);

  inputButton2.addEventListener("click", function() {
    valoresSelect(select.value, id_div);
    element.disabled = false;
    mainSection.classList.toggle('hide');
    document.querySelector("#divTemporaria").remove();
  });

  inputButton1.addEventListener("click", function() {
    document.querySelector("#divTemporaria").remove();
    mainSection.classList.toggle('hide');
    element.disabled = false;


  });
}

function valoresSelect(valorSelect, id_div) {
  if (valorSelect == "Excluir") {
    document.querySelector(`#${id_div}`).remove();
  } else if (valorSelect == "Concluída") {
    document.querySelector(`#${id_div}`).classList.remove("naoFeita");
    document.querySelector(`#${id_div}`).classList.add("feita");

  } 
}

function preencherSelect(select) {
  opcao1 = document.createElement("option");
  opcao1.textContent = "Excluir";
  opcao1.setAttribute("id", "excluir");

  opcao2 = document.createElement("option");
  opcao2.textContent = "Concluída";
  opcao2.setAttribute("id", "concluida");

  select.appendChild(opcao1);
  select.appendChild(opcao2);

  console.log(id_colunas[0]);

  for (var d = 0; d < id_colunas.length; d++) {
    console.log(id_colunas[d]);
    opcao = document.createElement("option");
    opcao.textContent = document.querySelector(`#${id_colunas[d]}`).value;
    opcao.setAttribute("id", `${id_colunas[d]}`);
    select.appendChild(opcao);

  }

}




function imprimirDiv(div) {
  console.log(div);
}

function insertTasks2(botaocoluna) { //reconstruindo coluna, agora com as tasks

  var titulo = document.createElement('h3');
  titulo.textContent = document.querySelector('#tarefaTemporaria').value;
  tasksDatabaseGetsTasks(titulo);
  var descricao = document.createElement('p');
  descricao.textContent = document.querySelector('#descricao').value;
  var div = document.createElement('div');
  div.setAttribute("onclick", "mudarTarefa(this.id);");  
  var id_div = getIdTask();
  imprimirDiv(div);
  div.setAttribute("id", id_div);
  div.style.cursor = "pointer";


  descricao.setAttribute("id", getIdDescription());

  div.appendChild(titulo);
  div.appendChild(descricao);

  var coluna = document.querySelector(`#${botaocoluna.id}`);
  coluna.appendChild(div);

  cardTarefa(div, titulo, descricao);
}


function cardTarefa(div, titulo, descricao) {
  div.setAttribute("class", "naoFeita");
  titulo.setAttribute("class", "tituloCard");
  descricao.setAttribute("class", "descricaoCard");

}

function tasksDatabaseGetsTasks(tasks) {
   localStorageIndex++;
  tasksDatabase.push(tasks.textContent);
  localStorage.setItem("Task-" + localStorageIndex + "°", tasks.textContent);
}
