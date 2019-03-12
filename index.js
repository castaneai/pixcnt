const http = require('request-promise-native');
const cheerio = require('cheerio');

const createSessionCookieJar = (sessionId) => {
    const jar = http.jar();
    jar.setCookie(http.cookie(`PHPSESSID=${sessionId}`), 'http://www.pixiv.net');
    return jar;
};

const countByTag = (tag, mode, sessionId) => {
    return count(tag, 's_tag_full', mode, sessionId);
};

const countByKeyword = (keyword, mode, sessionId) => {
    return count(keyword, 's_tag', mode, sessionId);
};

const count = async (word, searchMode, mode, sessionId) => {
    let url = `https://www.pixiv.net/search.php?s_mode=${searchMode}&word=${encodeURIComponent(word)}`;
    if (mode === 'r18' && !sessionId) {
        return 0;
    }
    if (mode && mode != 'none') {
        url += `&mode=${mode}`;
    }
    const options = sessionId ? {jar: createSessionCookieJar(sessionId)} : {};
    const html = await http.get(url, options);
    const $ = cheerio.load(html);
    return parseInt($('.count-badge').text());
};

module.exports = {
    countByTag: countByTag,
    countByKeyword: countByKeyword,
};
