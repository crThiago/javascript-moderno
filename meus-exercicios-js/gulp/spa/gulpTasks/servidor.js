const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('monitorarMudancas', () => {
    watch('src/**/*.html', () => gulp.star('app.html'))
    watch('src/**/*.scss', () => gulp.star('app.css'))
    watch('src/**/*.js', () => gulp.star('app.js'))
    watch('src/assests/imgs/**/*.*', () => gulp.star('app.imgs'))
})

gulp.task('servidor', ['monitorarMudancas'], () => {
    return gulp.src('build').pipe(webserver({
            livereload: true,
            port: 8080,
            open: true
        }))
})

