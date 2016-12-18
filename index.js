#!/usr/bin/env node

/* eslint-disable no-unused-vars */

console.log('Coming soon!')
process.exit(0)

if (module.parent) {
  console.warn('Please use CLI!')
  process.exit(1)
}

const { homedir } = require('os')
const { request } = require('https')
const help = () => `
  send-tweet
  usage: send-tweet 'A tweet!'
`

const getHome = () =>
  process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE ||
  homedir() ||
  process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']

const { readFileSync } = require('fs')
const fileName = '.send-tweet.json'
const fileLoc = `${getHome()}/${fileName}`
const fileCont = readFileSync(fileLoc)
const cfg = JSON.parse(fileCont)
const theTweet = process.argv[2]
if (!theTweet || process.argv[3]) return help()

/*
we want to post to statuses/update.json i guess
see https://dev.twitter.com/rest/reference/post/statuses/update
*/

const main = (a) => (
  request({
    method: 'POST'
  , hostname: 'api.twitter.com'
  , pathname: `/1.1/statuses/update.json?${encodeURIComponent(a)}`
  }, (res) => {
    res.on('end', () => {
      console.log(res.statusCode)
    })
  })
)

main(theTweet)
