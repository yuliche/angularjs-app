const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const browserSync = require('browser-sync').create();
const environments = require('gulp-environments');
const concat = require('gulp-concat');
const buffer = require('vinyl-buffer');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const babelify = require('babelify');
const babel = require('gulp-babel');

const development = environments.development;
const production = environments.production;

/** load config file based on enviroment */
const configFile = production() ? "./src/env/prod.js" : "./src/env/dev.js";

gulp.task('lint', function () {
    return gulp.src('./src/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function () {
    return gulp.src(['./src/assets/**/*.js', configFile])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('./public/'));
});

gulp.task('browserify', function () {
    return browserify('./src/app/app.module.js')
        .transform(babelify)
        .bundle()
        .on('error', function (err) {
            console.log('Error : ' + err.message);
        })
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/'))
        .pipe(buffer());
})

gulp.task('scss', function () {
    gulp.src('./src/assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/stylesheets/'));
});

gulp.task('copy', ['browserify', 'scss'], function () {
    gulp.src(['./src/**/*.html', './src/**/*.css'])
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream())
});

gulp.task('build', ['lint', 'scss', 'copy', 'scripts']);

gulp.task('browser-sync', ['build'], function () {
    browserSync.init({
        server: {
            baseDir: "./public",
            routes: {
                "/node_modules": "node_modules"
            }
        },
        browser: "chrome"
    });
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch("./src/**/*.*", ["build"]);
    gulp.watch("./public/**/*.*").on('change', browserSync.reload);
})
