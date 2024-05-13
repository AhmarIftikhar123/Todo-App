const gulp = require("gulp");
const sass = require("gulp-sass");
const purgecss = require("gulp-purgecss");

// Compile Sass to CSS
function compileSass() {
  return gulp
    .src("style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
}

// Purge unused CSS
function purgeCSS() {
  return gulp
    .src("style.css")
    .pipe(
      purgecss({
        content: ["*.html", "*.js"],
      })
    )
    .pipe(gulp.dest("dist/css"));
}

// Watch for changes in Sass files
function watch() {
  gulp.watch("style.scss", compileSass);
}

// Export tasks
exports.compileSass = compileSass;
exports.purgeCSS = purgeCSS;
exports.watch = watch;
