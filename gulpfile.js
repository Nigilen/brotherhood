const gulp = require('gulp');
const concat = require('gulp-concat-css');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mediaquery = require('postcss-combine-media-query');
const cssnano = require('cssnano');
const htmlMinify = require('html-minifier');


function html() {
	const options = {
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      sortClassName: true,
      useShortDoctype: true,
      collapseWhitespace: true,
      minifyCSS: true,
      keepClosingSlash: true
  };
  return gulp.src('src/**/*.html')
    .pipe(plumber())
		.on('data', function(file) {
      const buferFile = Buffer.from(htmlMinify.minify(file.contents.toString(), options));
      return file.contents = buferFile;
    })
    .pipe(gulp.dest('dist/'))
}

exports.html = html;


function css() {
	const plugins = [
    autoprefixer(),
    mediaquery(),
		cssnano()
	];
  return gulp.src('src/**/*.css')
    .pipe(plumber())
    .pipe(concat('styles.css'))
		.pipe(postcss(plugins))
    .pipe(gulp.dest('dist/'))
}

exports.css = css;

function js() {
  return gulp.src('src/**/*.js')
            .pipe(gulp.dest('dist/'))
}

exports.js = js;

function clean() {
  return del('dist');
}

exports.clean = clean;


function images() {
  return gulp.src('src/images/*.{jpg,png,svg,gif,ico,webp,avif}', {encoding: false})
            .pipe(gulp.dest('dist/images'))
}

exports.images = images;

function otherFiles() {
  return gulp.src('src/theory/*.md', {encoding: false})
            .pipe(gulp.dest('dist/theory'))
}
exports.otherFiles = otherFiles;

function fonts() {
  return gulp.src('src/fonts/*.{woff,woff2,ttf,eot}', {encoding: false})
            .pipe(gulp.dest('dist/fonts'))
}

exports.fonts = fonts;

function watchFiles() {
  gulp.watch(['src/**/*.html'], html);
  gulp.watch(['src/**/*.css'], css);
  gulp.watch(['src/**/*.js'], js);
  gulp.watch(['src/images/*.{jpg,png,svg,gif,ico,webp,avif}'], images);
}

function serve() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
}


const build = gulp.series(clean, gulp.parallel(html, css, otherFiles, images, fonts, js));

exports.build = build;

const watchapp = gulp.parallel(build, watchFiles, serve);

exports.default = watchapp;