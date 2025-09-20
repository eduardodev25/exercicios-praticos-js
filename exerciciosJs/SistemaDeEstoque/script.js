alert(
    " 💼 Bem-vindo ao Sistema de Estoque\n" +
    "----------------------------\n" +
    "Por favor, selecione a operação desejada."
);




let produtos = []
let opc = "";

while (true) {
    opc = prompt("Escolha a operação desejada:\n" +
        "1 - Adicionar produto\n" +
        "2 - Remover produto\n" +
        "3 - Atualizar quantidade\n" +
        "4 - Consultar estoque\n" +
        "5 - Sair")

    if (opc === "5") {
        let totalQuantidade = 0;
        let somaPrecos = 0;

        for (let i = 0; i < produtos.length; i++) {
            totalQuantidade += produtos[i].quantidade
            somaPrecos += produtos[i].preco * produtos[i].quantidade
        }

        alert(`
            💼 Relatório Final - Sistema de Estoque
            ========================================
            📦 Produtos cadastrados: ${produtos.length}
            🔢 Quantidade total em estoque: ${totalQuantidade}
            💰 Valor total em preços: R$ ${somaPrecos.toFixed(2)}
        `);

        alert("Sistema de estoque finalizado ✅");
        break;
    }

    else if (opc === "1") {

        let nome = prompt("💼 Digite o NOME do produto:").toLowerCase().trim();

        let quantidade = parseInt(prompt("💼 Digite a QUANTIDADE do produto:"));

        if (quantidade < 1) {
            alert("Quantidade invalida.. Tente novamente informando quantidade Maior ou igual a 1..")
            continue
        }

        let preco = parseFloat(prompt("💼 Digite o PREÇO do produto (R$):"));
        if (preco <= 0 || isNaN(preco)) {
            alert("❌ Preço inválido!\n" +
                "Tente novamente, informando um valor válido.\n" +
                "💡 Exemplo: 12.50")
            continue
        } else {

            let produto = {
                nome: nome,
                quantidade: quantidade,
                preco: preco
            }
            produtos.push(produto)

            alert(
                "💼 Sistema de Estoque\n" +
                "============================\n" +
                "✅ Produto cadastrado com sucesso!\n\n" +
                "📦 Produto: " + nome + "\n" +
                "🔢 Quantidade: " + quantidade + "\n" +
                "💰 Preço: R$ " + preco.toFixed(2) + "\n\n" +
                "Você pode adicionar mais produtos ou consultar o estoque."
            );
        }

    }


    else if (opc === "2") {
        if (produtos.length === 0) {

            alert(
                "💼 Sistema de Estoque\n" +
                "============================\n" +
                "⚠️ Estoque está vazio!\n" +
                "Adicione produtos para começar a gerenciar seu estoque."
            );

        } else {
            let buscarProduto = prompt(
                "💼 Sistema de Estoque\n" +
                "============================\n" +
                "🔍 Digite o NOME do produto que deseja buscar:\n" +
                "Exemplo: Caneta"
            ).toLowerCase().trim();

            let encontrado = false

            for (let i = 0; i < produtos.length; i++) {
                if (produtos[i].nome.toLowerCase() === buscarProduto.toLowerCase()) {
                    let remover = produtos[i]
                    produtos.splice(i, 1)
                    encontrado = true
                    alert(`💼 Produto removido com sucesso!
                        ============================
                        📦 Nome: ${remover.nome}
                        🔢 Quantidade: ${remover.quantidade}
                        💰 Preço: R$ ${remover.preco.toFixed(2)}`);
                    break
                }
            }
            if (!encontrado) {
                alert("❌ Produto não encontrado!\n" +
                    "Verifique se o nome está correto e tente novamente.")
            }
        }
    }

    else if (opc === "3") {
        if (produtos.length === 0) {
            alert(
                "💼 Sistema de Estoque\n" +
                "============================\n" +
                "⚠️ Estoque está vazio!\n" +
                "Adicione produtos para começar a gerenciar seu estoque."
            );
        }
        else {
            let buscarProduto = prompt(
                "💼 Sistema de Estoque\n" +
                "============================\n" +
                "🔍 Digite o NOME do produto que deseja buscar:\n" +
                "Exemplo: Caneta"
            ).toLowerCase().trim();

            let encontrado = false
            let lista = ""

            for (let i = 0; i < produtos.length; i++) {
                if (produtos[i].nome.toLowerCase() === buscarProduto.toLowerCase()) {

                    let novaqtd = parseInt(prompt(
                        "💼 Sistema de Estoque\n" +
                        "============================\n" +
                        "🔄 Atualizar Quantidade\n" +
                        "Digite a nova quantidade do produto:\n" +
                        "Exemplo: 10"
                    ));

                    produtos[i].quantidade += novaqtd
                    encontrado = true
                    lista += `💼 Sistema de Estoque
                            ============================
                            🔄 Atualização concluída!
                            📦 Nova quantidade cadastrada: ${produtos[i].quantidade}\n`;
                    alert(lista)
                    break
                }
            }
            if (!encontrado) {
                alert("❌ Produto não encontrado!\n" +
                    "Verifique se o nome está correto e tente novamente.")
            }
        }
    }

    else if (opc === "4") {
        let lista = ""

        if (produtos.length === 0) {
            lista = "📋 Lista de Produtos Cadastrados" +
                "==============================" +
                "⚠️ Nenhum produto foi encontrado no estoque."
        } else {

            lista = "📋 Lista de Produtos Cadastrados" +
                "=============================="

            for (let i = 0; i < produtos.length; i++) {

                lista += `\n📦 Nome: ${produtos[i].nome}
                            🔢 Quantidade: ${produtos[i].quantidade}
                            💲 Preço: R$ ${produtos[i].preco}\n`;
            }
            alert(lista)
        }

    }

}