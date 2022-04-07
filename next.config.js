// const nextConfig = {
//   reactStrictMode: true,
// }
// module.exports = nextConfig

const path = require('path')

module.exports = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  },
  reactStrictMode: true,
}

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/
// });

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'mdx']
// });
