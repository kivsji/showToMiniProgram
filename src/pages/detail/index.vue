<template>
    <div class="proDetailPage" :style="'height:'+pageHeight">
        <div class="pageNav">
            <span class="return" @click="intoProList()">
                商品详情
            </span>
            
        </div>
        <div class="detailPage">
            <div class="detailTop">
                <swiper style="height:500rpx;" :indicator-dots="swipeData.indicatorDots" :autoplay="swipeData.autoplay" :interval="swipeData.interval" :duration="swipeData.duration" :circular="swipeData.circular">
                    <block v-for="(item,index) in swipeData.imgUrls" :key='index'>
                        <swiper-item>
                            <!-- <img :src="item" class="slide-image" @load="imageLoaded()" :style="'height:'+ swipeData.imgheights[index] +'rpx;width:'+'750'+'rpx;'"> -->
                            <img :src="item" class="slide-image" @load="imageLoaded()" style="display:block;height:500rpx;width:750rpx;">
                        </swiper-item>
                    </block>
                </swiper>
                <p class="detailTitle">2018年夏季新款 绣花亚麻外披 订单款</p>
                <p class="detailTip">
                    <span class="tipText">销量： 213 件</span>
                    <span class="tipText">剩余： 999 件</span>
                </p>
            </div>
            <div class="detailBottom">
                <tab></tab>
            </div>
        </div>
    </div>
</template>

<script>
import tab from "@/components/tab"
export default {
  data() {
    return {
      swipeData: {
        picWidth: "",
        imgUrls: [
          "../../static/img/detail1.jpg",
          "../../static/img/detail2.jpg",
          "../../static/img/detail1.jpg"
        ],
        indicatorDots: true,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        circular: true,
        imgHeights:['500','500','500']
      },
      pageHeight: "",
      id: "a"
    };
  },
  components:{
      tab
  },
  methods: {
    intoProList() {
      wx.navigateBack({
        delta: 1
      });
    },
    imageLoaded(e){
        // console.log(e.mp.detail.height);
    }
  },
  onReady() {
    // let self = this;
    // wx.getSystemInfo({
    //   success: function(res) {
    //     self.pageHeight = res.windowHeight + "px";
    //   }
    // });
  },
  onLoad(options) {
    let self = this;
    this.id = options.id;
  }
};
</script>

<style>
.ProdetailPage {
  display: block;
  width: 100%;
}
.pageNav{
    position: fixed;
    z-index: 1000;
    top: 0;
    width: 100%;
    height: 70px;
    overflow: hidden;
    background: rgb(255, 127, 127);
}
.return {
    z-index: 999;
  display: block;
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: #fff;
  background: url(../../../static/img/return.png) no-repeat 10px center;
  background-size: 30px 30px;
}

.detailPage {
    margin-top: 70px;
    background: #f2f5f8;
  width: 100%;
}

.detailTop {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.slide-image {
  width: 100%;
}

/* 标题 */
.detailTitle{
    height: 80rpx;
    line-height: 80rpx;
    font-size: 35rpx;
    padding: 0 20rpx;
    /* 溢出隐藏 */
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.detailTip{
    margin: 50rpx 20rpx 0;
    /* padding: 0 20rpx; */
    overflow: hidden;
    height: 70rpx;
    border-top: 1px solid #eee;
}
.tipText{
    display: block;
    float: left;
    width: 50%;
    text-align: center;
    font-size: 25rpx;
    color: #999;
    line-height: 70rpx;
}

.detailBottom{
    background: #fff;
    margin: 20rpx 0 0;
    width: 100%;
}
</style>