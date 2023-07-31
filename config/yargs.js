const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base of multiplication table'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Show table in console'
    })
    .option('li', {
        alias: 'limit',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Limit of numbers to multiply'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw `The base must be a number`;
        }
        return true;
    })
    .check((argv, options) => {
        if (isNaN(argv.limit)) {
            throw `The limit must be a number`;
        }
        return true;
    })
    .argv

module.exports = argv;