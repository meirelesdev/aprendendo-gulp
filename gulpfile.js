const { src, dest, parallel } = require('gulp')
const rename = require('gulp-rename')
const minifyJS = require('gulp-uglify')
const minifyCSS = require('gulp-uglifycss')
const sass = require('gulp-sass')(require('node-sass'));
const babel = require('gulp-babel')
const cssImport = require('gulp-cssimport')

const babelOptions = {presets: ['@babel/env']}
let publicPath = 'public/assets'
const base = () => {
    return src('src/templates/*.html')
        .pipe(dest('public/'))
}
const javaScript = () => {
    return src('src/js/*.js')
            .pipe(babel(babelOptions))
            .pipe(minifyJS())
            .pipe(rename({extname: '.min.js'}))
            .pipe(dest(`${publicPath}/js/`))
}
const css = () => {
    return src('src/css/*.css')
            .pipe(cssImport())
            .pipe(sass())
            .pipe(minifyCSS())
            .pipe(rename({extname: '.min.css'}))
            .pipe(dest(`${publicPath}/css/`))
}
exports.default = parallel(base, javaScript, css)