<template>
	<view class="goodsContainer">
		<view class="goodList">
			<view class="goodItem" v-for="good in goodsInfo">
				<image :src="good.picUrl" mode="widthFix"></image>
				<text class="goodTitle">{{good.goodTitle}}</text>
				<text class="price">￥{{good.currentPrice}}</text>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		props:['goodsInfo'],
		data(){
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less">
	.goodsContainer{
		width: 100%;
		height: 100%;
		background: #f5f5f5;
		.goodList{
			width: 100%;
			height: auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.goodItem{
				width: 49%;
				margin-top: 30rpx;
				image{
					width: 100%;
					
				}
				.goodTitle{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp:2;
					-webkit-box-orient:vertical;
				}
				.price{
					color: #ff5d12;
					margin-top: 20rpx;
				}
			}
		}
	}
</style>
