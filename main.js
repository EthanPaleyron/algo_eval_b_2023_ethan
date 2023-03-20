// EXO 1🔴
let number = "";
for (let i = 0; i <= 10; i++) {
  number = number + i;
}

console.log(number);

// EXO 2🔴
let result = "";
let space = " ";

for (let i = 0; i <= 10; i++) {
  result = result + space + i;
}

console.log(result);

// EXO 3🔴
let resultImpaires = "";

for (let i = 1; i < 100; i = i + 2) {
  resultImpaires = resultImpaires + space + i;
}

console.log(resultImpaires);

// EXO 4🔴
let resultMultiple7 = "";

for (let i = 0; i <= 10; i++) {
  resultMultiple7 = resultMultiple7 + i * 7 + space;
}

console.log(resultMultiple7);

// EXO 5🔴
let resultMultiple = "";
let entrer = "\n";

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j < 10; j++) {
    resultMultiple = resultMultiple + space + j * i;
  }
  resultMultiple += entrer;
}

console.log(resultMultiple);

// EXO 6🔴
function calcul() {
  let result = "";
  let space = " ";

  for (let i = 0; i <= 10; i++) {
    result = result + space + i;
  }
  return result;
}

console.log(calcul());

// EXO 7🔴
function factoriel() {
  let resultFactoriel = 1;
  for (let i = 1; i <= 10; i++) {
    resultFactoriel = resultFactoriel * i;
  }
  return resultFactoriel;
}

console.log(factoriel());

// EXO 8🔴
function paires() {
  let numberPaires = "";

  for (let i = 10; i <= 30; i = i + 2) {
    numberPaires = numberPaires + space + i;
  }
  return numberPaires;
}

console.log(paires());

// EXO 9🔴
function fahrenheit(celsius) {
  let result = celsius * 9 / 5 + 32;
  return result;
}

console.log(fahrenheit(30));

// EXO 10🔴


// EXO 11🔴


// EXO 12🔴


// EXO 13🔴


// EXO 14🔴


// EXO 15🔴


// EXO 16🔴


// EXO 17🔴


// EXO 18🔴
