require('dotenv').config();
const greet = require('./Functions/greet');
const speakInfo = require('./Functions/speakInfo')

const main = async () => {
    try {
        await greet();
        await speakInfo();
    }
    catch {

    }
}
setTimeout(() => main(), 5000)
