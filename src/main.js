/****************************/
/* import vendors (unnamed) */
/****************************/
import 'bootstrap';

/****************************/
/*  import vendors (named)  */
/****************************/
import $ from 'jquery';

// register singletons for 
// dependency injection
const dependancies = {
  
};

//*************************/
/*  import controllers   */
/*************************/
const controllers = app.ListFolder('./src/controllers');
for(let i = 0; i < controllers.length; i++) {
    const controller = controllers[i].split('.');
    controller = controller[0];
    controller = require('./controllers/'+controller);
    app[controller] = new controller(dependancies);
}

/*******************/
/*  import models  */
/*******************/
import jace from './models/filters/JACE';

// execute jQueryAnimateCssExtender
jace($);


/***********************/
/*  initialize views   */
/***********************/

