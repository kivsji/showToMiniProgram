<template>
    <div class="picPage">
        <div class="picTitle">
            <span class="pt1">{{typeName}}</span>
            <span class="pt2" @click="typeMore()">更多</span>
        </div>
        <scroll-view class="picSwipeList" :scroll-x='true'>
            <div class="picList">
                <a class="picA" @click="inPicDetails()">
                    <img class="pic" src="../../static/img/pic1.jpg">
                </a>
                <a class="picA" @click="inPicDetails()">
                    <img class="pic" src="../../static/img/pic1.jpg">
                </a>
                <a class="picA" @click="inPicDetails()">
                    <img class="pic" src="../../static/img/pic1.jpg">
                </a>
                <a class="picA" @click="inPicDetails()">
                    <img class="pic" src="../../static/img/pic1.jpg">
                </a>
                <a class="picA" @click="inPicDetails()">
                    <img class="pic" src="../../static/img/pic1.jpg">
                </a>
                <a class="picA" @click="inPicDetails()">
                    <img class="pic" src="../../static/img/pic1.jpg">
                </a>
                <a class="picA" @click="inPicDetails()">
                    <img class="pic" src="../../static/img/pic1.jpg">
                </a>

            </div>
        </scroll-view>
    </div>
    
</template>

<script>
export default {
  props: [
      'typeName',
      'typeMore',
      'inPicDetails'
],
methods:{
    typeMore(){
      console.log(1)
    },
    inPicDetails(){
      console.log('pic')
    }
}
};
</script>

<style>
.picPage{
    width: calc(100% - 40rpx);
    height: 410rpx;
    margin: 20rpx 20rpx;
    overflow: hidden;
}
.picTitle{
    width: 100%;
    height: 70rpx;
    border-bottom: 1rpx solid #eee;
}
.pt1,.pt2{
    font-size: 30rpx;
    padding: 0 30rpx;
    line-height: 70rpx;
}
.pt1{
    float: left;
}
.pt2{
    float: right;
}
.picSwipeList{
    margin-top: 20rpx;
    width: 100%;
    height: 330rpx;
}
.picList{
     width:5000rpx;
}
.picSwipeList .picA{
    width: 350rpx;
    height: 320rpx;
    display: block;
    float: left;
    border-radius: 6rpx;
}
.picSwipeList .picA + .picA{
    margin-left: 30rpx;
}
.picSwipeList .pic{
    display: block;
    width: 350rpx;
    height: 320rpx;
    border-radius: 6rpx;
}
</style>
