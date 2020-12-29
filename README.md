# send-tweet

**DEPRECATED**

Super-simple Twitter CLI thing. Just sending a tweet. Literally does nothing else, at all.

[![Support with PayPal](https://img.shields.io/badge/paypal-donate-yellow.png)](https://paypal.me/zacanger) [![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB)

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

[LICENSE](./LICENSE.md)
