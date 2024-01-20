const gulp = require('gulp');

const htmlInclude = require('gulp-file-include');

const sass = require('gulp-sass')(require('sass'));
var csso = require('gulp-csso');

const webpack = require('webpack-stream');



const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs')



gulp.task('clean:dev',function(done) {
    if(fs.existsSync('./dist/')) {
        return gulp
        .src('./dist/',{read:false})
        .pipe(clean({force:true}))
    } else {
        console.log('Folder is not found')
        done()
    }
})


gulp.task('html:dev',function() {
    return gulp
            .src('./src/*.html')
            .pipe(htmlInclude({
                prefix: '@@',
                basepath: '@file'
            }))
            .pipe(gulp.dest('./dist'))
})


gulp.task('sass:dev', function() {
    return gulp
        .src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('copy:dev', function() {
    return gulp
        .src('./src/img/**/*')
        .pipe(gulp.dest('./dist/img/'))
})
gulp.task('fonts:dev', function() {
    return gulp
        .src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts/'))
})

gulp.task('js:dev', function(){
    return gulp
        .src('./src/js/*.js')
        .pipe(webpack(require('.././webpack.config')))
        .pipe(gulp.dest('./dist/js/'))
})

gulp.task('webserver:dev', function() {
    return gulp
    .src('./')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

