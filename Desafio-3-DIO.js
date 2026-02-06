// Classe Heroi = dados iniciais para partir da premissa de quem é herói, qual sua idade e sua classe.
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

// Estrutura de decisão das classes e qual ataque realiza
    switch (this.tipo) {
      case "Mago":
        ataque = "magia";
        break;
      case "Guerreiro":
        ataque = "espada";
        break;
      case "Monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "Shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando alguns heróis = que são objetos do código
const herois = [
  new Heroi("Ice Doug", 30, "Mago"),
  new Heroi("Axe Doug", 35, "Guerreiro"),
  new Heroi("Staff Doug", 28, "Monge"),
  new Heroi("Dark Doug", 25, "Ninja")
];

// Comando para executar os ataques
for (let heroi of herois) {
  heroi.atacar();
}