const prompt = require('prompt-sync')
const css = prompt()

const comando = (input) => {
    let output = []
    while (input != 'sair') {
        output.push(input);
        input = css("Digite a Proprieade Quer Salvar ou Digite Sair(Para finalizar a aplicação): ")
    }
    let reacao = output.sort().join("\n")
    console.log(reacao)
}
comando()