let produtos = []

let opc = ""


function Adicionar() {
    let nome = prompt("Digite o nome do produto: ").toLowerCase().trim()
    let quantidade = parseInt(prompt("Informe a quantidade de produto no estoque: "))
    let preco = parseFloat(prompt("Informe o preço do Produto: "))

    let estoque = {
        nome: nome,
        quantidade: quantidade,
        preco: preco
    }

    produtos.push(estoque)

    alert("🛒✨ Estoque atualizado com sucesso! ✨🛒");

}

function vender() {
    let Buscarnome = prompt("🛒 VENDER PRODUTO 🛒 | Digite o nome do produto que deseja vender:");
    let quantidadeVendas = parseInt(prompt("📦 QUANTIDADE A VENDER 📦 | Digite a quantidade do produto:"))
    let encontrado = false

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].nome === Buscarnome) {
            encontrado = true

            if (quantidadeVendas <= produtos[i].quantidade) {
                produtos[i].quantidade -= quantidadeVendas;
                alert("🛒✨ Venda concluída com sucesso! ✨🛒");
            } else {
                alert("⚠️ Estoque insuficiente para realizar a venda!");
            }
            break;
        }
    }
    if (!encontrado) {
        alert("❌ Produto não encontrado no estoque!");
    }


}

function mostrarEstoque() {
    let lista = ``

    if (produtos.length === 0) {
        alert("❌Não tem Produto não encontrado no estoque!")
    } else {

        for (let i = 0; i < produtos.length; i++) {
            lista += `📦 PRODUTO: ${produtos[i].nome} | 🔢 Quantidade: ${produtos[i].quantidade} | 💰 Preço: R$ ${produtos[i].preco.toFixed(2)}\n`;
        }
        alert(lista)
    }
}

while (true) {
    opc = opc = prompt(
        "==============================\n" +
        "        🛒 MENU ESTOQUE 🛒       \n" +
        "==============================\n" +
        "1️⃣  Adicionar estoque\n" +
        "2️⃣  Vender produto\n" +
        "3️⃣  Mostrar estoque\n" +
        "4️⃣  Sair\n" +
        "==============================\n" +
        "👉 Escolha uma opção:"
    );

    switch (opc) {
        case "1":
            Adicionar()
            break;

        case "2":
            vender()
            break;

        case "3":
            mostrarEstoque()
            break;

        case "4":
            alert(
                "==============================\n" +
                " 👋 Obrigado por usar o sistema de estoque!\n" +
                " ✅ Sessão encerrada com sucesso.\n" +
                "=============================="
            );
            break

        default:
            alert(
                "==============================\n" +
                "⚠️ Opção inválida!\n" +
                "❌ Por favor, escolha uma das opções do menu.\n" +
                "=============================="
            );
    }
}

