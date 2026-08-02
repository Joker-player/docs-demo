import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs-demo/',
  head: [["link", { rel: "icon", href: "/yogo.png" }]],
  title: "吃西瓜的小a",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle:"目录",
    outline:[2, 6],
    logo: "/logo.png", // 配置logo位置，public目录
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家', 
        items:[
        {text:'首页',link:'/'},
        {text:'markdown示例',link:'/markdown-examples'},
      ] ,
    },
      { text: '示例', link: '/markdown-examples' },
      { text: '自动生成侧边栏', link: '/front-end/react/' },
      { text: '自动生成侧边栏2', link: '/backend/rabbitmq/' },
      { text: '两边栏演示', link: '/两边栏演示' },
    ],

  //   sidebar: [
  //    {
  //   text: "Examples",
  //   items: [
  //     { text: "Markdown演示", link: "/markdown-examples" },
  //     { text: "运行API演示", link: "/api-examples" },
  //   ],
  // },
  // {
  //   text: "Examples2",
  //   items: [
  //     { text: "Markdown演示2", link: "/markdown-examples" },
  //     { text: "运行API演示2", link: "/api-examples" },
  //   ],
  //  },
  // ],
    // sidebar: { 
    //   "/front-end/react": set_sidebar("front-end/react"),
    //   "/backend/rabbitmq": set_sidebar("backend/rabbitmq"),
  
    // },
    sidebar: false,
    aside: "left",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Joker-player/' }
    ],
    footer:{
      copyright:"Copyright @ 2023-present My Name",
    },
       // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
})
