let saldoInciial = parseFloat(prompt("Digite o valor do seu saldo Atual: "))
let saldo = saldoInciial

let opc = ""


function Depositar(valorDeposito) {
    valorDeposito = parseFloat(prompt("Digite o valor do deposito: "));

    if (valorDeposito > 0 && !isNaN(valorDeposito)) {
        saldo += valorDeposito
        alert(`Depósito realizado! Saldo atual: R$ ${saldo.toFixed(2)}`);
    } else {
        alert("Valor inválido! Deposite um valor Acima de 0(ZERO)");
    }

}


function sacar() {
    let sacarValor = parseFloat(prompt("Digite o valor que deseja sacar: "));

    if (sacarValor > 0 && !isNaN(sacarValor)) {
        if (sacarValor < saldo) {
            saldo = saldo - sacarValor
            alert(`Saque realizado. Novo saldo: R$ ${saldo}`)
        } else{
            alert("Saldo insuficiente..")
        }        
    }

}

while (true) {
    opc = prompt("========================\n" +
        "       BANCO XYZ       \n" +
        "========================\n" +
        "1 - Depositar\n" +
        "2 - Sacar\n" +
        "3 - Consultar Saldo\n" +
        "4 - Sair\n" +
        "========================\n" +
        "Escolha uma opção:")

    switch (opc) {
        case "1":
            Depositar()
            break

        case "2":
            sacar()
            break
        
        case "3":
            alert(`Saldo Atual: R$ ${saldo}`)
            break

        case "4":
            alert("Sistema encerrado.. Obrigado");
            break
        default:
            alert("Opção invalida.. Escolha uma das opções do Menu: ")
            break
    }
}

