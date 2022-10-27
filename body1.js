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

export {nameColumn};