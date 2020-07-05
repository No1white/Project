<template>
	<view class="goodsContainer">
		<view class="goodsWrap">
			<view class="goodList">
				<view class="goodItem" v-for="good in goodsInfo" :key="good.id">
					<image :src="good.picUrl" mode="widthFix"></image>
					<view class="goodInfo">
						<text class="goodTitle">{{good.goodTitle}}</text>
						<view class="goodLine">
							<text class="price">￥{{good.currentPrice}}</text>
							<text class="sales">月销{{good.sales}}笔</text>
						</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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
		.goodsWrap{
				width: 95%;
				.goodList{
					
					.goodItem{
						margin-top: 20rpx;
						display: flex;
						image{
							flex: 3;
						}
						.goodInfo{
							padding:16rpx;
							flex: 4;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							.goodTitle{
								overflow: hidden;
								text-overflow: ellipsis;
								display: -webkit-box;
								-webkit-line-clamp: 2;
								-webkit-box-orient: vertical;
							}
							.goodLine{
								.price{
									color: #ff1043;
								}
								.sales{
									color: #999999;
									font-size: 30rpx;
									margin-left: 40rpx;
								}
								
							}
							
						}
					}
				}
		}
	}
</style>
