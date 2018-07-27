<template>
  <div>
    <view class="swiper-tab">
      <view :class="'swiper-tab-item ' + (currentTab == 0?'active':'')" @click="clickTab">产品详情</view>
      <view :class="'swiper-tab-item ' + (currentTab == 1?'active':'')" @click="clickTab">产品参数</view>
    </view>
    <swiper :current="currentTab" class="detailAll" :style="'height:'+swipeH+'px'" duration="100" @change="swiperTab">
      <swiper-item>
        <view class="detailContent">
          <!-- <img src="../../static/img/detail2.jpg">
          <br>
          <img src="../../static/img/detail1.jpg"> -->
          {{proDetail.content}}
        </view>
      </swiper-item>
      <swiper-item>
        <view class="detailParam">商品参数</view>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['detail'],
  data() {
    return {
      currentTab: 0,
      swipeH: "",
      proDetail:''
    };
  },
  methods: {
    swiperTab(event) {
      this.currentTab = event.mp.detail.current;
    },
    //点击切换
    clickTab(event) {
      if (this.currentTab === event.mp.target.dataset.eventid) {
        return false;
      } else {
        this.currentTab = event.mp.target.dataset.eventid;
      }
    },
    // 检测内容高度并设置swipe高度
    setSwipeH() {
      let self = this;
      if (this.currentTab === 0) {
        let query = wx.createSelectorQuery();
        query.select(".detailContent").boundingClientRect();
        query.exec(function(res) {
          self.swipeH = res[0].height;
        });
      } else {
        let query = wx.createSelectorQuery();
        query.select(".detailParam").boundingClientRect();
        query.exec(function(res) {
          self.swipeH = res[0].height;
        });
      }
    }
  },
  onReady() {
    this.setSwipeH();
    this.proDetail = detail;
    
  }
};
</script>

<style>
.swiper-tab {
  width: 100%;
  border-bottom: 1rpx solid #ccc;
  height: 88rpx;
  line-height: 88rpx;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
.swiper-tab-item {
  width: 50%;
  font-size: 30rpx;
  text-align: center;
  color: #434343;
}
.active {
  height: 86rpx;
  color: rgb(255, 127, 127);
  border-bottom: 4rpx solid rgb(255, 127, 127);
}
/* .detailContent,detailParam{
  padding: 20rpx 0 0;
} */
.detailContent image{
  display: block;
  width: 100%;
  height: 250px;
}
swiper {
  text-align: center;
}
</style>
