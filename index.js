const axios = require('axios');
const {requestLogger,responseLogger} = require('axios-logger');

const request = axios.create({
    baseURL: `https://bing.com/baseUrlSubstring`,
});

request.interceptors.request.use(requestLogger);
request.interceptors.response.use(responseLogger);

async function run () {
    const response = await request.get('/additionalPart');
    console.log('response');
}

(run)();