import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Lariba Cloud</span>,
  project: { link: 'https://github.com/laribacloud' },
  docsRepositoryBase: 'https://github.com/laribacloud/lariba-docs-site/blob/main',
  sidebar: { defaultMenuCollapseLevel: 1 },
  footer: { text: `MIT ${new Date().getFullYear()} © Lariba Cloud.` }
}

export default config
