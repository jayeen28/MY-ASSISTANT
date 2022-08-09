require('dotenv').config();
const greet = require('./Functions/greet');
const speakInfo = require('./Functions/speakInfo')

const main = () => {
    greet();
}
main();
