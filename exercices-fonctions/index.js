// Exercice 1

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

// Pour tester
console.log(add(21, 21)); // doit afficher 42
console.log(sub(63, 21)); // doit afficher 42
console.log(mult(21, 2)); // doit afficher 42
console.log(div(84, 2)); // doit afficher 42
console.log(mod(42, 2)); // doit afficher 0

// Exercice 2

function askUserOperation() {
  const operation = prompt("Entrez une opération (add, sub, mult, div, mod)");
  return operation;
}

function askUserFirstNumber() {
  const firstNumber = prompt("Entrez le premier nombre");
  return firstNumber;
}

function askUserSecondNumber() {
  const secondNumber = prompt("Entrez le second nombre");
  return secondNumber;
}

// Exercice 3

function calculator() {
  const operation = askUserOperation();
  const firstNumber = askUserFirstNumber();
  const secondNumber = askUserSecondNumber();

  switch (operation) {
    case "add":
      return add(firstNumber, secondNumber);
    case "sub":
      return sub(firstNumber, secondNumber);
    case "mult":
      return mult(firstNumber, secondNumber);
    case "div":
      return div(firstNumber, secondNumber);
    case "mod":
      return mod(firstNumber, secondNumber);
    default:
      return "Opération invalide";
  }
}

console.log(calculator());
