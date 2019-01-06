var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');


gulp.task('sass', function(){
  return gulp.src('scss/main.scss')
//sass({outputStyle: 'compressed'}
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css'))
});



gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', gulp.series(['sass']));
  
});