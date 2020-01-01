const withSass = require("@zeit/next-sass");
const withFonts = require('nextjs-fonts');
console.log(process.env.NODE_ENV)
module.exports =  withFonts(withSass({
  assetPrefix: process.env.NODE_ENV === 'production' ? '/walmart-demo' : '',
}))

