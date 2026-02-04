// Função que calcula o saldo e o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de rankeadas
    let saldoVitorias = vitorias - derrotas;
    
    // Variável para armazenar o nível
    let nivel;

    // Estrutura de decisão para definir o nível baseado nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Exibe a mensagem final
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de uso da função com um laço de repetição
let jogadores = [
    {vitorias: 5, derrotas: 3},
    {vitorias: 25, derrotas: 10},
    {vitorias: 55, derrotas: 20},
    {vitorias: 92, derrotas: 5}
];

// Loop para calcular o nível de cada jogador
for (let i = 0; i < jogadores.length; i++) {
    calcularNivel(jogadores[i].vitorias, jogadores[i].derrotas);
}