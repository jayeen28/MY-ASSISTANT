const say = require('../say/index');

const speak = async (text) => {
    await new Promise((resolve, reject) => say.speak(text, 'Celos', 1.1, err => {
        if (err) reject(err);
        resolve('speaked')
    }))
}

module.exports = speak;