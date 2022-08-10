const say = require('../say/index');

const speakInfo = async () => {
    try {
        const d = new Date();
        const hour = d.getHours();
        const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        await new Promise((resolve, reject) => say.speak(`It's ${time}`, 'Alex', 1.1, err => {
            if (err) reject(err);
            resolve('Time said')
        }))
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        if (hour < 15) say.speak(`Today is ${days[d.getDay()]}.`);
    }
    catch (e) {
        throw new Error(e)
    }
}

module.exports = speakInfo;