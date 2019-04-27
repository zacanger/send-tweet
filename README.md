# send-tweet

Super-simple Twitter CLI thing.

Just sending a tweet. Literally does nothing else, at all.

--------

## Installation:

`npm i -g send-tweet`

## Usage:

First go [here](https://apps.twitter.com) and click `Create New App`.

Put the keys in your `~/.bashrc` or equivalent:

```
export SEND_TWEET_CONSUMER_KEY=''
export SEND_TWEET_CONSUMER_SECRET=''
export SEND_TWEET_ACCESS_TOKEN_KEY=''
export SEND_TWEET_ACCESS_TOKEN_SECRET=''
```

(Fill in those empty quotes).

Then `. ~/.bashrc` to reload your environment variables (or `zshrc`, or whatever).

Then: `send-tweet "Sending a tweet!"`

## Patreon Sponsors

[![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger)

This project is sponsored on [Patreon](https://www.patreon.com/zacanger) by:

* [Keeley Hammond](https://github.com/VerteDinde)

## License:

[MIT](./LICENSE.md)
