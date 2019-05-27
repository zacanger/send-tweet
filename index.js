#!/usr/bin/env node

/* eslint-disable camelcase */

const { argv, exit } = process

if (module.parent) {
  console.warn('Please install globally! `npm i -g send-tweet`')
  exit(1)
}

const help = () => `
  send-tweet
  ----------
  usage: send-tweet 'A tweet!'
`

const consumer_key = process.env.SEND_TWEET_CONSUMER_KEY
const consumer_secret = process.env.SEND_TWEET_CONSUMER_SECRET
const access_token_key = process.env.SEND_TWEET_ACCESS_TOKEN_KEY
const access_token_secret = process.env.SEND_TWEET_ACCESS_TOKEN_SECRET

if (!consumer_key || !consumer_secret || !access_token_key || !access_token_secret) {
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

const Twitter = require('twitter')
const auth = {
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret
}

const client = new Twitter(auth)
const theTweet = argv[2]
if (!theTweet || argv[3]) help()

const main = (a) =>
  client.post('statuses/update', { status: a }, (err, tweet) => {
    if (err) return console.warn('Error:', err[0].message)
    console.log(`Tweet '${tweet.text}' sent!`)
  })

main(theTweet)
