<template>
    <div class="prolist">
        <div class="proSearch">
            <span class="proSearchText">搜索</span>
        </div>
        <scroll-view class="proTypeList" :scroll-y='true' :style="'height:'+scrollHeight">
            <div class="typeListItemP">
                <img class="typeBanner" src="../../../static/img/test.jpg">
            </div>
            <p class="typeTitle"><span class="typeText">服装分类</span></p>
            <div class="typeListPage">
                <div class="typeListItem" v-for='(item,index) in typeList' :key='index' @click="gotoProductList(item.id)">
                    <img :src="item.thumb">
                    <p class="typeListItemText">{{item.name}}</p>
                </div>
            </div>
        </scroll-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                url:'../products/main?id=',
                scrollHeight:'',
                typeList:[]
            }
        },
        methods:{
            //进入产品列表页
            gotoProductList(id){
                var url = this.url + id
                wx.navigateTo({ url })
            }
        },
        onReady(){
            let self = this
            var query = wx.createSelectorQuery()
            query.select('.proSearch').boundingClientRect()
            query.exec(function (res) {
                self.scrollHeight = (self.scrollHeight - res[0].height) + 'px'
            })
            wx.getSystemInfo({
                success: function(res){
                    self.scrollHeight = res.windowHeight
                }
            })

            this.typeList = wx.getStorageSync('productType')
        }
    }
</script>

<style>
.proSearch{
    overflow: hidden;
    height: 140rpx;
    background: #FF7F7F;
}
.proSearchReturn{
    background: url(../../../static/img/return.png) no-repeat 10px center;
    height: 90px;
    width: 50px;
    background-size: 30px 30px;
    float: left;
}
.proSearchText{
    float: left;
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

.proTypeList{
    width: 100%;
    overflow: auto;
}
.typeListItemP{
    width: 100%;
    overflow: hidden;
}
.typeBanner{
    border-radius: 15rpx;
    width: 90%;
    height: 300rpx;
    display: block;
    margin: 30rpx auto 0;
}
.typeTitle{
    margin: 20rpx 200rpx 50rpx;
    height: 50rpx;
    text-align: center;
    border-bottom: 1px solid #aaa;
}
.typeText{
    background: #fff;
    padding: 0 30rpx;
    line-height: 100rpx;
    font-size: 30rpx;
}

.typeListPage{
    width: 100%;
}
.typeListItem{
    float: left;
    width: 32%;
    margin-left: 1%;
    margin-bottom: 70rpx;
}
.typeListItem>image{
    width: 150rpx;
    height: 150rpx;
    background: #ddd;
    display: block;
    margin: 0 auto;
}
.typeListItemText{
    text-align: center;
    font-size: 30rpx;
    line-height: 50rpx;
    height: 50rpx;
}
</style>