/**
 * Created by chenbei on 16/2/2.
 */
var gulp=require('gulp');
var webpack=require('gulp-webpack');
var del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    es = require('event-stream'),
    revReplace = require('gulp-rev-replace'),
    gulpSequence = require('gulp-sequence');


gulp.task('clean', function () {
    return del.sync(['./build']);
});
gulp.task('defaultUat',function(){
    return gulp.src('./app.js')
      .pipe(webpack(require('./webpack.uat.js')))
      .pipe(gulp.dest('build/'));
});
gulp.task('defaultPro',function(){
    return gulp.src('./app.js')
        .pipe(webpack(require('./webpack.pro.js')))
        .pipe(gulp.dest('build/'));
});

gulp.task('usemin', function () {
    return gulp.src(['./pindex.html'])
        .pipe(usemin({
            js: [/*uglify(),*/ rev()]
        }))
        .pipe(gulp.dest('./build/'));
});
gulp.task('contentImg', function () {
    var img = gulp.src(['./content/describe/*/*.{png,jpg,gif,ico}'])
        .pipe(rev())
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('./build/content/describe'));
    var manifest = gulp.src('./build/rev-manifest.json');
    return es.merge(img, manifest)
        .pipe(rev.manifest())
        .pipe(gulp.dest('./build'));
});
gulp.task('revContent', function () {
    var manifest = gulp.src('./build/rev-manifest.json');
    return gulp.src(['./build/*.js'])
        .pipe(revReplace({
            manifest: manifest
        }))
        .pipe(gulp.dest('./build/'));
});
gulp.task('uat', gulpSequence('clean', 'defaultUat', 'usemin', 'contentImg','revContent'));
gulp.task('pro', gulpSequence('clean', 'defaultPro', 'usemin', 'contentImg','revContent'));