var gulp = require('gulp');
// 引入依赖包
var sass = require('gulp-sass');
gulp.task('sass', function(){
    //sass()方法用于转换sass到css
  return gulp.src('sass/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
});

//Watching Sass files for changes
gulp.task('watch', function(){
    gulp.watch('sass/*.scss', ['sass']); 
    // Other watchers
  })