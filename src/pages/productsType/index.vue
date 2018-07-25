<template>
    <div class="prolist">
        <div class="proSearch">
            <p class="proSearchText">请搜索。。</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>

<style>
.proSearch{
    overflow: hidden;
    height: 70px;
    background: #FF7F7F;
}
.proSearchText{
    padding-left: 20rpx;
    color: #fff;
    line-height: 90px;
    font-size: 30rpx;
}
.prolist{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>