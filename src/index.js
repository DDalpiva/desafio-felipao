let nomeHero = "Formigão"
let xpPontos  = 8230

let nivelHero;

if (xpPontos < 1000) {
    nivelHero = "Ferro";
} else if (xpPontos >= 1001 && xpPontos <= 2000) {
    nivelHero = "Bronze";
} else if (xpPontos >= 2001 && xpPontos <= 5000) {
    nivelHero = "Prata";
} else if (xpPontos >= 5001 && xpPontos <= 7000) {
    nivelHero = "Ouro";
} else if (xpPontos >= 7001 && xpPontos <= 8000) {
    nivelHero = "Platina";
} else if (xpPontos >= 8001 && xpPontos <= 9000) {
    nivelHero = "Ascendente";
} else if (xpPontos >= 9001 && xpPontos <= 10000) {
    nivelHero = "Imortal";
} else if (xpPontos <= 10001 ){
    nivelHero = "Radiante";
}             

// Saída

console.log(`O Herói é o poderoso  ${nomeHero} !!! 
tem ${xpPontos} Pontos de Xp,
está no nível de ${nivelHero}!`)