const gulp = require('gulp');
const { exec } = require('child_process');

// SASS FILE PATHS
const sassIn = '../src/scss/main.scss'
const sassOut = '../../dist/css/bundle.css';



/* Ensure that sass is installed globally */
gulp.task('sass', () => {
    // execute the sass preprocessor
    exec('sass '+sassIn+' '+sassOut);
});