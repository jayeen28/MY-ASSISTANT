const say = require('../say/index');
/**
 * This function greets the owner.
 */
const greet = async () => {
    const date = new Date();
    const hours = date.getHours();
    let greet = hours < 12 ? "Good morning" : (hours <= 18 && hours >= 12) ? "Good afternoon" : "Welcome Night Owl";
    say.speak(greet, 'Alex', 1.1);
}
module.exports = greet;