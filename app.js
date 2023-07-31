const argv = require('./config/yargs');
require('colors');
const { createdFile } = require('./helpers/multiplicate');

const {b, l, li} = argv;
    
console.clear();

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split('=');

createdFile(b, l, li)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));



