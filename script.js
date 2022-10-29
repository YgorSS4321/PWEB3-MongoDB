import {listaColunas} from "/classeToDo.js";

var element = document.getElementById("createColumn");
element.addEventListener("click", nameColumn);
var mainSection = document.getElementById("main");
var localStorageIndex = 0;
var i = 0;
var j = 0;
var k = 0;
var a = 0;
var b = 0;
var c = 0;



var id_colunas = [];

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

function colunaTemporaria(div, input, input2, input3) { //estilização coluna

  div.style.display = "flex";
  div.style.flexWrap = "wrap";
  div.style.width = "28rem";
  div.style.height = "14rem";
  div.style.padding = "0.5rem"
  div.style.backgroundColor = "white";
  div.style.borderRadius = "10px";
  div.style.position = "fixed";
  div.style.left = "50%";
  div.style.top = "50%";
  div.style.marginTop = "-7rem";
  div.style.marginLeft = "-14rem";


  input.style.width = "100%";
  input.style.height = "1.5rem";
  input.style.margin = "5% 15%";
  input.style.display = "block";
  input.style.padding = "0.4rem";

  input2.style.width = "35%";
  input2.style.height = "2rem";
  input2.style.width = "150px";
  input2.style.height = "50px";
  input2.style.borderRadius = "25px";
  input2.style.cursor = "pointer";
  input2.style.border = "none";
  input2.style.color = "red";

  input3.style.width = "35%";
  input3.style.height = "2rem";
  input3.style.width = "150px";
  input3.style.height = "50px";
  input3.style.borderRadius = "25px";
  input3.style.cursor = "pointer";
  input3.style.color = "green";
  input3.style.border = "none";

}

function play() { //responsável por 
  var newColumn = createNewColumn(); //adiciona div de tarefas feitas, fazendo, cumpridas
  setNewColumnStyle(newColumn);
  appendNewColumn(newColumn); //adiciona div
  var titulo = createNewNome(); //dá nome à coluna
  document.querySelector("#divTemporaria").remove();
  setNomeStyle(titulo);
  var inputSubmit = createSubmitColumnField(newColumn);
  //setSubmitColumnFieldStyle(inputSubmit);
  appendNewColumnFields(newColumn, titulo, inputSubmit);
  mainSection.classList.toggle('hide');

}

function tarefaDesign(descricao, div) { //estiliza tarefa do daniel
  descricao.style.width = "100%";
  descricao.style.margin = "0% 15% 5% 15%";
  descricao.style.maxHeight = "3rem";
  descricao.style.minHeight = "3rem";
  descricao.style.minWidth = "70%";
  descricao.style.padding = "0.4rem";
  //descricao.style.  o que tinha aqui???

  div.style.height = "16rem";

}

/*As próximas funções são as que eu criei. Servem para adicionar a coluna de tarefas, inicializada com o título da coluna e o botão de nova tarefa */

function createNewColumn() {
  var div = document.createElement("div");
  div.setAttribute("id", "column-" + getIdColumn());
  div.value = document.querySelector('#ColunaTemporaria').value;
  return div;
}

function setNewColumnStyle(div) {
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.justifyContent = "space-around";
  div.style.alignItems = "center";
  div.style.backgroundColor = "white";
  div.style.height = "100%";
  div.style.width = "30%";
  div.style.borderRadius = "10px";
  div.style.marginTop = "2%";
  div.style.marginBottom = "2%";
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
  inputSubmit.style.width = "150px";
  inputSubmit.style.height = "50px";
  inputSubmit.style.background = "#1d6bb4";
  inputSubmit.style.cursor = "pointer";
  inputSubmit.style.border = "none";
  inputSubmit.style.borderRadius = "25px";
  inputSubmit.style.margin = "15px";
  inputSubmit.addEventListener("click", () => { definicaoTarefa(inputSubmit) });
  return inputSubmit;
}

function setSubmitColumnFieldStyle(inputSubmit) {
  inputSubmit.style.marginTop = "2%";
  inputSubmit.style.marginBottom = "2%";
  inputSubmit.style.borderRadius = "5px";
  inputSubmit.style.border = "none";
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
  div.setAttribute("class", "naoFeita");
  var id_div = getIdTask();
  imprimirDiv(div);
  div.setAttribute("id", id_div);
  div.style.cursor = "pointer";
  var divTaskDescrition = document.createElement('div');
  var divColumnTask = document.createElement('div');


  descricao.setAttribute("id", getIdDescription());





  divTaskDescrition.appendChild(titulo);
  divTaskDescrition.appendChild(descricao); 



  div.appendChild(divTaskDescrition);
  div.appendChild(divColumnTask);

  var coluna = document.querySelector(`#${botaocoluna.id}`);
  coluna.insertBefore(div, botaocoluna);

  cardTarefa(div, titulo, descricao, divColumnTask, divTaskDescrition);

  
}


function cardTarefa(div, titulo, descricao, divColumnTask, divTaskDescrition) {
  div.style.width = "90%";

  div.style.padding = "0.3rem";
  div.style.display = "block";
  div.style.margin = "3% 0";
  div.style.borderRadius = "10px";
  div.style.float = "left";


  titulo.style.color = "white";
  titulo.style.width = "20%";


  descricao.style.color = "black";
  descricao.style.width = "20%";


  divTaskDescrition.style.display = "flex";
  divTaskDescrition.style.flexWrap = "wrap";
  divTaskDescrition.style.flexDirection = "column";
  divTaskDescrition.style.alignItems = "center";
  div.style.marginRight = "10px";


}

function tasksDatabaseGetsTasks(tasks) {
   localStorageIndex++;
  tasksDatabase.push(tasks.textContent);
  localStorage.setItem("Task-" + localStorageIndex + "°", tasks.textContent);
}
