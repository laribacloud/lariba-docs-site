// Make __VERSION__ available in Node runtime (not just webpack bundles)
globalThis.__VERSION__ = process.env.npm_package_version || '0.1.0'

import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

export default withNextra({
  reactStrictMode: true,

  webpack: (config, { webpack }) => {
    // Also define it for client/server bundles (webpack side)
    config.plugins.push(
      new webpack.DefinePlugin({
        __VERSION__: JSON.stringify(process.env.npm_package_version || '0.1.0')
      })
    )

    // Avoid PackFileCacheStrategy ENOENT cache issues
    config.cache = false

    return config
  }
})
