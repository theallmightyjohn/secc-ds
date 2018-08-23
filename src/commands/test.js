/* import exteral npde modules */ 
const { exec } = require('child_process');
const   gulp   = require('gulp');
const    fs    = require('fs');

class test {
    
}


gulp.task('test', () => {
    
    /* Itterate all extra input please */
    for(let i = 0; i < process.argv.length; i++) {
        
        
        let fn   = (process.argv[i]) ? process.argv[i].substring(2) : '';
        let argv = (process.argv[i+1] != undefined) ? process.argv[i+1] : '';
        let args = (argv.indexOf(':') != -1) ? argv.split(':') : argv;
        
        if (typeof test[fn] == 'function')
            (typeof args == 'string') ? test[fn](args) : test[fn].apply(this, args);
    };
});