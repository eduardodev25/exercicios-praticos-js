let alunos = []
let somaMedias = 0


for (let i = 0; i < 2; i++) {
    let nome = prompt("👉 Informe o nome do aluno:").toLowerCase().trim()

    alert(`Olá, ${nome} , Por favor informe suas notas: `)
    let nota1 = parseFloat(prompt(`Digite a 1ª nota de ${nome}:`))
    let nota2 = parseFloat(prompt(`Digite a 2ª nota de ${nome}:`))
    let nota3 = parseFloat(prompt(`Digite a 3ª nota de ${nome}:`))

    let media = (nota1 + nota2 + nota3) / 3
    let situacao = "reprovado"

    if (media >= 7) {
        situacao = "aprovado"
    }

    else if (media >= 5 && media <= 7) {
        situacao = "recuperacao"
    }
    else if (media < 5) {
        situacao = "reprovado"
    }
    let aluno = {
        nome: nome,
        media: media,
        situacao: situacao
    }
    alunos.push(aluno)

    somaMedias += media;    
}
let relatorio = "📋 RELATÓRIO DA TURMA 📋\n\n"
for (let aluno of alunos) {
    relatorio += `👤 Aluno: ${aluno.nome} | 📊 Média: ${aluno.media.toFixed(2)} | 📢 Situação: ${aluno.situacao}\n`
}
relatorio += "\n🎯 Média geral da turma: " + somaMedias.toFixed(2)

alert(relatorio)