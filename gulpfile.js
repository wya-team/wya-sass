const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));

const stripCssComments = require('gulp-strip-css-comments'); 
const autoprefixer = require('gulp-autoprefixer'); 
const cleanCss = require('gulp-clean-css'); 

const paths = {
	css: 'lib',
	dist: 'dist',
	distCss: 'dist/'
};
const srcFiles = {
	css: [
		paths.css + "/*.css",
		paths.css + "/*.scss"
	]
};
const files = {
	css: [
		paths.css + "/**/*.css",
		paths.css + "/**/*.scss"
	]
};

class Compiler {
	// 清洁
	static clean = (opts = {}) => {
		return function clean() {
			return del([ paths.dist ]);
		};
	}

	// css，scss文件
	static styles = (opts = {}) => {
		return function styles() {
			return gulp.src(srcFiles.css)
				.pipe(sass().on('error', sass.logError))
				.pipe(stripCssComments())
				.pipe(autoprefixer({
					cascade: true,
					remove: true
				}))
				.pipe(cleanCss({
					 advanced: false
				}))
				.pipe(gulp.dest(paths.distCss));
		}
	}
}

// build task
const build = gulp.series(
	Compiler.clean(),
	Compiler.styles()
);

// dev task
const dev = gulp.series(
	Compiler.clean(),
	Compiler.styles(),
	function watch() {
		gulp.watch(files.css, Compiler.styles);
	}
);

exports.default = build;
exports.build = build;
exports.dev = dev;
