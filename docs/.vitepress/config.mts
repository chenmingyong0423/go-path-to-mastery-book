import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "Go 语言成长之路：从入门到精通",
    description: "Go 语言成长之路：从入门到精通，本书籍的内容将会涵盖基础知识、进阶技巧和原理剖析等多个方面。",
    head: [
        ['link', {rel: 'icon', type: 'image/png', href: '/go-path-to-mastery-book-logo.png'}],
        // [ 'meta', { name: 'google-site-verification', content: '' } ],
        // [ 'meta', { name: 'baidu-site-verification', content: '' } ],
        ['meta', {name: 'author', content: '陈明勇'}],
        ['meta', {property: 'og:type', content: 'website'}],
        ['meta', {property: 'og:locale', content: 'zh'}],
        ['meta', {property: 'og:title', content: 'Go 语言成长之路：从入门到精通'}],
        ['meta', {property: 'og:site_name', content: 'Go 语言成长之路：从入门到精通'}],
        ['meta', {property: 'og:author', content: '陈明勇'}],
        ['meta', {property: 'og:image', content: '/go-path-to-mastery-book-logo.png'}],
        ['meta', {property: 'og:url', content: '/go-path-to-mastery-book-logo.png'}],
    ],
    themeConfig: {
        nav: [],

        sidebar: [
            {
                text: '前言',
                items: [
                    {text: '本书介绍', link: '/introduction'},
                ]
            },
            {
                text: '第一部分：Go 语言基础',
                items: [
                    {
                        text: 'Go 语言简介',
                        items: [
                            {
                                text: 'Go 语言介绍',
                                link: '/introduction/go-language-introduction'
                            },
                        ]
                    },
                    {
                        text: '入门 Go 语言',
                        items: [
                            {
                                text: '安装与配置环境',
                            },
                            {
                                text: 'Hello World 程序',
                            },
                            {
                                text: 'Go 程序的基本结构'
                            }
                        ]
                    },
                    {
                        text: '基本语法',
                        collapsed: false,
                        items: [

                            {
                                text: '数据类型',
                            },
                            {
                                text: '常量与变量',
                            },
                            {
                                text: '控制结构（条件语句、循环'
                            }
                        ]
                    },
                    {
                        text: '函数与包',
                        items: [
                            {
                                text: '函数定义与调用',
                            },
                            {
                                text: '包的导入与使用',
                            },
                            {
                                text: '错误处理和Panic/Recover',
                            }
                        ]
                    },
                    {
                        text: '结构体与接口',
                        items: [
                            {
                                text: '定义结构体',
                            },
                            {
                                text: '方法与接收器',
                            },
                            {
                                text: '接口的定义与实现',
                            }
                        ]
                    }
                ]
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/chenmingyong0423/go-path-to-mastery-book'}
        ]
    }
})
