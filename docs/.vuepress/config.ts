import { defineUserConfig } from 'vuepress' //默认vuepress包
import { defaultTheme } from '@vuepress/theme-default' //默认主题
import { localeRedirectPlugin } from 'vuepress-plugin-locale-redirect'//本地重定向包，根据本地语言进行自动重定向

export default defineUserConfig({

  base : '/',
  title: '首都高教程',
  description: '教程文档',
  plugins: [
    // @ts-ignore
    localeRedirectPlugin(),
  ],
  locales: {
    '/zh/': {
      lang: '简体中文',
      title: '首都高教程',  
      description: '神力科莎首都高复活计划教程文档',
    },
    '/en/': {
      lang: 'English',
      title: 'shutoko revival project course',
      description: 'ACC shutoko mod course ',
    },
    '/ja/': {
      lang: '日本语',
      title: 'shutoko revival project course',
      description: 'shutoko ACC course docs',
    },
  },
  //主题设置
  theme: defaultTheme({

    plugins: [
      // @ts-ignore
      localeRedirectPlugin(),
    ],

    //public下的路径
    logo: '/imgs/logo/logob_low.png',
    repo: 'WUTONK/shutoko_ACCcourse',

    locales: {

      '/en/': {
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'Nested', link: '/nested/' }
        ],
        sidebar: {
          '/en/': [/* ... */],
          '/en/nested/': [/* ... */]
        }
      },
      //侧边栏问题待修复
      '/zh/': {
        // 多语言下拉菜单的标题
        selectLanguageText: '选择语言',
        // 该语言在下拉菜单中的标签
        selectLanguageName: '中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '编写自',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '嵌套', link: 'zh.nested/' }
        ],
      
        // 404 page
        notFound: [
          '这里什么都没有',
          '你怎么到这来了？',
          ':(',
          '看看是不是链接打错了？',
        ],
        
        backToHome: '返回首页',

        //侧边栏
        sidebar: {
          '.zh/': [/* ... */],
          '.zh/nested/': [/* ... */]
        }
      }
    },
  })
})
