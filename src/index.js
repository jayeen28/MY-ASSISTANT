require('dotenv').config();
const greet = require('./Functions/greet');
const speakInfo = require('./Functions/speakInfo')

const main = async () => {
    try {
        await greet();
        await speakInfo();
    }
    catch (e) {
        console.log(e)
    }
}
main();
// setTimeout(() => main(), 5000)
