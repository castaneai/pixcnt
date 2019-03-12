pixcnt
========
[![npm version](https://badge.fury.io/js/pixcnt.svg)](https://badge.fury.io/js/pixcnt)

pixiv illustration counter

## Getting Started

```javascript
const pixcnt = require('pixcnt');

// mode is 'none', 'safe' or 'r18' (NOTE: mode 'r18' without sessionId always returns 0)
const mode = 'safe';
// [optional] session ID of pixiv 
const sessionId = 'xxxxx_xxxx...';

// count by keyword
const cnt = await pixcnt.countByKeyword('keyword', mode, sessionId);
// count by tag
const cnt = await pixcnt.countByTag('tag', mode, sessionId);
```

## Testing

```sh
export PIXCNT_SESSION_ID=xxxxxxx...
node test.js
```
