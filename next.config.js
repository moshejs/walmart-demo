const withSass = require("@zeit/next-sass");
const withFonts = require('nextjs-fonts');

module.exports =  withFonts(withSass({
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://moshejs.github.io/walmart-demo/' : '',
  generateBuildId: async () => 'current',
}))

