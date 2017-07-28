var postcss = require('gulp-postcss');
var gulp = require('gulp');

gulp.task('css', function () {
  return gulp.src('./src/*.css')
    .pipe(postcss())
    .pipe(gulp.dest('./compartments/assets/styles'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.css', ['css']);
});

gulp.task('default', ['css', 'watch']);