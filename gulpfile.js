const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename')


const styles = () => {
  return gulp.src('source/sass/style.scss')
  .pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(sass())
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemap.write('.'))
  .pipe(gulp.dest('source/css'))
}

exports.styles = styles;
