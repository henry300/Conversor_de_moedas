import promptSync from "prompt-sync"
const prompt = promptSync()

let op: string
let cotacao: number = 5.0

do {
    console.log("OPÇÕES:")
    console.log("[1] - Converter BRL para USD.")
    console.log("[2] - Converter USD para BRL.")
    console.log("[3] - Alterar a cotação do dólar.")
    console.log("[0] - Sair.")
    op = prompt("Opção:")
    switch(op){
        case '1':{
            let vBRL: number = Number(prompt("Valor em BRL:"))
            let vUSD: number = vBRL / cotacao
            console.log(`o valor em USD é: ${vUSD}`)
            break
        }
        case '2':{
            let vUSD: number = Number(prompt("Valor em USD:"))
            let vBRL: number = vUSD * cotacao
            console.log(`o valor em BRL é: ${vBRL}`)
            break
        }
        case '3':{
            cotacao = Number(prompt("A nova cotação será:"))
            console.log(`A nova cotação do dólar é: ${cotacao}`)
            break
        }
        case '0':{
            break
        }
        default:{
            console.log("Opção invalida")
        }
    }
} while(op!='0')