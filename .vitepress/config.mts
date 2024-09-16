import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MotoSekai",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '产品', link: '/app' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/about':[
        {
          text: '关于',
          items: [
            { text: '关于', link: '/about'},
            { text: '团队介绍', link: '/about/team'},
            { text: '隐私协议', link: '/about/privacy'}
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/UnknownBits' }
    ]
  }
})
