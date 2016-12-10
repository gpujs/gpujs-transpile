var gulp = require("gulp");
var ts = require("gulp-typescript");
var browserSync = require("browser-sync");
var merge = require("merge2");
var sourcemaps = require("gulp-sourcemaps")

/// The browser sync prototyping
gulp.task("bsync", function(){
	// Syncs browser
	browserSync.init({
		server: {
			baseDir: "./"
		},
		open: true
	});

	// Detect change -> rebuild TS
	gulp.watch(["src/**.ts"], ["tsbuild"]);
});

/// Copy dependencies libraries from /node_modules into /lib
gulp.task('copy', function() {
	gulp.src([
		'node_modules/esprima/dist/esprima.js',
		'node_modules/mocha/mocha.js',
		'node_modules/mocha/mocha.css',
		'node_modules/chai/chai.js',
		'node_modules/requirejs/require.js'
	]).pipe(gulp.dest('lib'));
});

/// Typescript building
gulp.task("tsbuild", function() {
	// Typescript project from config (to load)
	return gulp.src('src/**/*.ts')
		 .pipe(ts({
			  noImplicitAny: true,
			  out: 'gpujs-transpile.js'
		 }))
		 .pipe(gulp.dest('dist'));
});

/// Default task , setup browser-sync and watch for changes
gulp.task("default", ["copy", "bsync"], function() {
});
