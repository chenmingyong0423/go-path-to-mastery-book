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
        outline: {
            level: [2, 6]
        },
        sidebar:{
            '/book': {
                base: '/book',
                items:  [
                    {
                        text: '前言',
                        items: [
                            {text: '本书介绍', link: '/introduction'},
                        ]
                    },
                    {
                        text: '第一部分：Go 语言基础',
                        base: '/book/go-basic',
                        items: [
                            {
                                text: '1.1 Go 语言简介',
                                collapsed: true,
                                items: [
                                    {
                                        text: '1.1.1 Go 语言介绍',
                                        link: '/go-language-introduction'
                                    },
                                ]
                            },
                            {
                                text: '1.2 入门 Go 语言',
                                collapsed: true,
                                items: [
                                    {
                                        text: '1.2.1 安装与配置环境',
                                        link: '/go-installation',
                                    },
                                    {
                                        text: '1.2.2 Hello World 程序',
                                        link: '/hello-world'
                                    },
                                    {
                                        text: '1.2.3 Go 程序的基本结构'
                                    },
                                    {
                                        text: "1.2.4 Go Modules 管理依赖"
                                    }
                                ]
                            },
                            {
                                text: '1.3 基本语法',
                                collapsed: true,
                                items: [
                                    {
                                        text: '1.3.1 数据类型',
                                    },
                                    {
                                        text: '1.3.2 常量与变量',
                                    },
                                    {
                                        text: '1.3.3 控制结构（条件语句、循环）'
                                    },
                                    {
                                        text: '1.3.4 切片与数组',
                                    },
                                    {
                                        text: '1.3.5 映射（map）',
                                    }
                                ]
                            },
                            {
                                text: '1.4 函数与包',
                                collapsed: true,
                                items: [
                                    {
                                        text: '1.4.1 函数定义与调用',
                                    },
                                    {
                                        text: '1.4.2 包的导入与使用',
                                    },
                                    {
                                        text: '1.4.3 错误处理和Panic/Recover',
                                    }
                                ]
                            },
                            {
                                text: '1.5 结构体与接口',
                                collapsed: true,
                                items: [
                                    {
                                        text: '1.5.1 定义结构体',
                                    },
                                    {
                                        text: '1.5.2 方法与接收器',
                                    },
                                    {
                                        text: '1.5.3 接口的定义与实现',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: '第二部分：Go 语言进阶',
                        items: [
                            {
                                text: '2.1 Go 并发编程',
                                collapsed: true,
                                items: [
                                    { text: '2.1.1 Goroutine 的基础概念与使用' },
                                    { text: '2.1.2 通道（Channel）与数据传递' },
                                    { text: '2.1.3 Select 语句' },
                                    { text: '2.1.4 并发中的同步与互斥（sync 包）' },
                                    { text: '2.1.5 Context 上下文管理' }
                                ]
                            },
                            {
                                text: '2.2 Go 内存管理与性能优化',
                                collapsed: true,
                                items: [
                                    { text: '2.2.1 内存分配与垃圾回收机制' },
                                    { text: '2.2.2 内存剖析与性能优化' },
                                    { text: '2.2.3 基准测试与性能测试（testing 包）' },
                                    { text: '2.2.4 Go 的逃逸分析' }
                                ]
                            },
                            {
                                text: '2.3 Go 标准库详解',
                                collapsed: true,
                                items: [
                                    { text: '2.3.1 常用标准库概述' },
                                    { text: '2.3.2 fmt、strings、time、errors 包使用' },
                                    { text: '2.3.3 net/http 网络库详解' },
                                    { text: '2.3.4 文件与 I/O 操作' }
                                ]
                            },
                            {
                                text: '2.4 Go 语言工具链',
                                collapsed: true,
                                items: [
                                    { text: '2.4.1 Go Modules 依赖管理' },
                                    { text: '2.4.2 gofmt 和 lint 代码格式化与检查' },
                                    { text: '2.4.3 性能分析与调优（pprof、trace）' }
                                ]
                            }
                        ]
                    },
                    {
                        text: '第三部分：Go 语言高级特性',
                        items: [
                            {
                                text: '3.1 泛型编程（Go 1.18+）',
                                collapsed: true,
                                items: [
                                    { text: '3.1.1 泛型基础概念' },
                                    { text: '3.1.2 泛型函数与泛型类型' },
                                    { text: '3.1.3 泛型应用场景及实践' }
                                ]
                            },
                            {
                                text: '3.2 Go 中的反射机制',
                                collapsed: true,
                                items: [
                                    { text: '3.2.1 反射的基本原理' },
                                    { text: '3.2.2 使用反射实现动态操作' },
                                    { text: '3.2.3 反射的优势与局限' }
                                ]
                            },
                            {
                                text: '3.3 Go 语言的接口设计模式',
                                collapsed: true,
                                items: [
                                    { text: '3.3.1 Go 中的常见设计模式' },
                                    { text: '3.3.2 使用接口实现解耦与扩展' }
                                ]
                            },
                            {
                                text: '3.4 Go 测试与调试',
                                collapsed: true,
                                items: [
                                    {
                                        text: '3.3.1 使用 go test 和 testify 框架',
                                    },
                                    {
                                        text: '3.3.2 编写单元测试',
                                    },
                                    {
                                        text: '3.3.3 编写基准测试',
                                    },
                                    {
                                        text: '3.3.4 代码调试工具（delve 的使用）'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        text: '第四部分：Go 语言项目实战',
                        items: [
                            {
                                text: '4.1 使用 Go 构建 Web 应用',
                                collapsed: true,
                                items: [
                                    { text: '4.1.1 基于 net/http 的 Web 服务器' },
                                    { text: '4.1.2 路由管理与中间件实现' },
                                    { text: '4.1.3 RESTful API 的构建' }
                                ]
                            },
                            {
                                text: '4.2 数据库操作',
                                collapsed: true,
                                items: [
                                    { text: '4.2.1 Go 中的数据库驱动与 ORM 框架' },
                                    { text: '4.2.2 使用 GORM 进行数据库操作' },
                                    { text: '4.2.3 数据库事务与连接池管理' }
                                ]
                            },
                            {
                                text: '4.3 微服务架构与 Go',
                                collapsed: true,
                                items: [
                                    { text: '4.3.1 微服务架构概述' },
                                    { text: '4.3.2 使用 gRPC 构建微服务' },
                                    { text: '4.3.3 Go 语言中的服务发现与负载均衡' }
                                ]
                            }
                        ]
                    },
                ]
            }
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/chenmingyong0423/go-path-to-mastery-book'}
        ]
    }
})
