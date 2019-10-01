const gulp = require('gulp'),
    pug = require('gulp-pug');

gulp.task('pug', () => 
    gulp.src('./archivos/*.pug')
        .pipe(pug({
            pretty: true,
        }))
        .pipe(gulp.dest('./salida/'))
);

gulp.task('default', () => {
    gulp.watch('./archivos/*.pug', gulp.series('pug'));
})