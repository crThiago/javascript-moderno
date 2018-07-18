const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence') // responsável por execultar arquivos de forma sequencial

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if (util.env.production) {
        sequence('deps', 'app')
        // gulp.start('deps', 'app') // execulta arquivos de forma paralela
    } else {
        sequence('deps', 'app', 'servidor')
        // gulp.start('deps', 'app', 'servidor') 
    }
})