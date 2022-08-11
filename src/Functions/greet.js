const say = require('../say/index');
const speak = require('./speak');
/**
 * This function greets the owner.
 */
const greet = async () => {
    try {
        const date = new Date();
        const hours = date.getHours();
        let greet = (hours < 12 && hours > 3) ? "Good morning." : (hours <= 18 && hours >= 12) ? "Good afternoon." : "Hello sir.";
        await speak(greet)
    }
    catch (e) {
        throw new Error(e)
    }
}
module.exports = greet;