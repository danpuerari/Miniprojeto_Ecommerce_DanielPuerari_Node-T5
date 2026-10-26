import type { Produto } from "./types.js";

const produtos: Produto[] = [];

export function cadastrarProduto(produto: Produto): void {
    if (!Number.isSafeInteger(produto.id) || produto.id <= 0) {
        throw new Error("O ID do produto deve ser um inteiro positivo.");
    }

    if (produtos.some((item) => item.id === produto.id)) {
        throw new Error("Já existe um produto com esse ID.");
    }

    if (produto.nome.trim() === "") {
        throw new Error("O nome do produto deve ser um vaor válido.");
    }

    if (!Number.isFinite(produto.preco) || produto.preco <= 0) {
        throw new Error("O preço deve ser maior que zero.");
    }

    if (!Number.isSafeInteger(produto.estoque) || produto.estoque < 0) {
        throw new Error("O estoque não pode ser negativo.");
    }

    produtos.push(produto);
}

export function listarProdutos(): Produto[] {
    // Retorna uma cópia do array de produtos para evitar alterações nos registros internos.
    return produtos.map((produto) => ({ ...produto }));
}