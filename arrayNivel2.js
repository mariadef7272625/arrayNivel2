//11
var valores = [29.90, 54.00, 15.50, 80.00];
var total = 0;
for (var i = 0; i < valores.length; i++) {
    total = total + valores[i]
}
console.log("Total da compra: R$ " + total.toFixed(2));

//12
var notas = [6.5, 5.0, 7.5, 6.0];
var soma = 0;
var media = 0;

for (var i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}
media = soma / notas.length;
console.log("Média do aluno: " + media.toFixed(2));

if (media >= 6.0) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado!");
}

//13
var idades = [14, 18, 25, 16, 32, 17, 19];
var maiores = []

for (var i = 0; i < idades.length; i++) {
    if (idades[i] > 18) {
        maiores.push(idades[i]);
    }
}
console.log(maiores);

//14
var logins = ["joao.silva", "maria.souza", "pedro.lima"];
var novoLogin = "ana.costa";
var existe = false;

for (var i = 0; i < logins.length; i++) {
    if (logins[i] == novoLogin) {
        existe = true;
    }
}
if (existe == false) {
    logins.push(novoLogin);
    console.log("Login cadastro com sucesso!");
} else {
    console.log("Login indisponível!");
}
console.log(logins);

//15
var precos = [100, 200, 50, 80];
var precosPromocionais = [];

for (var i = 0; i < precos.length; i++) {
    var novoPreco = precos[i] * 0.85;
    precosPromocionais.push(novoPreco);
}
console.log(precosPromocionais);

//16
var numeros = [12, 7, 5, 20, 33, 8, 11, 4];
var pares = 0;
var impares = 0;

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares++;
    } else {
        impares++
    }
}
console.log("Quantidade de números pares: " + pares);
console.log("Quantidade de números ímpares: " + impares);

//17
var temperaturas = [22, 29, 18, 31, 24, 19];
var maior = temperaturas[0];
var menor = temperaturas[0];

for (var i = 1; i < temperaturas.length; i++) {
    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }
    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
}
console.log("Maior temperatura: " + maior + " graus");
console.log("Menor temperatura: " + menor + " graus");

//18
var pedido = ["Hambúrguer", "Batata Frita", "Refrigerante", "Sobremesa"];
var posicao = pedido.indexOf("Batata Frita");

pedido.splice(posicao, 1);

console.log(pedido);

//19
var nomes = ["Amanda", "Carlos", "Arthur", "Bruna", "Alice", "Diego"];
var letra = "A";

for (var i = 0; i < nomes.length; i++) {
    if (nomes[i][0] == letra) {
        console.log(nomes[i]);
    }
}

//20
const produtos = [
    "Notebook com 4",
    "Webcam com 0",
    "Mousepad com 12",
    "Cabo HDMI com 0"];
produtos.forEach(function (produto) { //forEach percorre os elementos do array, um de cada vez. function(produto) cria uma função que recebe cada elemento.
    let partes = produto.split(" com "); //"Notebook com 4".split(" com ");
    let nome = partes[0];
    let quantidade = Number(partes[1]); //Number() Transforma o valor em número, pq "0" é texto 
    if (quantidade > 0) {
        console.log(nome, quantidade);
    }
});

