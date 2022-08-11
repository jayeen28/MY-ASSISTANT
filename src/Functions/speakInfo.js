const speak = require("./speak");
const axios = require('axios');

const speakInfo = async () => {
    try {
        const d = new Date();
        const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        await speak(`It's ${time}`);
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=23.83402477493982&lon=90.39084380118264&appid=${process.env.weather_api_key}&units=metric`)
        if (data.main?.temp) await speak(`The weather in Dhaka is ${parseInt(data.main.temp)} degrees.`)
    }
    catch (e) {
        throw new Error(e)
    }
}

module.exports = speakInfo;