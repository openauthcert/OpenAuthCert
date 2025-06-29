import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Open Authentication Certification Initiative',
  description: 'Open Authentication Certification Initiative',
  base: '/',

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: '',

    nav: [
      { text: 'Docs', link: '/docs/' },
      { text: 'Certified Vendors', link: '/registry/' },
      { text: 'GitHub', link: 'https://github.com/openauthcert' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Certification',
          items: [
            { text: 'Badges', link: '/badges' },
            { text: 'Certified Vendors', link: '/vendors' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/openauthcert' }
    ]
  }
})
