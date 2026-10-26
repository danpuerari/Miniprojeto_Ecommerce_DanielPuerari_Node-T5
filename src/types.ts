export interface Produto {
    id: number;
    nome: string;
    categoria: string;
    preco: number;
    estoque: number;
}

export interface Cliente {
    id: number;
    nome: string;
    email: string;
}

export interface ItemCarrinho {
    produtoId: number;
    quantidade: number;
}

/**
 * O carrinho e o ItemCarrinho são estruturas temporárias para a preparação da compra.
 * O pedido e o ItemPedido são um registro histórico da finalização da compra.
 */
export interface Carrinho {
    clienteId: number;
    itens: ItemCarrinho[];
}

/**
 * ItemPedido congela os dados do momento da compra.
 * Alterações no catálogo não podem afetar pedidos anteriores.
 */
export interface ItemPedido {
    produtoId: number;
    quantidade: number;
    precoUnitario: number;
}

export interface Pedido {
    id: number;
    clienteId: number;
    itens: ItemPedido[];
    total: number;
    data: Date;
}