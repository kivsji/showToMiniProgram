<template>
	<div class="overflowPage">
		<scroll-view :scroll-y='true' class="indexPage">
			<swiper :indicator-dots="swipeData.indicatorDots" :autoplay="swipeData.autoplay" :interval="swipeData.interval" :duration="swipeData.duration" :circular="swipeData.circular">
				<block v-for="(item,index) in swipeData.imgUrls" :key='index'>
					<swiper-item>
						<image :src="item" class="slide-image" :bindload='getW()' />
					</swiper-item>
				</block>
			</swiper>
			<picSwipe :type='item' v-for="(item,index) in proType" :key='index'></picSwipe>
		</scroll-view>
	</div>

</template>

<script>
import picSwipe from "@/components/picSwipe";
import { Config } from '../../../static/js/config.js';
import { Token } from "../../../static/js/token.js";
var ext = require('../../../ext.json')
export default {
    data() {
        return {
            swipeData: {
                picWidth: "",
                imgUrls: [
                    "../../static/img/test.jpg",
                    "../../static/img/test.jpg",
                    "../../static/img/test.jpg"
                ],
                indicatorDots: true,
                autoplay: false,
                interval: 5000,
                duration: 1000,
                circular: true
            },
            typeName: "这是分类",
            proType:''
        };
    },

    components: {
        picSwipe
    },

    methods: {
        getW() {
            this.swipeData.picWidth = wx.getSystemInfoSync().windowWidth;
        },
        //获取分类
        getProductTypes(){
            var that = this
            this.$http.get('product_cates')
            .then(function (res) {
                wx.setStorageSync('productType',res.data.data)
                that.proType = res.data.data
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        //获取token后回调
        afterGetTokenCallback(){
            this.getProductTypes()
        },
	},
	onLoad(){
        this.afterGetTokenCallback()
    }
};
</script>

<style>
.overflowPage {
    width: 100%;
    overflow: hidden;
    height: 100%;
}
.indexPage {
    width: 100%;
    height: 100%;
}
.slide-image {
    width: 100%;
    height: 340rpx;
}
</style>
