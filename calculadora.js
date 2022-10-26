// aula 5 ativida do pg//

function adicionar(Valor1, Valor2, valor3 =0){
    const resultado = Valor1 + Valor2 + valor3;
    return resultado;
}
function subtracao(Valor1, Valor2) {
    const resultado = Valor1 - Valor2;
    return resultado;
}
function multiplicacao(Valor1, Valor2) {
    const resultado = Valor1 * Valor2;
    return resultado;
}
function divisao(Valor1, Valor2) {
    const resultado = Valor1 / Valor2;
    return resultado;
}

console.log("--------Teste de operações/ Calculador");

const somar = adicionar(10, 10);
const subtrair = subtracao(10, 10);
const multiplica = multiplicacao(10, 10);
const dividir = divisao(10, 0);

console.log('resultado da soma é:', somar);
console.log('resultado da subtração é:', subtrair);
console.log('resultado da multiplicação é:', multiplica);
console.log('resultado da divisão é:', dividir);

console.log('Calculadora Nivel 3 - funções extras');

function quadradoDoNumero(Valor1) {
    const resultado = multiplicacao(Valor1,Valor1);
    return resultado;    
}
function mediaDeTresNumeros(nmr1, nmr2, nmr3) {
    const resultado = divisao( adicionar(nmr1, nmr2, nmr3),3 );
    return resultado;    
}
function calculaPorcentagem(ValorTotal, Porcentagem) {
    const resultado = divisao(multiplicacao(ValorTotal, Porcentagem), 100);
    return resultado;    
}
function geradorDePorcentagem(nmr1 , nmr2) {
    const resultado = divisao((multiplicacao(nmr1, 100)), nmr2);
    return resultado;    
}


const quadrado = quadradoDoNumero(10);
const media = mediaDeTresNumeros(10, 8, 6);
const porcentagem = calculaPorcentagem(11566, 21);
const PorcetagemDe = geradorDePorcentagem(5, 100);


console.log('resultado do quadrado é:', quadrado);
console.log('resultado da media de 3 notas é:', media);
console.log('resultado da porcentagem', porcentagem);
console.log('A porcentagem de 5 de 100 é:', PorcetagemDe, '%');