const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const project = 'project';

gulp.task('watch', function () {
    gulp.watch([`${project}/scss/**/*.scss`], ['scss']);
});

gulp.task('scss', function () {
    gulp.src(`${project}/scss/**/*.scss`)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(`${project}/css`));
});

gulp.task('default', ['scss', 'watch']);