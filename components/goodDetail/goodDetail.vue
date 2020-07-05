<template>
	<view class="goodDetailContainer">
		<view class="goodList">
			<view class="goodItem" v-for="good in goodInfoes" :key="good.id">
				<image :src="good.picUrl" mode="widthFix"
				class="goodImg"></image>
				<view class="goodInfo">
					<text class="goodTitle">{{good.goodTitle}}</text>
					<view class="goodUnit">
						{{good.sizeUnit}} {{good.size}}
					</view>
					<view class="goodCategory">
						{{good.categoryType}}{{good.category}}
					</view>
				</view>
				<view class="priceAndNum">
					<text class="price">￥{{good.price}}</text>
					<text class="num">x{{good.num}}</text>
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		props:['goodInfoes'],
		data(){
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less">
	.goodDetailContainer{
		width: 100%;
		height: 100%;
		.goodList{
			padding: 20rpx;
			
			.goodItem{
				display: flex;
				margin-top: 10rpx;
			}
			.goodImg{

				width: 220rpx;
			}
			.goodInfo{
				flex: 3;
				.goodTitle{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp:2;
					-webkit-box-orient:vertical;
				}
				.goodUnit{
					margin-top: 20rpx;
				}
				
			}
			.priceAndNum{
				flex: 1;
				font-size: 30rpx;
				text-align: right;
				.price{
					
					display: block;
				}
			}
		}
	}
</style>
