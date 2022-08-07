const say = require('say');
/**
 * This function greets the owner.
 */
const greet = async () => {
    const date = new Date();
    const hours = date.getHours();
    let greet = hours < 12 ? "Morning" : (hours <= 18 && hours >= 12) ? "Afternoon" : "Night";
    say.speak(`Good ${greet}, ${process.env.OWNER_NAME}`, 'Cellos', 1)
}
module.exports = greet;