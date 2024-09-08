/** @type {import('next').NextConfig} */

import { dirname, join } from 'path'

const nextConfig = {
  sassOptions: {
    includePaths: [join(dirname('./'), 'src/sass')],
    prependData: `@import "main.sass"`,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.shopify.com',
        protocol: 'https',
      },
    ],
  },
}

export default nextConfig
