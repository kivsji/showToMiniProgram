<template>
	<div class="detailPage" :style="'height:'+pageHeight">
		<div class="pageNav">
			<span class="return" @click="intoProList()"></span>
		</div>
		<div>
			{{id}}
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				pageHeight:'',
				id:'a'
			}
		},
		methods:{
			intoProList(){
                wx.navigateBack({
					delta: 1
				})
            }
		},
		onReady(){
            let self = this
            wx.getSystemInfo({
                success: function(res){
                    self.pageHeight = res.windowHeight + 'px'
                }
            })
		},
		onLoad (options) {
			let self = this
			console.log(options.id);
			this.id = options.id
		}
	}
</script>

<style>
	.detailPage{
		display: block;
		width: 100%;
		height: 100%;
	}
	.return{
		display: block;
		width: 80px;
		height: 80px;
		background: url(../../../static/img/return.png) no-repeat 10px center;
		background-size: 30px 30px; 
	}
</style>