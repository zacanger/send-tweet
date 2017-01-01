#!/usr/bin/env node

console.log('COMING VERY SOON I PROMISE')
process.exit(0)

if (module.parent) {
  console.warn('Please use CLI!')
  process.exit(1)
}

const { homedir } = require('os')
const help = () => `
  send-tweet
  usage: send-tweet 'A tweet!'
`

const userHome = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE || homedir()
const { readFileSync, statSync } = require('fs')
const fileName = '.send-tweet.json'
const fileLoc = `${userHome}/${fileName}`

try {
  statSync(fileLoc)
} catch (e) {
  console.warn(`
    Please put access_token_key and access_token_secret in
    ~/.send-tweet.json
  `)
  process.exit(1)
}

const fileCont = readFileSync(fileLoc)
const { access_token_key, access_token_secret } = JSON.parse(fileCont)
const Twitter = require('twitter')
const auth = {
  consumer_key: 'mqbbtwLkNkRgXFfjv2PV3EG1R'
, consumer_secret: '7kximrfr2NQy2V9I9hAm6WR2jvjwj7HBLYwaJuSRJ3zwFybAdU'
, access_token_key
, access_token_secret
}
const client = new Twitter(auth)
const theTweet = process.argv[2]
if (!theTweet || process.argv[3]) return help()

const main = (a) =>
  client.post('statuses/update', { status: a }, (err, tweet, res) => {
    if (err) return console.warn('Error:', err[0].message)
    console.log(`Tweet '${tweet.text}' sent!`)
  })

main(theTweet)
