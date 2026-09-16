// Avaliador de entregas
// PARA ESTRUTURAR DECISÕES NO CÓDIGO UTILIZAMOS A FAMÍLIA IF ELSE.
// IF = SE
// ELSE = SENÃO
// ELSE IF = SENÃO SE 
// O IF PEDE UMA CONDIÇÃO E SE ELA FOR ATENDIDA, EXECUTA O CÓDIGO QUE ESTÁ ENTRE {}.
// JÁ O ELSE SERVE PARA ATENDER OS CASOS QUE NÃO CONTEMPLAM AS CONDIÇÕES ANTERIORES.
// SE TIVERMOS MAIS DE UMA CONDIÇÃO, COMO NO EXEMPLO ABAIXO, É NECESSÁRIO UTILIZAR O ELSE IF, QUE NEGA O IF ANTERIOR E PROPÕE UMA NOVA CONDIÇÃO
// POR EXEMPLO, SE NÃO FOR NOTA 5, MAS FOR NOTA 4, O PROGRAMA ESCREVE MELHORAS! NA TELA
let nota = 5

if (nota == 5) {
    console.log("AURA!🔫🔫");
}
else if (nota == 4) {
    console.log("Melhoras!🖇");
}
else if (nota == 3){
    console.log("Estava bem embalado!🎢")
}
else if (nota == 2){
    console.log("minha vó é melhor que você.☠")
}
else if (nota == 1){
    console.log("Vai trabalhar de CLT pelo resto da eternidade...🌮")
}
else{
    console.log("INSIRA UMA NOTA VÁLIDA DE 1 A 5")
}