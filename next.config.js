// const nextConfig = {
//   reactStrictMode: true,
// }
// module.exports = nextConfig

const path = require('path')

module.exports = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/
// });

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'mdx']
// });
