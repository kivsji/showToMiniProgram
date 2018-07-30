<template>
    <div class="searchPage" v-if="searchShow">
        <div class="proSearch">
            <span class="proSearchReturn" @click="hiddenSearch()"></span>
            <span class="proSearchText">返回</span>
        </div>
        <div class="searchContent">
            <div class="inputPage">
                <input class="searchInput" v-model="searchText">
            </div>
            <span class="searchSumit" @click="searchPro()">搜索</span>
        </div>
        <div class="searchTip">
            <p class="tipText">热门搜索</p>
            <div class="tipList">
                <span class="tipItem" v-for='(item,index) in tipList' :key='index' @click="setSearchText(item)">{{item}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            proId:''
        },
        data(){
            return{
                searchText:'',
                searchValue:false,
                tipList:['袜子','面膜','电动牙刷','眼霜','耳机','口红','皮带'],
                proList:'',
            }
        },
        methods:{
            hiddenSearch(){
                this.searchValue = !this.searchValue
                this.searchText = ''
            },
            setSearchText(text){
                this.searchText = text
            },
            searchPro(){
                var that = this
                wx.request({
                    url:'https://www.rdoorweb.com/app/'+ wx.getStorageSync('XCXFLAG') +'/api/products?keyword='+ that.searchText +'&cate_id='+that.proId,
                    header: { token: wx.getStorageSync('token') },
                    success: res=>{
                        that.proList = res.data.data.data
                        that.sendToParent(res.data.data.data)
                        this.hiddenSearch()
                    }
                })
            },
            sendToParent(data){
                this.$emit('listenToChildEvent',{data:data,searchText:this.searchText})
            }
        },
        computed:{
            searchShow:function(){
                return this.searchValue
            }
        }
    }
</script>

<style>
.searchPage{
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background: #fff;
}
.proSearch{
    overflow: hidden;
    height: 140rpx;
    background: #FF7F7F;
}
.proSearchReturn{
    background: url(../../static/img/return.png) no-repeat 10px center;
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
    font-size: 35rpx;
}
.searchContent{
    width: 100%;
    height: 100rpx;
    margin-top: 35rpx;
    padding-bottom: 20rpx;
    /* border-bottom: 1px solid #eee; */
}
.inputPage{
    float: left;
    width: 74%;
    height: 70rpx;
    background: url(../../static/img/search.png) no-repeat 15rpx center  rgba(201, 201, 201, 0.4);
    background-size: 32rpx 32rpx;
    border-radius: 15rpx;
    margin-left: 2%;
}
.searchInput{
    height: 70rpx;
    line-height: 70rpx;
    font-size: 32rpx;
    padding-left: 55rpx;
    padding-right: 10rpx;
    color: #999;
}
.searchSumit{
    text-align: center;
    line-height: 70rpx;
    font-size: 32rpx;
    float: left;
    width: 19%;
    height: 70rpx;
    margin-left: 2%;
    color: #666;
    background: rgba(201, 201, 201, 0.4);
    border-radius: 15rpx;
}

.searchTip{
    width: 100%;
    margin-top: 30rpx;
}
.tipText{
    font-size: 35rpx;
    color: #aaa;
    line-height: 50rpx;
    padding: 0 20rpx;
}

.tipList{
    padding: 0 20rpx;
    width: calc(100% - 40rpx);
}
.tipItem{
    float: left;
    padding: 10rpx;
    color: #666;
    height: 50rpx;
    font-size: 30rpx;
    line-height: 50rpx;
    margin-top: 20rpx;
    margin-right: 25rpx;
    border: 1px solid #ddd;
}
</style>