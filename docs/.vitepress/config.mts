import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "Go 语言成长之路：从入门到精通",
    description: "Go 语言成长之路：从入门到精通，本书籍的内容将会涵盖基础知识、进阶技巧和原理剖析等多个方面。",
    head: [
        ['link', {rel: 'icon', type: 'image/png', href: '/go-path-to-mastery-book-logo.jpeg'}],
        [ 'meta', { name: 'google-site-verification', content: '9usIdasQ-ixw53AAdX9Zr03IJp1fdr9PVY1iNODixBQ' } ],
        // [ 'meta', { name: 'baidu-site-verification', content: '' } ],
        ['meta', {name: 'author', content: '陈明勇'}],
        ['meta', {property: 'og:type', content: 'website'}],
        ['meta', {property: 'og:locale', content: 'zh'}],
        ['meta', {property: 'og:title', content: 'Go 语言成长之路：从入门到精通'}],
        ['meta', {property: 'og:site_name', content: 'Go 语言成长之路：从入门到精通'}],
        ['meta', {property: 'og:author', content: '陈明勇'}],
        ['meta', {property: 'og:image', content: '/go-path-to-mastery-book-logo.jpeg'}],
        ['meta', {property: 'og:url', content: '/go-path-to-mastery-book-logo.jpeg'}],
        ['meta', {name: 'baidu-site-verification', content: 'codeva-5DNuMvfSGH'}],
    ],
    themeConfig: {
        nav: [],
        outline: {
            level: [2, 6]
        },
        sidebar: {
            '/book': {
                base: '/book',
                items: [
                    {
                        text: '前言',
                        items: [
                            {text: '本书介绍', link: '/introduction'},
                        ]
                    },
                    {
                        text: '第一章 Go 语言概述',
                        collapsed: true,
                        base: '/book/go',
                        items: [
                            {
                                text: '1.1 Go 语言简介',
                                link: '/go-language-introduction'
                            },
                            {
                                text: '1.2 安装与环境配置',
                                link: '/go-installation'
                            }
                        ]
                    },
                    {
                        text: '第二章 基础语法',
                        base: '/book/go-basic',
                        collapsed: true,
                        items: [

                            {
                                text: '2.1 第一个Go程序：Hello, World!',
                                link: '/hello-world'
                            },
                            {
                                text: '2.2 数据类型'
                            },
                            {
                                text: '2.3 常量与变量'
                            },
                            {
                                text: '2.4 控制结构'
                            },
                            {
                                text: '2.5 函数与方法'
                            },

                        ]
                    },
                    {
                        text: '第三章 数据结构',
                        base: '/book/go-data-structure',
                        collapsed: true,
                        items: [
                            {
                                text: '3.1 数组与切片'
                            },
                            {
                                text: '3.2 映射（map）'
                            },
                            {
                                text: '3.3 结构体与接口'
                            }
                        ]
                    },
                    {
                        text: '第四章 错误处理',
                        base: '/book/go-error',
                        collapsed: true,
                        items: [
                            {
                                text: '3.1 错误的定义与处理',
                            },
                            {
                                text: '3.3 自定义错误类型',
                            },
                            {
                                text: '3.2 panic 与 recover',
                            },
                            {
                                text: '3.4 处理常见错误的最佳实践',
                            }
                        ]

                    },
                    {
                        text: '第四章 并发编程',
                        collapsed: true,
                        items: [
                            {
                                text: '4.1 Goroutine',
                            },
                            {
                                text: '4.2 Channel',
                            }
                        ]
                    },
                    {
                        text: '第五章 标准库',
                    },
                    {
                        text: '第六章 高级特性',
                        collapsed: true,
                        items: [
                            {
                                text: '6.1 Go 中的反射机制'
                            }
                        ]
                    },
                    {
                        text: '第七章 测试与调试',
                        collapsed: true,
                    },
                    {
                        text: '第八章 项目实战',
                        collapsed: true,
                        items: [
                            {
                                text: '8.1 构建 Web 应用'
                            },
                            {
                                text: '8.2 MySQL 数据库操作'
                            }
                        ]
                    },
                    {
                        text: '第九章：原理剖析',
                        collapsed: true,
                    },
                    {
                        text: '目录结构持续更新调整中...',
                        collapsed: true,
                    }
                ]
            }
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/chenmingyong0423/go-path-to-mastery-book'}
        ]
    }
})
