/** @type {import('next').NextConfig} */

import { dirname, join } from 'path'

const nextConfig = {
  sassOptions: {
    includePaths: [join(dirname('./'), 'src/sass')],
    prependData: `@import "main.sass"`,
  },
}

export default nextConfig
