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

export function buscarProdutoPorId(id: number): Produto | undefined {
    const produtoEncontrado = produtos.find((produto) => produto.id === id);
    if (produtoEncontrado === undefined) {
        return undefined;
    }

    return {...produtoEncontrado};
}

export function buscarProdutosPorNome(nome: string): Produto[] {
    const termoBusca = nome.trim().toLowerCase();

    if (termoBusca === "") {
        return [];
    }

    const resultados = produtos.filter((produto) => produto.nome.toLowerCase().includes(termoBusca));

    return resultados.map((produto) => ({ ...produto }));
}

export function filtrarProdutosPorCategoria(categoria: string): Produto[] {
    const categoriaBusca = categoria.trim().toLowerCase();

    if (categoriaBusca === "") {
        return [];
    }

    const resultados = produtos.filter((produto) => produto.categoria.trim().toLowerCase() === categoriaBusca);

    return resultados.map((produto) => ({ ...produto }));
}