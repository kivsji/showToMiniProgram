import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', 'pages/index/main','^pages/products/main','pages/stores/main','pages/detail/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#FF7F7F',
      navigationStyle:'custom',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: '#fff'
    },
    tabBar: {
      selectedColor:'#FF7F7F',
      list: [
        {
          pagePath: "pages/index/main",
          text: "首页",
          iconPath: "static/img/index.png",
          selectedIconPath: "static/img/_index.png"
        },
        {
          pagePath: "pages/products/main",
          text: "分类",
          iconPath: "static/img/products.png",
          selectedIconPath: "static/img/_products.png"
        },
        {
          pagePath: "pages/stores/main",
          text: "店铺",
          iconPath: "static/img/stores.png",
          selectedIconPath: "static/img/_stores.png"
        }
      ]
    }
  }
}
