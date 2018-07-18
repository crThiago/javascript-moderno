const gulp = require('gulp')

// tarefa padrão que será executada
gulp.task('default', () =>{
    gulp.start('copiar', 'fim')
})

//task('nome da tarefa', 
//     (opcional) tasks que serão executadas antes, 
//     (opcional) função)
gulp.task('copiar', ['antesExecutar1', 'antesExecutar2'], () => {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        // .pipe(funcao1())
        // .pipe(funcao2())
        .pipe(gulp.dest('pastaB')) // cria pasta e copia arquivo para pasta
})

gulp.task('antesExecutar1', () => {
    console.log('Antes 1!!!')
})

gulp.task('antesExecutar2', () => {
    console.log('Antes 2!!!')
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('Fim 1!!!')
})

gulp.task('fim2', () => {
    console.log('Fim 2!!!')
})
