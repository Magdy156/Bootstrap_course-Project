"use strict";

var gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  livereload = require("gulp-livereload");

gulp.task("sass", function () {
  return gulp
    .src("./css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(livereload());
});

gulp.task("sass:watch", function () {
  require("./server");
  livereload.listen();
  gulp.watch("./css/*.scss", gulp.series(["sass"]));
});
