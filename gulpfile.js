var del = require( 'del' );
var gulp = require( 'gulp' );
var templates = require( 'gulp-angular-templatecache' );
var bower = require( 'gulp-bower' );
var concat = require( 'gulp-concat' );
var debug = require( 'gulp-debug' );
var sass = require( 'gulp-sass' );
var sourcemaps = require( 'gulp-sourcemaps' );
var path = require( 'path' );
var _ = require( 'underscore' );

var appDir = './app';
var bowerDir = './resources/bower';
var bundlesDir = './resources/bundles';
var fontsDir = './resources/fonts';
var stylesDir = './resources/styles';
var tmpDir = './tmp';

var templateCache = {
  path : tmpDir,
  filename : 'templates.js',
  options : {
    module : 'templates',
    standalone : true,
    moduleSystem : 'IIFE',
    transformUrl : function(url) {
        return url.replace( path.dirname( url ), '.' );
    }
  }
}

var css = {
  src : [ bowerDir + '/font-awesome/scss/font-awesome.scss', stylesDir + '/bootstrap-import.scss', stylesDir + '/*.scss', appDir + '/**/*.scss' ],
  bootstrap : [ bowerDir + '/bootstrap-sass/assets/stylesheets' ]
}

var html = {
  src : [ appDir + '/**/*.html' ]
}

var js = {
  src : [ appDir + '/**/*.module.js', appDir + '/**/*.js', tmpDir + '/templates.js' ],
  lib : [ bowerDir + '/angular/angular.js', bowerDir + '/angular-ui-router/release/angular-ui-router.js', bowerDir + '/angular-bootstrap/ui-bootstrap-tpls.js', bowerDir + '/angular-loading-bar/build/loading-bar.min.js', bowerDir + '/jquery/dist/jquery.js', bowerDir + '/bootstrap/dist/js/bootstrap.js' ]
}

var fonts = {
  src : [ bowerDir + '/font-awesome/fonts/*' ]
}

var icons = {
  src : [ bowerDir + '/bootstrap-sass/assets/fonts/bootstrap/*' ]
}

var dest = {
  bower : {
    path : bowerDir
  },
  css : {
    path : bundlesDir,
    filename : 'bundle.css'
  },
  js : {
    path : bundlesDir,
    filename : 'bundle.js'
  },
  sourcemaps : {
    path : '../maps'
  },
  fonts : {
    path : fontsDir
  },
  icons : {
    path : fontsDir + '/bootstrap'
  }
}

gulp.task( 'clean', function() {
    return del( dest.css.path, dest.js.path );
} );

gulp.task( 'bower', function() {
    return bower().pipe( gulp.dest( dest.bower.path ) );
} );

gulp.task( 'css', [ 'bower' ], function() {
    var sassStream = sass( {
        includePaths : css.bootstrap
    } );

    return gulp.src( css.src ).pipe( sourcemaps.init() ).pipe( sassStream ).pipe( concat( dest.css.filename ) ).pipe( sourcemaps.write( dest.sourcemaps.path ) ).pipe( gulp.dest( dest.css.path ) );
} );

gulp.task( 'fonts', [ 'bower' ], function() {
    return gulp.src( fonts.src ).pipe( gulp.dest( dest.fonts.path ) );
} );

gulp.task( 'icons', [ 'bower' ], function() {
    return gulp.src( icons.src ).pipe( gulp.dest( dest.icons.path ) );
} );

gulp.task( 'js-templates', [ 'bower' ], function() {
    return gulp.src( html.src ).pipe( templates( templateCache.filename, templateCache.options ) ).pipe( gulp.dest( templateCache.path ) );
} );

gulp.task( 'js-concat', [ 'js-templates' ], function() {
    return gulp.src( _.flatten( [ js.lib, js.src ] ) ).pipe( sourcemaps.init() ).pipe( concat( dest.js.filename ) ).pipe( sourcemaps.write( dest.sourcemaps.path ) ).pipe( gulp.dest( dest.js.path ) );
} );

gulp.task( 'js', [ 'js-concat' ], function() {
    return del( tmpDir );
} );

gulp.task( 'default', [ 'css', 'fonts', 'icons', 'js' ] );
