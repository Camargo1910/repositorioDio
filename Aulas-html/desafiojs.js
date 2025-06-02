// Desafio JS na Dio tem  funlçoes gets e print acessagas globalmente
// gets le uma linha  com dado(s) de entrada(input) do usuario
// print  imprime um texto de saida(output), pulando uma linha

// le os valores de entrada:
const valorSalario = parseFloat(gets());
const valorBeneficio = parseFloat(gets());

// calcula imposto atraves da funcao "calcularImposto"
const valorImposto = calcularImposto(valorSalario);
// calcula e imprime a saida(com 2 decimais)
 const saida = valorSalario - valorImposto+valorBeneficio;
 print(saida.toFixed(2));

 function calcularImposto(salario){
    let aliquota;
    if(salario>=0 && salario<= 1100){
        aliquota = 0.05
    } else if(salario>=1100.01 && salario<=2500){
        aliquota = 0.10
    } else{
        aliquota = 0.15
    }

    // TODO criar  as demais condiçoes para aliquota de 10 e 15%
    return aliquota*salario;
 }

 calcularImposto(2000)