const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônomo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    //Pega o que o usuário digita no console
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        //Escreve o que o usuário digitou no console
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}