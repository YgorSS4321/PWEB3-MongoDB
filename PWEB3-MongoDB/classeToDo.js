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

export let listaColunas = [];


