const pixcnt = require('./index');

const runTest = async (word, sessionId) => {
    console.log(`tag [${word}] safe: ${await pixcnt.countByTag(word, 'safe', sessionId)}, r18: ${await pixcnt.countByTag(word, 'r18', sessionId)}`);
    console.log(`kwd [${word}] safe: ${await pixcnt.countByKeyword(word, 'safe', sessionId)}, r18: ${await pixcnt.countByKeyword(word, 'r18', sessionId)}`);
};

(async () => {
    console.log('-------- without sessionId -----------');
    await runTest('はたらく細胞');
    const sessionId = process.env.PIXCNT_SESSION_ID;
    if (sessionId) {
        console.log('-------- with sessionId -----------');
        await runTest('はたらく細胞', sessionId);
    }
})();
