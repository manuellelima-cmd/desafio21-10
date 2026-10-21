let jogos = [
    "Minecraft",
    "The Sims",
    "Roblox",
    "Terraria",
    "Stardew Valley"
];

let escolha = prompt ("digite o nome do jogo");

if(jogos.some(jogo => jogo.toLowerCase() === escolha.trim().toLowerCase())){
    console.log( "o jogo esta na lista!");

}
else{
    console.log("o jogo nao esta na lista!")
}
 


    