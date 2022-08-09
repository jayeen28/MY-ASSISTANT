const say = require('../say/index');

const speakInfo = async () => {
    const d = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    say.speak(`Today is ${days[d.getDay()]}.`);
}

module.exports = speakInfo;