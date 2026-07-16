function comprar() {
    const mensagem =`Olá, quero comprar o produto ${produtoSelecionado} `;
     const url = `https://wa.me/5585987088527?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}