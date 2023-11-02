// Variáveis do Sistema
let derrotas = 5
let vitorias = 100
let saldoVitorias = saldoRank(vitorias, derrotas) // guarda o saldo de vitorias em uma variável
let nivelHeroi = classificarHeroi(vitorias) // guarda a classificação do herói em uma variável
console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivelHeroi}`) // texto a ser exibido

// # Funções executadas
// ## Classifica herói
function classificarHeroi (vitorias){
  if (vitorias <= 10){
    return "Ferro"
  } else if ((vitorias >= 11) && (vitorias <= 20)){
    return "Bronze"
  } else if ((vitorias >= 21) && (vitorias <= 50)){
    return "Prata"
  } else if ((vitorias >= 51) && (vitorias <= 80)){
    return "Ouro"
  } else if ((vitorias >= 81) && (vitorias <= 90)){
    return "Diamante"
  } else if ((vitorias >= 91) && (vitorias <= 100)){
    return "Lendário"
  } else if (vitorias >= 101){
    return "Imortal"
  }
}
// ## Calcula saldo de vitórias
function saldoRank(vitorias, derrotas) {
  let saldoResultado = vitorias - derrotas
  return saldoResultado
}