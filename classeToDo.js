export class ToDo{
  titulo = "...";
  descricao = "...";
  isDone = false;

  constructor(titulo, descricao){
    this.titulo = titulo;
    this.descricao = descricao;
    this.isDone = false;
  }

  //inverte isDone -- true/false
  click(){
    this.isDone = (isDone == false)? true : false;
  }
}

export class Coluna{
  titulo = "...";
  listaToDo = [];

  constructor(titulo){
    this.titulo = titulo;
    this.listaToDo = [];
  }

  addToDo(titulo, descricao){
    var todo = new ToDo(titulo, descricao);
    this.listaToDo.push(todo);
  }

  removeByIndex(index){
    this.listaToDo.splice(index, 1);
  }
}

//===========


export let listaColunas = [];

function mostrarV(){
  console.log(listaColunas);
}

document.getElementById("button-mostrar").addEventListener("click", mostrarV);





//===========
function adicionarColuna(titulo){
  var c = new Coluna(titulo);
  listaColunas.push(c);
}

function adicionarToDo(tituloColuna, titulo, desc){
  console.log("=========");
  //console.log(listaColunas);
  console.log("=========");
  
  var colunaEscolhida = listaColunas.find(function(element){
    return element.titulo == tituloColuna;
  });

  colunaEscolhida.addToDo(titulo, desc);
  
}

function removerToDo(tituloColuna, index){
  var colunaEscolhida = listaColunas.filter((element) => element.titulo == tituloColuna)[0];

  colunaEscolhida.removeByIndex(index);
}

function moverToDo(tituloColOrigem, index, tituloColDestino){
  var colunaOrigem = listaColunas.filter((element) => element.titulo == tituloColOrigem)[0];
  var todoMover = colunaOrigem.listaToDo.splice(index, 1)[0];

  var colunaDestino = listaColunas.filter((element) => element.titulo == tituloColDestino)[0];
  
  colunaDestino.listaToDo.push(todoMover);
  

}

export {adicionarColuna, adicionarToDo, removerToDo, moverToDo};



/*
adicionarColuna("coluna1");
adicionarToDo("coluna1", "titulo1", "desc1");
adicionarToDo("coluna1", "titulo2", "desc2");
adicionarToDo("coluna1", "titulo3", "desc3");
adicionarToDo("coluna1", "titulo4", "desc4");
//removerToDo("coluna1", 1);

adicionarColuna("coluna2");
adicionarToDo("coluna2", "titulo5", "desc5");
adicionarToDo("coluna2", "titulo6", "desc6");
adicionarToDo("coluna2", "titulo7", "desc7");
adicionarToDo("coluna2", "titulo8", "desc8");

moverToDo("coluna1", 1, "coluna2");

console.log(listaColunas);
*/