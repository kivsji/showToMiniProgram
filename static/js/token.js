// 引用使用es6的module引入和定义
// 全局变量以g_开头
// 私有函数以_开头

import { Config } from './config.js';
// import { requestMethod } from './requestMethod.js';

var app = null;

class Token {
   
    constructor() {
        this.verifyUrl = Config.restUrl + '/wechat/token/verifyToken';
        this.tokenUrl = Config.restUrl + '/wechat/token/getToken';
    }

    verify(that) {
        var app = that;
        this._veirfyFromServer();
    }

    _veirfyFromServer(callBack) {
        var that = this;
        var token = wx.getStorageSync('token');
        wx.request({
            url: that.verifyUrl,
            method: 'POST',
            header: { 'token': token },
            success: function (res) {
                var valid = res.data.isValid;
                wx.setStorageSync('isValid',valid);
                that.getTokenFromServer(callBack)
            }
        })
    }

    getTokenFromServer(callBack) {
        var that  = this;
        if (wx.getStorageSync('isValid')) {
          callBack && callBack();
          return
        }
        
        wx.login({
          success: function (res) {
            wx.request({
              url: that.tokenUrl,
              method: 'POST',
              data: {
                code: res.code
              },
              success: function (res) {
                wx.setStorageSync('token', res.data.token);
                wx.setStorageSync('isValid',true)
                // var token = wx.getStorageSync('token')
                callBack && callBack();
              }
            })
          }
        })
    }

}

export {Token};