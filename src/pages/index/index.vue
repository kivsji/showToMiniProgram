<template>
	<div class="overflowPage">
		<scroll-view :scroll-y='true' class="indexPage">
			<swiper :indicator-dots="swipeData.indicatorDots"
				:autoplay="swipeData.autoplay" :interval="swipeData.interval" :duration="swipeData.duration" :circular="swipeData.circular">
				<block v-for="(item,index) in swipeData.imgUrls" :key='index'>
					<swiper-item>
						<image :src="item" class="slide-image" :bindload='getW()'/>
					</swiper-item>
				</block>
			</swiper>
			<picSwipe :typeName='typeName'></picSwipe>
			<picSwipe :typeName='typeName'></picSwipe>
			<picSwipe :typeName='typeName'></picSwipe>
			<picSwipe :typeName='typeName'></picSwipe>
		</scroll-view>
	</div>
	
</template>

<script>
import card from "@/components/card";
import picSwipe from "@/components/picSwipe";

export default {
  data() {
    return {
		swipeData:{
			picWidth:'',
			imgUrls: [
			'../../static/img/test.jpg',
			'../../static/img/test.jpg',
			'../../static/img/test.jpg'
			],
			indicatorDots: true,
			autoplay: false,
			interval: 5000,
			duration: 1000,
			circular: true,
		},
	  	typeName: "这是分类",
    };
  },

  components: {
    picSwipe
  },

  methods: {
    logOne() {
      console.log(123);
	},
	getW(){
		this.swipeData.picWidth = wx.getSystemInfoSync().windowWidth
	}
  }
};
</script>

<style>
.overflowPage{
	width: 100%;
	overflow: hidden;
	height: 100%;
}
.indexPage{
	width: 100%;
	height: 100%;
}
.slide-image{
	width: 100%;
	height: 340rpx;
}
</style>
