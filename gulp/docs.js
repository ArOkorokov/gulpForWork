const gulp = require('gulp');

const htmlInclude = require('gulp-file-include');

const sass = require('gulp-sass')(require('sass'));
const webpack = require('webpack-stream');



const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs')



gulp.task('clean',function(done) {
    if(fs.existsSync('./build/')) {
        return gulp
        .src('./build/',{read:false})
        .pipe(clean({force:true}))
    } else {
        console.log('Folder is not found')
        done()
    }
})


gulp.task('html',function() {
    return gulp
            .src('./src/*.html')
            .pipe(htmlInclude({
                prefix: '@@',
                basepath: '@file'
            }))
            .pipe(gulp.dest('./build'))
})


gulp.task('sass', function() {
    return gulp
        .src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/css'))
})

gulp.task('copy', function() {
    return gulp
        .src('./src/img/**/*')
        .pipe(gulp.dest('./build/img/'))
})
gulp.task('fonts', function() {
    return gulp
        .src('./src/fonts/**/*')
        .pipe(gulp.dest('./build/fonts/'))
})

gulp.task('js', function(){
    return gulp
        .src('./src/js/*.js')
        .pipe(webpack(require('.././webpack.config')))
        .pipe(gulp.dest('./build/js/'))
})

gulp.task('webserver', function() {
    return gulp
    .src('./')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});


gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('./src/html_modules/**/*.html', gulp.parallel('html'));
    gulp.watch('./src/img/**/*', gulp.parallel('copy'));
    gulp.watch('./src/fonts/**/*', gulp.parallel('fonts'));
    gulp.watch('./src/js/*.js', gulp.parallel('js'));
})


gulp.task( 'default',
      gulp.series(
      'clean', 
      gulp.parallel('html','sass','copy','fonts','js'),
      gulp.parallel('watch','webserver'),

));