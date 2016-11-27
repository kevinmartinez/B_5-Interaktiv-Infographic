'use strict';

var gulp    = require('gulp');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');

gulp.task('concat', function() {
    gulp.src([
        'src/js/animation.js',
        'src/js/app.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('minifyScripts', function() {
    gulp.src('dist/js/app.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('build', ['concat', 'minifyScripts']);
