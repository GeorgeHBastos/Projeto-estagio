const INDICE = 13;
var SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

"Sendo assim, a resposta pro problema é 91."

function gerarFibonacci(teste) {
    let fibonacci = [0, 1]; 
    let fibonacci2 = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    
    while (fibonacci2 <= teste) {
        fibonacci.push(fibonacci2);
        fibonacci2 = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    }

    return fibonacci;
}