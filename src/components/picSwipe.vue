<template>
    <div class="picPage">
        <div class="picTitle">
            <span class="pt1">{{type.name}}</span>
            <span class="pt2" @click="typeMore(type.id)">更多></span>
        </div>
        <scroll-view class="picSwipeList" :scroll-x='true'>
            <div class="picList">
                <a class="picA" @click="inPicDetails(item.id)" v-for="(item,index) in proList" :key='index'>
                    <img class="pic" :src="item.thumb">
                </a>
            </div>
        </scroll-view>
    </div>

</template>

<script>
export default {
    props:{
        type:'',
        typeMore:'',
        inPicDetails:'',
    },
    data() {
        return{
            typeAll:'',
            proList:[],
            detailUrl:'../detail/main?id=',
            proListUrl:'../products/main?id='
        }
    },
    methods: {
        typeMore(id) {
            var url = this.proListUrl + id
            wx.navigateTo({ url })
        },
        inPicDetails(id) {
            var url = this.detailUrl + id
            wx.navigateTo({ url })
        }
    },
    onLoad(){
        
    },
    onReady(){
        this.typeAll = this.type
        this.$http.get('products?keyword=&cate_id=' + this.type.id).then(res=>{
            this.proList = res.data.data.data
        }).catch(err=>{
            console.log(err);
        })
    }
};
</script>

<style>
.picPage {
    width: calc(100% - 40rpx);
    height: 410rpx;
    margin: 20rpx 20rpx;
    overflow: hidden;
}
.picTitle {
    width: 100%;
    height: 70rpx;
    /* border-bottom: 1rpx solid #eee; */
}
.pt1,
.pt2 {
    font-size: 30rpx;
    line-height: 70rpx;
}
.pt1 {
    float: left;
}
.pt2 {
    float: right;
}
.picSwipeList {
    margin-top: 20rpx;
    width: 100%;
    height: 330rpx;
}
.picList {
    width: 5000rpx;
}
.picSwipeList .picA {
    width: 350rpx;
    height: 320rpx;
    display: block;
    float: left;
    border-radius: 6rpx;
}
.picSwipeList .picA + .picA {
    margin-left: 30rpx;
}
.picSwipeList .pic {
    display: block;
    width: 350rpx;
    height: 320rpx;
    border-radius: 6rpx;
}
</style>
