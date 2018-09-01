/* import exteral npde modules */ 
const recurse  = require('recursive-readdir');
const {spawn}  = require('child_process');
const   gulp   = require('gulp');
const    fs    = require('fs');

const   str    = require('../cli-helpers/str');
const   shell  = require('../cli-helpers/shell');

class sass {
    static compile(f) {
        let p = f.split('/');
        let rp = p.reverse();
        let fn = rp[0];
        
        rp[0].shift();
        rp[0].join('/');
        
        console.log(rp[0].shift());
        let dist = rp[0]+fn;

        shell.exec('sass', [
            f,
            'dist/'+dist
        ]);
    }
    
    static scan(dir) {
        recurse('./src/'+dir, (err, files) => {
            for(let i = 0; i < files.length; i++) {
                let ext = str.getExt(files[i]);
                
                if(ext == 'scss') {
                    
                    sass.compile(files[i]);
                }
            }
        });
    }
}


gulp.task('sass', () => {
    
    /* Itterate all extra input please */
    for(let i = 0; i < process.argv.length; i++) {
        
        
        let fn   = (process.argv[i]) ? process.argv[i].substring(2) : '';
        let argv = (process.argv[i+1] != undefined) ? process.argv[i+1] : '';
        let args = (argv.indexOf(':') != -1) ? argv.split(':') : argv;
        
        if (typeof sass[fn] == 'function')
            (typeof args == 'string') ? sass[fn](args) : sass[fn].apply(this, args);
    };
});