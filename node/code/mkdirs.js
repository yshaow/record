
const mkdirs =require('./mkdirs/index');
const path = require('path');

mkdirs('d1\\demo2');
mkdirs(path.join(__dirname,'2/demo2/3') , error => {console.log(error);});