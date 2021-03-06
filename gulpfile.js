const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');

gulp.task('sass', ()=> {
    return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer('last 3 versions'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', ()=> {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', gulp.parallel('browser-sync', 'sass', ()=> {
    gulp.watch('./sass/**/*.scss', {delay: 5}, gulp.series('sass'));
    gulp.watch("*.html").on('change', browserSync.reload)
    gulp.watch("./js/**/*.js").on('change', browserSync.reload)
}));