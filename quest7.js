// Solicitei ao usuário que digitasse o primeiro número.//
let inteiro = prompt ("Insira um número:")

//Depois, solicitei ao usuário que digitasse o segundo número.//
let decimal = prompt ("Insira outro número:")

/* Em seguida, utilizei as funçoes "parseInt" e "ParseFloat" para converter as variáveis "inteiro" e "deciamal"
do tipo string para numero inteiro (parseInt) e numero decimal (parseFloat)*/
inteiro = parseInt(inteiro)
decimal = parseFloat(decimal)

//Por fim, solicitei que fosse exibido o tipo de dado das variáveis com o comando "Console.log"//
console.log (typeof inteiro)
console.log (typeof decimal)