<template>
    <div class="prolist">
        <div class="proSearch">
            <p class="proSearchText">请搜索。。</p>
        </div>
        <div class="proFilter">
            <span class="pFItem">
                时间
            </span>
            <span class="pFItem">
                材质
            </span>
            <span class="pFItem">
                型号
            </span>
        </div>
        <scroll-view class="proData" :scroll-y='true' :style="'height:'+scrollHeight">
            <div class="proItem" v-for="(item,index) in 8" :key="index" @click="intoProDetial(index)">
                <img src="../../static/img/pic1.jpg" class="proImg">
                <div class="proText">
                    <p class="proTitle">这是第{{index}}件衣服</p>
                </div>
            </div>
        </scroll-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                scrollHeight:'',
                url:'../detail/main?id='
            }
        },
        methods:{
            //进入产品详情页
            intoProDetial(id){
                var url = this.url + id
                wx.navigateTo({ url })
            }
        },
        onReady(){
            let self = this
            var query = wx.createSelectorQuery()
            query.select('.proSearch').boundingClientRect()
            query.select('.proFilter').boundingClientRect()
            query.exec(function (res) {
                self.scrollHeight = (self.scrollHeight - res[0].height - res[1].height) + 'px'
            })
            wx.getSystemInfo({
                success: function(res){
                    self.scrollHeight = res.windowHeight
                }
            })

            
        }
    }
</script>

<style>
.proSearch{
    overflow: hidden;
    height: 70px;
    background: #FF7F7F;
}
.proSearchText{
    padding-left: 20rpx;
    color: #fff;
    line-height: 90px;
    font-size: 30rpx;
}
.prolist{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.proFilter{
    /* border-bottom: 1px solid #ddd; */
    width: 100%;
    height: 40px;
}
.pFItem{
    font-size: 30rpx;
    line-height: 40px;
    padding-left: 2%;
    color: #999;
    width: 30%;
    height: 100%;
    margin-left: 1%;
    float: left;
    background: url(../../static/img/uD.png) no-repeat 80% 10px;
    background-size: 20px 20px; 
}
.proData{
    width: 100%;
    overflow: hidden;
}
.proItem{
    width: 100%;
    height: 200rpx;
}
.proItem:first-child{
    margin-top: 10rpx;
}
.proItem+.proItem{
    border-top: 1rpx solid #ddd;
    margin-top: 10rpx;
    padding-top: 10rpx;
}
.proImg{
    width: 200rpx;
    height: 200rpx;
    float: left;
}
.proText{
    float: left;
}
.proTitle{
    padding: 10rpx 30rpx;
    font-size: 30rpx;
}
</style>