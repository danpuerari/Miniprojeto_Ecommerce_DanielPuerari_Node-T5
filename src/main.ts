import {
    cadastrarProduto,
    listarProdutos,
    buscarProdutoPorId,
    buscarProdutosPorNome,
    filtrarProdutosPorCategoria
} from "./produtos.js";

import type { Produto } from "./types.js";

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

console.log("\n=== Busca por ID existente ===");

const produtoEncontrado = buscarProdutoPorId(2);

if (produtoEncontrado !== undefined) {
    console.table([produtoEncontrado]);
} else {
    console.log("Produto não encontrado.");
}

console.log("\n=== Busca por ID inexistente ===");

const produtoInexistente = buscarProdutoPorId(99);

if (produtoInexistente !== undefined) {
    console.table([produtoInexistente]);
} else {
    console.log("Produto não encontrado.");
}

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

console.log("\n=== Busca parcial: 'tec' ===");

const resultadoTeclado = buscarProdutosPorNome("tec");
if (resultadoTeclado.length > 0) {
    console.table(resultadoTeclado);
} else {
    console.log("Nenhum produto encontrado.");
}

console.log("\n=== Busca sem diferenciar maiúsculas ===");
console.table(buscarProdutosPorNome("MOU"));

console.log("\n=== Busca sem correspondências ===");

const resultadoInexistente = buscarProdutosPorNome("xyz");
if (resultadoInexistente.length > 0) {
    console.table(resultadoInexistente);
} else {
    console.log("Nenhum produto encontrado.");
}

console.log("\n=== Busca vazia ===");
console.log(buscarProdutosPorNome("   "))

console.log("\n=== Filtro por categoria: Informática ===");

const produtosInformatica = filtrarProdutosPorCategoria("Informática");
if (produtosInformatica.length > 0) {
    console.table(produtosInformatica);
} else {
    console.log("Nenhum produto encontrado nessa categoria.");
}

console.log("\n=== Filtro ignorando maiúsculas e espaços ===");
console.table(filtrarProdutosPorCategoria("  INFORMÁTICA  "));

console.log("\n=== Filtro por categoria inexistente ===");

const categoriaInexistente = filtrarProdutosPorCategoria("Jardinagem");
if (categoriaInexistente.length > 0) {
    console.table(categoriaInexistente);
} else {
    console.log("Nenhum produto encontrado nessa categoria.");
}

console.log("\n=== Filtro por categoria vazia ===");
console.log(filtrarProdutosPorCategoria("   "));