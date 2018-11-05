const http = require('request-promise-native');
const cheerio = require('cheerio');

const createSessionCookieJar = (sessionId) => {
    const jar = http.jar();
    jar.setCookie(http.cookie(`PHPSESSID=${sessionId}`), 'http://www.pixiv.net');
    return jar;
};

const getCount = async (keyword, sessionId) => {
    const url = 'https://www.pixiv.net/search.php?s_mode=s_tag&word=' + encodeURIComponent(keyword);
    const options = sessionId ? {jar: createSessionCookieJar(sessionId)} : {};
    const html = await http.get(url, options);
    const $ = cheerio.load(html);
    return parseInt($('.count-badge').text());
};

exports.getCount = getCount;