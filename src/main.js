import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
App.mpType = 'app'
require('es6-promise').polyfill()
const app = new Vue(App)
app.$mount()
var Fly = require("flyio/dist/npm/wx")
var fly = new Fly
//添加全局配置、拦截器等
var token = wx.getStorageSync('token')
fly.interceptors.request.use((request) => {
	request.headers["token"] = token
	request.url = 'https://www.rdoorweb.com/app/'+ wx.getStorageSync('XCXFLAG') +'/api/' + request.url
	return request
})
fly.interceptors.response.use((response) => {
	return response
}, (error) => {
	if (error.status === 401) {
		wx.login({
			success: async (res) => {
				let data = await fly.post('https://www.rdoorweb.com/app/2zRbKR0s/api/wechat/token/getToken', res)
				// 重新返回数据
				wx.setStorageSync('token', data.token);
				token = wx.getStorageSync('token')
				error.request.headers["token"] = token
				return await fly.request(error.request)
			}
		})
	} else {
		return error
	}
})
Vue.prototype.$http = fly //将fly实例挂在vue原型上
export default {
	// 这个字段走 app.json
	config: {
		// 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
		pages: ['^pages/index/main', 'pages/products/main', 'pages/stores/main', 'pages/detail/main', 'pages/productsType/main'],
		window: {
			backgroundTextStyle: 'light',
			navigationBarBackgroundColor: '#FF7F7F',
			navigationStyle: 'custom',
			navigationBarTitleText: 'WeChat',
			navigationBarTextStyle: '#fff'
		},
		tabBar: {
			selectedColor: '#FF7F7F',
			list: [
				{
					pagePath: "pages/index/main",
					text: "首页",
					iconPath: "static/img/index.png",
					selectedIconPath: "static/img/_index.png"
				},
				{
					pagePath: "pages/productsType/main",
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
