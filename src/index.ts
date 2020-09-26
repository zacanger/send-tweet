/* eslint-disable camelcase */

import Twitter from 'twitter'

const { argv, exit } = process

const help = () => `
  send-tweet
  ----------
  usage: send-tweet 'A tweet!'
`

const consumer_key = process.env.SEND_TWEET_CONSUMER_KEY
const consumer_secret = process.env.SEND_TWEET_CONSUMER_SECRET
const access_token_key = process.env.SEND_TWEET_ACCESS_TOKEN_KEY
const access_token_secret = process.env.SEND_TWEET_ACCESS_TOKEN_SECRET

if (
  !consumer_key ||
  !consumer_secret ||
  !access_token_key ||
  !access_token_secret
) {
  console.log(`
  Please go to apps.twitter.com and click 'Create New App'
  Then set the following environment variables (in your '~/.bashrc' or equivalent):
  SEND_TWEET_CONSUMER_KEY
  SEND_TWEET_CONSUMER_SECRET
  SEND_TWEET_ACCESS_TOKEN_KEY
  SEND_TWEET_ACCESS_TOKEN_SECRET
`)
  exit(0)
}

const auth = {
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret,
}

// @ts-ignore
const client = new Twitter(auth)
const theTweet = argv[2]
if (!theTweet || argv[3]) {
  help()
}

const main = (a: string) =>
  client.post('statuses/update', { status: a }, (err, tweet) => {
    if (err) {
      return console.warn('Error:', err[0].message)
    }
    console.log(`Tweet '${tweet.text}' sent!`)
  })

main(theTweet)
