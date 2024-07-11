import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Go 语言成长之路：从入门到精通",
  description: "Go 语言成长之路：从入门到精通，本书籍的内容将会涵盖基础知识、进阶技巧和原理剖析等多个方面。",
  head: [
    // ['link', { rel: 'icon', type: 'image/png', href: '' }],
    // [ 'meta', { name: 'google-site-verification', content: '' } ],
    // [ 'meta', { name: 'baidu-site-verification', content: '' } ],
    [ 'meta', { name: 'author', content: '陈明勇' } ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh' }],
    ['meta', { property: 'og:title', content: 'Go 语言成长之路：从入门到精通' }],
    ['meta', { property: 'og:site_name', content: 'Go 语言成长之路：从入门到精通' }],
    ['meta', { property: 'og:author', content: '陈明勇' }],
    // ['meta', { property: 'og:image', content: '' }],
    // ['meta', { property: 'og:url', content: '' }],
  ],
  themeConfig: {
    nav: [],

    sidebar: [
      { text: '介绍', link: '/introduction'},
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenmingyong0423/go-path-to-mastery-book' }
    ]
  }
})
