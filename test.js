const pixcnt = require('./index');

['はたらく細胞', 'はたらく細胞 R-18'].forEach(async keyword => {
    console.log(`${keyword}: `, await pixcnt.getCount(keyword));
});

const sessionId = process.env.PIXCNT_SESSION_ID;
if (sessionId) {
    ['はたらく細胞', 'はたらく細胞 R-18'].forEach(async keyword => {
        console.log(`(+session) ${keyword}: `, await pixcnt.getCount(keyword, sessionId));
    });
}