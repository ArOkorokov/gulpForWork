const gulp = require('gulp');

require('./gulp/dev');
require('./gulp/docs');

gulp.task( 'docs',
      gulp.series(
      'clean', 
      gulp.parallel('html','sass','copy','fonts','js','icons'),
      gulp.parallel('watch','webserver'),

));


gulp.task( 'dev',
      gulp.series(
      'clean:dev', 
      gulp.parallel('html:dev','sass:dev','copy:dev','fonts:dev','js:dev','icons:dev'),
      gulp.series('webserver:dev'),

));