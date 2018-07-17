<template>
	<div class="aboutPage">
		<div class="aboutTop" :style="'opacity:'+opacity">
			<img src="../../../static/img/logo.png" class="aboutTopLogo">
		</div>
		<div class="aboutBG"></div>
		<div class="aboutDetail">
			<div class="logoAName">
				<img class="logo" src="../../../static/img/logo.png">
				<span class="logoText">XXXXX服饰</span>
			</div>
			<div class="aboutDetailText">
				<p class="aboutPAJS">品牌介绍</p>
				<p class="PAJStext">XXXXX服饰皆在以服饰为缘，寻找美感的自由，追求跨年龄段的搭配，多年来，XXXXX服饰一直在坚持美学探索。</p>
				<span class="aboutItem">工作时间&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;9:00 - 6:00</span>
				<span class="aboutItem">店铺地址&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;xxxxxxxxxxxxxxxxxxxxx</span>
				<span class="aboutItem">主营业务&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;服饰</span>
			</div>
			<div class="aboutDetailText">
				<p class="aboutPAJS">联系方式</p>
				<div class="aboutItem1">
					<div class="aboutItem1Left">
						<span class="aboutItem1LeftItem">联系电话</span>
						<span class="aboutItem1LeftItem">1300000000000</span>
					</div>
					<div class="aboutItem1Right">
						<span class="aboutItem1RightItem"></span>
					</div>
				</div>
				<div class="aboutItem1">
					<div class="aboutItem1Left">
						<span class="aboutItem1LeftItem">QQ</span>
						<span class="aboutItem1LeftItem">1300000000000</span>
					</div>
					<div class="aboutItem1Right">
						<span class="aboutItem1RightItem"></span>
					</div>
				</div>
				<div class="aboutItem1">
					<div class="aboutItem1Left">
						<span class="aboutItem1LeftItem">微信号</span>
						<span class="aboutItem1LeftItem">1300000000000</span>
					</div>
					<div class="aboutItem1Right">
						<span class="aboutItem1RightItem"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			opacity:0
		}
	},
	onPageScroll:function(e){
		if(e.scrollTop>220){
			this.opacity = 1
		}else{
			this.opacity = 0
		}
	}
};
</script>

<style>
.aboutTop{
	opacity:0;
	transition: all 0.6s;
    overflow: hidden;
	width: 100%;
    height: 70px;
    position: fixed;
	top: 0;
	background: #fff;
}
.aboutTopLogo{
    display: block;
	margin: 35rpx auto;
	width: 70rpx;
	height: 70rpx;
}
.aboutPage{
	width: 100%;
}
.aboutBG{
	width: 100%;
	height: 400rpx;
	background: rgba(255, 127, 127, 0.842);
}
.aboutDetail{
	width: 100%;
	background: rgb(255, 232, 232);
	display: block;
	border-radius: 15px 15px 0 0;
}
.logoAName{
	width: 100%;
	height: 200rpx;
	background: #fff;
	border-radius: 15px 15px 0 0;
}
.logo{
	display: block;
	float: left;
	width: 120rpx;
	height: 120rpx;
	margin-top: 40rpx;
	margin-left: 30rpx;
}
.logoText{
	line-height: 200rpx;
	font-size: 35rpx;
	margin-left: 30rpx;
}
.aboutDetailText{
	width: 100%;
	margin-top: 20rpx;
	padding-bottom: 40rpx;
	background: #fff;
}
.aboutPAJS{
	line-height: 150rpx;
	margin: 0 50rpx;
	height: 120rpx;
	font-size: 30rpx;
	font-weight: bold;
	border-bottom: 1px solid #ddd;
}
.PAJStext{
	margin-top: 30rpx;
	font-size: 25rpx;
	padding: 0 50rpx;
	color: #000;
	line-height: 65rpx;
}
.aboutItem{
	padding-left: 55rpx;
	display: block;
	width: 80%;
	height: 50rpx;
	font-size: 30rpx;
	color: #999;
	margin: 30rpx 50rpx 0;
}

.aboutDetailText>.aboutItem:nth-child(3){
	background: url(../../../static/img/time.png) no-repeat 0 8rpx;
	background-size: 30rpx 30rpx;
}
.aboutDetailText>.aboutItem:nth-child(4){
	background: url(../../../static/img/address.png) no-repeat 0 8rpx;
	background-size: 30rpx 30rpx;
}
.aboutDetailText>.aboutItem:nth-child(5){
	background: url(../../../static/img/storess.png) no-repeat 0 8rpx;
	background-size: 30rpx 30rpx;
}


.aboutItem1{
	height: 160rpx;
	margin: 0 50rpx;
}
.aboutItem1+.aboutItem1{
	border-top: 1px solid #ddd;
}

.aboutItem1Left{
	float: left;
	width: 60%;
}
.aboutItem1LeftItem:first-child{
	color: #555;
}
.aboutItem1LeftItem{
	font-size: 30rpx;
	line-height: 80rpx;
	color: #999;
	float: left;
	width: 100%;
}

.aboutItem1Right{
	float: right;
	width: 40%;
}
.aboutItem1RightItem{
	float: right;
	display: block;
	margin-top: 65rpx;
	height: 50rpx;
	width: 50rpx;
	background: url(../../../static/img/address.png) no-repeat center;
	background-size: 50rpx;
}
</style>