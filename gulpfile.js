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
		open: false
	});
	
	// Detect change -> rebuild TS
	gulp.watch(["src/**.ts"], ["tsbuild"]);
});


/// Copy dependencies libraries from /node_modules into /lib
gulp.task('copy', function() {
	gulp.src([
		'node_modules/esprima/dist/esprima.js', 
		'node_modules/qunitjs/qunit/*'
	]).pipe(gulp.dest('lib'));
})


/// Typescript project from config (to load)
var tsProject = ts.createProject("tsconfig.json", {});

/// Typescript building
gulp.task("tsbuild", function() {
	
	// var tsResult = gulp.src("src/_references.ts")
	// 	.pipe(sourcemaps.init())
	// 	.pipe(ts(tsProject));
	// 	
	// return merge([
	// 	tsResult.dts.pipe(gulp.dest("dist/")),
	// 
	// 	tsResult.js
	// 	.pipe(sourcemaps.write(".", {
	// 		includeContent: false,
	// 		sourceMappingURLPrefix: function(file) {
	// 		    return '/dist/'
	// 		},
	// 		sourceRoot: "../src/"
	// 	}))
	// 	.pipe(gulp.dest("dist/"))
	// ]);
});

/// Default task , setup browser-sync and watch for changes
gulp.task("default", ["copy"], function() {
});
