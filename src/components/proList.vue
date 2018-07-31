<template>
    <div class="prolist">
        <div class="proSearch">
            <span class="proSearchReturn" @click="intoProList()"></span>
            <span class="proSearchTextOut" @click="showSearch()">{{searchText}}</span>
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
        <scroll-view class="proData" :scroll-y='true' :style="'height:'+scrollHeight" v-if='proList.length>0'>
            <div class="proItem" v-for="(item,index) in proList" :key="index" @click="intoProDetial(item.id)">
                <img :src="item.thumb" class="proImg">
                <div class="proText">
                    <p class="proTitle">{{item.name}}</p>
                    <p class="proYan">建议零售价(¥)：<span class="proYanC">{{item.c_price}}</span></p>
                </div>
            </div>
        </scroll-view>
        <p v-else class="proItemNull">暂无商品</p>
        <searchPage ref='search' :proId='proTypeId' v-on:listenToChildEvent='showMsgFromChild'></searchPage>
    </div>
</template>

<script>
import searchPage from "@/components/searchPage";
    export default {
        data(){
            return{
                scrollHeight:'',
                url:'../detail/main?id=',
                proList:[],
                proTypeId:'',
                searchText:'搜索...'
            }
        },
        components:{searchPage},
        methods:{
            //进入产品详情页
            intoProDetial(id){
                this.searchText = '搜索...'
                var url = this.url + id
                wx.navigateTo({ url })
            },
            //返回上一级
            intoProList() {
                this.searchText = '搜索...'
                wx.navigateBack({
                    delta: 1
                });
            },
            //显示search
            showSearch(){
                this.$refs.search.hiddenSearch()
            },
            showMsgFromChild:function (data) {
                this.proList = data.data
                this.searchText = data.searchText
            }
        },
        onLoad(opt){
            this.proTypeId = opt.id
            this.$http.get('products?keyword=&cate_id=' + this.proTypeId).then(res=>{
                this.proList = res.data.data.data
            })
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
.proSearchReturn{
    background: url(../../static/img/return.png) no-repeat center;
    height: 90px;
    width: 40rpx;
    margin: 0 30rpx 0;
    background-size: 30px 30px;
    float: left;
}
.proSearchTextOut{
    float: left;
    padding-left: 80rpx;
    padding-right: 80rpx;
    background: url(../../static/img/search1.png) no-repeat 30rpx center;
    background-size:  30rpx;
    color: #fff;
    height: 55rpx;
    border: 1px solid #fff;
    border-radius: 20rpx;
    margin-top: 60rpx;
    line-height: 55rpx;
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
.proItemNull{
    font-size: 35rpx;
    line-height: 50rpx;
    height: 50rpx;
    color: #aaa;
    text-align: center;
    margin-top: 100rpx;
}
.proItem{
    width: 100%;
    height: 300rpx;
}
.proItem:first-child{
    /* margin-top: 10rpx; */
}
.proItem+.proItem{
    /* border-top: 1rpx solid #ddd; */
    /* margin-top: 10rpx; */
    /* padding-top: 10rpx; */
}
.proImg{
    width: 200rpx;
    height: 200rpx;
    margin-left: 25rpx;
    margin-top: 50rpx;
    float: left;
}
.proText{
    border-bottom: 1rpx solid #ddd;
    width: calc(100% - 225rpx);
    height: 300rpx;
    float: right;
}
.proTitle{
    padding: 70rpx 30rpx 0;
    font-size: 30rpx;
}
.proYan{
    font-size: 25rpx;
    color: #aaa;
    padding: 45rpx 30rpx 0;
}
.proYanC{
    font-size: 30rpx;
}
</style>