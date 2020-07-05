<template>
	<view class="topBar">
		<view class="logo">
			<!-- <image src="" mode=""></image> -->
			<text>简购</text>
		</view>
		<view class="search" @click="goToSeach">
			
			<span class="iconfont icon-search"></span>
			<text>搜索商品</text>
		</view>
		<view class="btnGroup">
			<view class="menuBtn">
				
			</view>
			<view class="closeBtn">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			goToSeach(){
				uni.redirectTo({
					url:'../../pages/seach/search'
				})
			}
		}
	}
</script>

<style lang="less">
	.topBar{
		width: 100%;
		height: 80rpx;
		position: fixed;
		top: 0px;
		left: 0;
		z-index: 1000;
		background-color: red;
		display: flex;
		align-items: center;
		.logo{
			flex: 2;
			image{
				vertical-align:middle;    
				margin: 8rpx 0rpx 4rpx 20rpx;
				width: 60rpx;
				height: 60rpx;
			}
			text{
				display: inline-block;
				font-size: 34rpx;
				font-weight: bold;
				margin-left: 26rpx;
				color: white;
				line-height: 28rpx;
				
			}
		}
		.search{
			flex: 2;
			width: 60*2rpx;
			height: 50rpx;
			background:white;
			border-radius: 20rpx;
			position: relative;
			span{
				
			
				position: absolute;
				left: 0px;
				top: 0rpx;
				font-size: 42rpx;
			}
			text{
				margin-left: 40rpx;
			}
			
		}
		.btnGroup{
			flex: 2;
			
		}
	}
</style>
