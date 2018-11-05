pixcnt
========
[![npm version](https://badge.fury.io/js/pixcnt.svg)](https://badge.fury.io/js/pixcnt)

pixiv illustration counter

## Getting Started

```javascript
const pixcnt = require('pixcnt');
const cnt = await pixcnt.getCount('keyword');

// or provides sessionID
const cnt = await pixcnt.getCount('keyword', pixivSessionId);
```

## Testing

```sh
export PIXCNT_SESSION_ID=xxxxxxx...
node test.js
```
