const say = require('../say/index');
/**
 * This function greets the owner.
 */
const greet = async () => {
    try {
        const res = await new Promise((resolve, reject) => {
            const date = new Date();
            const hours = date.getHours();
            let greet = hours < 12 ? "Good morning." : (hours <= 18 && hours >= 12) ? "Good afternoon." : "Hello sir.";
            say.speak(greet, 'Alex', 1.1, err => {
                if (err) reject(err)
                resolve('Greeted.')
            })
        })
        return res;
    }
    catch (e) {
        throw new Error(e)
    }
}
module.exports = greet;