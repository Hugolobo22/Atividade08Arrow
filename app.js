/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/

// function numeros(num1, num2){
//   return num1 * num2
// }  

let numeros = (num1, num2) => num1 / num2

console.log(numeros(5, 10))

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

// let outronumero = function(num1, num2){
//   return num1 / num2
// }

let outronumero = (num1, num2) => num1 / num2

console.log(outronumero(5, 10))

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."
*/

// let valor = function(valor = 1){
//   console.log(valor)
//   for (i = valor; i <= 7; i++){
//     console.log(`Esta é a ${i}ª vez que essa string é exibida.`)
//   }
// }

const valor = (valor = 1) => {
  console.log(valor)
  for (let i = valor; i <= 7; i++) {
    console.log(`Esta é a ${i}ª vez que essa string é exibida.`)
  }
}

console.log(valor(1))

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

// let millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']
// function converter(array) {
//   let novo = []
//   for (let i = 0; i < array.length-1; i++){
//     novo.push(array[i].toUpperCase())
//   }
//   return novo
// }

let millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']
const converter = (array) => {
  let novo = []
  for (let i = 0; i < array.length; i++) {
    novo.push(array[i].toUpperCase())
  }
  return novo
}

let resultado = converter(millennialWords)
console.log(resultado)

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

// function positivo(numero){
//   return numero > 0
// }

// function contar(numero){
//   let contador = 0
//   for(let i = 0; i < numero.length; i++)
//     if (positivo(numero[i])){
//       contador++
//     }
// return contador
// }

const positivo = (numero) => numero > 0

const contar = (numero) => {
  let contador = 0
  for(let i = 0; i < numero.length; i++) {
    if (positivo(numero[i])) {
      contador++
    }
  }
  return contador
}

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3]
const contadorpositivo = contar(randomNumbers)
const contadornegativo = randomNumbers.length - contadorpositivo
console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${contadorpositivo} positivos e ${contadornegativo} negativos.`);

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

// function retornaImpar(array){
//   const impares = []
//   for (let i = 0; i < array.length-1; i++){
//     if (array[i] % 2 !== 0){
//       impares.push(array[i])
//     }
//   }
//   return impares
// }

const retornaImpar = (array) => {
  const impares = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      impares.push(array[i])
    }
  }
  return impares;
}

const getOddNumbers = [83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]
const arrayImpares = retornaImpar(getOddNumbers)
console.log(arrayImpares)

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

const frase = functions.map(functions => functions()).join(' ')
console.log(frase)
