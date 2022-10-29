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



//===========
var c = new Coluna("coluna1");
c.addToDo("titulo", "desc");

console.log(c.listaToDo[0].titulo);
console.log(c.listaToDo[0].descricao);

listaColunas.push(new Coluna());


function adicionarColuna(titulo){
  var c = new Coluna(titulo);
  listaColunas.push(c);
}

function adicionarToDo(tituloColuna, titulo, desc){
  
  var colunaEscolhida = listaColunas.filter((element) => element.titulo == tituloColuna)[0];
  
  colunaEscolhida.addToDo(titulo, desc);
  
}


function removerToDo(tituloColuna, index){
  var colunaEscolhida = listaColunas.filter((element) => element.titulo == tituloColuna)[0];

  colunaEscolhida.removeByIndex(index);
}

export {adicionarColuna, adicionarToDo, removerToDo};
