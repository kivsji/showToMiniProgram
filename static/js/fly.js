var Fly = require("flyio/dist/npm/wx")
var fly = new Fly();

//添加拦截器
fly.interceptors.request.use((config) => {
    //给所有请求添加自定义header
    fly.lock();
	fly.get('https://www.rdoorweb.com/wechat/token/verifyToken').then(res=>{
        if(res.data.isValid){
            fly.get('https://www.rdoorweb.com/wechat/token/getToken').then(res=>{
                wx.setStorageSync('token', res.data.token);
                config.headers["token"] = wx.getStorageSync('token')
                fly.unlock();
                // return config
            }).catch(err=>{
                // fly.unlock();
                return err
            })
        }else{
            fly.unlock();
            // return config
        }
        // return config
		// if(!res.data.isValid){
		// 	fly.get('https://www.rdoorweb.com/wechat/token/getToken').then(res=>{
		// 		wx.setStorageSync('token', res.data.token);
		// 		config.headers["token"] = wx.getStorageSync('token');
		// 		return config
		// 	}).catch(err=>{
        //         console.log(2);
		// 		console.log(err);
		// 	})
		// }else{
		// 	config.headers["token"] = wx.getStorageSync('token');
		// 	return config
		// }
	}).catch(err=>{
        fly.unlock();
        return err
	})
})

export {fly};