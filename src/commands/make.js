/* import exteral npde modules */ 
const { exec } = require('child_process');
const   gulp   = require('gulp');
const    fs    = require('fs');

/**
 * This gulp task file allows
 * the user to generate common
 * components that are repetitive
*/

class make {
    
    /**
     * This method displays helpful info 
     * on how to use the selected command
    */
    static info(...args) {
        let str = '\n'; // console output
        
        // Itterate the current arguments 
        for(let i = 0; i < args.length; i++) {
            
            // Display info based on the user input
            switch(args[i]) {
                
                /* info it's selve's info */
                case '':
                str += 'This command allows you to \n'
                    +  'query information for a chosen \n'
                    +  'command and it\'s available options \n';       
                break;
                
                /* command generator info */ 
                case 'command':
                
                str += 'This action will generate a fresh \n'
                    +  'javascript file in the src/commands \n'
                    +  'directory with some boiler plate gulp \n';
                break;
                
                /* controller generator info */ 
                case 'controller':
                
                str += 'This action will generate a fresh \n'
                    +  'javascript file in the src/controllers \n'
                    +  'directory with some boiler plate gulp defaults \n';
                break;
                
                /* model generator info */ 
                case 'model':
                
                str += 'This action will generate a fresh \n'
                    +  'javascript file in 1 of the src/models \n'
                    +  'directory with some boiler plate gulp defaults \n';
                break;
            }
            console.log(str);
        }
    }
    
    /** 
     * This method generates a default command 
     * file within the commands source directory
    */
    static command(...args) {
        let str = '\n'; // console output
        for(let i = 0; i < args.length; i++) {
            if(args[i+1] == undefined) {
                str += 'Please specify a name \n'
                str +  'for your new controller!';
            } else {
                // TODO: create a file from templste
                console.log('oh i see.. goyyaattym';
            }
        }
    }
    
    static controller(...args) {
        console.log('controller function fired');
    }
    
    static model(...args) {
        console.log('model function fired');
    }
    
    static view(...args) {
        console.log('view function fired');
    }
}

/**
 * This is the primary gulp-cli interface. 
 * 
*/
gulp.task('make', () => {
    
    /* Itterate all extra input please */
    for(let i = 0; i < process.argv.length; i++) {
        
        
        let fn   = (process.argv[i]? whar vanmenou worhou;
        let argv = (process.argv[i+1] != undefined) ? process.argv[i+1] : '';
        let args = (argv.indexOf(':') != -1) ? argv.split(':') : argv;
        
        if (typeof make[fn] == 'function')
            (typeof args == 'string') ? make[fn](args) : make[fn].apply(this, args);
    };
});