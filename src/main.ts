import { cadastrarProduto, listarProdutos } from "./produtos.js";
import type { Produto } from "./types.js"

console.log("=== Cadastrando produtos ===");

cadastrarProduto({
    id: 1,
    nome: "Teclado",
    categoria: "Informática",
    preco: 150,
    estoque: 10,
});

cadastrarProduto({
    id: 2,
    nome: "Mouse",
    categoria: "Informática",
    preco: 80,
    estoque: 15,
});

console.log("=== Produtos cadastrados ===");
console.table(listarProdutos());

function testarCadastroInvalido(
    descricao: string,
    produto: Produto
): void {
    console.log(`\nTeste: ${descricao}`);

    try {
        cadastrarProduto(produto);

        console.log(
            "FALHOU: o cadastro inválido foi aceito."
        );
    } catch (erro: unknown) {
        if (erro instanceof Error) {
            console.log(
                `Cadastro rejeitado: ${erro.message}`
            );
        } else {
            console.log("Ocorreu um erro não identificado.");
        }
    }
}

console.log("\n=== Testes de validação ===");

testarCadastroInvalido(
    "Preço negativo",
    {
        id: 3,
        nome: "Monitor",
        categoria: "Informática",
        preco: -100,
        estoque: 5,
    }
);

testarCadastroInvalido(
    "ID negativo",
    {
        id: -4,
        nome: "Webcam",
        categoria: "Informática",
        preco: 200,
        estoque: 3,
    }
);

testarCadastroInvalido(
    "ID decimal",
    {
        id: 3.5,
        nome: "Headset",
        categoria: "Informática",
        preco: 180,
        estoque: 4,
    }
);

testarCadastroInvalido(
    "ID duplicado",
    {
        id: 1,
        nome: "Outro teclado",
        categoria: "Informática",
        preco: 120,
        estoque: 5,
    }
);

testarCadastroInvalido(
    "Nome vazio",
    {
        id: 5,
        nome: "   ",
        categoria: "Informática",
        preco: 100,
        estoque: 2,
    }
);

testarCadastroInvalido(
    "Estoque negativo",
    {
        id: 6,
        nome: "Webcam HD",
        categoria: "Informática",
        preco: 250,
        estoque: -2,
    }
);