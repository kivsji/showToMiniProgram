
class Config{
    constructor(){

    }
}


let extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {}

// Config.restUrl = 'https://www.rdoorweb.com/app/' + 'sdq12DSs' + '/api' ;
Config.restUrl = 'https://www.rdoorweb.com/app/' + '2zRbKR0s' + '/api' ;
// Config.restUrl = 'http://localhost/jiimoo/public/app/' + extConfig.xcx_flag +'/api';


export {Config};