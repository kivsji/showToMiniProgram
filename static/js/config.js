
class Config{
    constructor(){

    }
}
let ext = require('../../ext.json')

let extConfig = wx.getExtConfigSync? wx.getExtConfigSync(): {}
wx.setStorageSync('XCXFLAG',ext.ext.xcx_flag)
Config.restUrl = 'https://www.rdoorweb.com/app/' + extConfig.xcx_flag + '/api' ;
// Config.restUrl = 'https://www.rdoorweb.com/app/' + ext.ext.xcx_flag + '/api' ;
// Config.restUrl = 'http://localhost/jiimoo/public/app/' + extConfig.xcx_flag +'/api';


export {Config};