const { people, ages } = require('./people').default;

console.log(people, ages);

const os = require('os');

console.log(os.platform(), os.homedir());
