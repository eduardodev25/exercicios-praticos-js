let produtos = []

let opcao = ""


function adicionar(nomeProduto, quantidade, preco) {

    let produto = {
        nomeProduto: nomeProduto,
        quantidade: quantidade,
        preco: preco
    }

    produtos.push(produto)
    alert(
        `🛒✨ PRODUTO ADICIONADO AO CARRINHO ✨🛒\n\n` +
        `📦 Produto: ${produto.nomeProduto}\n` +
        `🔢 Quantidade: ${produto.quantidade}\n` +
        `💰 Preço: R$ ${produto.preco.toFixed(2)}`
    )

}


function RemoverProdutos() {
    if (produtos.length === 0) {
        alert("Carrinho esta vazio")
    } else {
        let buscarProduto = prompt("👉Digite o nome do produto que deseja buscar: ").toLowerCase().trim()
        let encontrado = false

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].nomeProduto.toLowerCase() === buscarProduto.toLowerCase()) {
                encontrado = true
                let remover = produtos[i]
                produtos.splice(i, 1)
                alert(
                    `🛒✨ PRODUTO REMOVIDO AO CARRINHO ✨🛒\n\n` +
                    `📦 Produto: ${remover.nomeProduto}\n` +
                    `🔢 Quantidade: ${remover.quantidade}\n` +
                    `💰 Preço: R$ ${remover.preco.toFixed(2)}`
                )
                break
            }
        }
        if (!encontrado) {
            alert("Produto Não localizado..")
        }
    }
}


while (true) {
    opcao = prompt(
        "==============================\n" +
        "         🛒 MENU CARRINHO 🛒       \n" +
        "==============================\n" +
        "1️⃣  Adicionar produto ao carrinho\n" +
        "2️⃣  Remover produto do carrinho\n" +
        "3️⃣  Finalizar compra\n" +
        "==============================\n" +
        "👉 Escolha uma opção:"
    )

    switch (opcao) {
        case "1":
            let nomeProduto = prompt("👉Digite o nome do produto que deseja adicionar: ").toLowerCase().trim()
            let quantidade = parseInt(prompt("👉 Quantidade que deseja adicionar: "))
            let preco = parseFloat(prompt("👉 Preço unitário do produto: "))
            adicionar(nomeProduto, quantidade, preco)

            break

        case "2":
            RemoverProdutos()
            break

        case "3":
            alert("Sistema finalizado...")
            break
        default:
            alert("Opção invalida.. Escolha uma das Opções do Menu")
    }
}
