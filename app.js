const { data } = require('./data');
const { count, filter } = require('./utils');

let commands = process.argv.length > 2 ? process.argv.slice(2) : [];

const filterFlag = '--filter=';
const counterFlag = '--count';

/**
 * loop commands array and call filter function with flag if --filter exist
 * call count function if --count exist
 */
commands.forEach(command => {
    if (command.startsWith(filterFlag)) {
        const criterea = command.replace(filterFlag, "");
        filter(criterea, data);
    }
    if (command === counterFlag) count(data);
});
