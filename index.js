function appendNumber(number) {
  var display = document.getElementById("display");
  display.value += number;
}

function appendOperator(operator) {
  var display = document.getElementById("display");
  display.value += operator;
}

function appendDecimal() {
  var display = document.getElementById("display");
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function calculate() {
  var display = document.getElementById("display");
  var expression = display.value;
  
  // Verifica se a expressão é válida
  if (isValidExpression(expression)) {
    var result = eval(expression);
    display.value = result;
  } else {
    display.value = 'Erro';
  }
}

function clearDisplay() {
  var display = document.getElementById("display");
  display.value = '';
}

function isValidExpression(expression) {
  // Verifica se a expressão contém caracteres inválidos
  var regex = /^[-+*/.\d\s]+$/;
  return regex.test(expression);
}
