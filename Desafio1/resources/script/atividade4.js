let livros =["1984","racula","ensaio","moby","it"];

let = prompt ("digite o livro")

let posicao = livros.indexOf("it");

if (posicao === -1) {
    console.log("Livros não encontrado.");
} else {
    console.log("Livros encontrado na posição " + posicao + ".");
}


