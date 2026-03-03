import promptSync from "prompt-sync"
const prompt = promptSync()

let op: string

let cotação: number = 5.0

do{
    console.log("OPÇÕES:")
    console.log("[1] - Converter BRL para USD")
    console.log("[2] - Converter USD para BRL")
    console.log("[3] - Alterar a cotação do dólar")
    console.log("[0] - Sair")
    op = prompt("Desejo a opção:")
    switch(op){
        case '1':{
            console.log("[1]")
            break
        }
        case '2':{
            console.log("[2]")
            break
        }
        case '3':{
            console.log("[3]")
            break
        }
        case '0':{
            break
        }
        default:{
            console.log("Opção invalida")
        }
    }
}while(op!='0')