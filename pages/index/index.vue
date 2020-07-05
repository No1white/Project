<template>
	<view class="content">
		<view class="topDepartment">
			<!-- 顶部搜索栏 -->
			<NavBar></NavBar>
			<!-- 轮播图 -->
			<view class="swiper-container">
				 <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="duration">
					<swiper-item v-for="banner in banners" :key="banner.id">
						<view class="swiper-item ">
							<image :src="banner.picUrl" @click="goToDetail(banner.id)" mode="aspectFill"></image>
						</view>
					</swiper-item>
				
				</swiper>
			</view>
			<!-- 首页中部商品展示 -->
			<view class="middle-goods">
				<view class="good-item" v-for="good in album" :key="good.id" @click="goToDetail(good.id)">
					<image :src="good.picUrl" mode="scaleToFill"></image>
					<text class="goodTitle">{{good.goodTitle}}</text>
					<text class="sale">热销{{good.sales}}件</text>
					<view class="price">
						<text class="currentPrice">￥{{good.currentPrice}}</text>
						<text class="oldPrice">￥{{good.oldPrice}}</text>
					</view>
				</view>
				
			</view>
			<!-- 推荐商品列表 -->
			<view class="recomment-goods">
				<view class="TitleWrap">
					<text class="recommentTitle">推荐商品</text>
					<text class="recommentInfo">精挑细选</text>
				</view>
				<view class="goodList">
					<view class="goodItem" v-for="good in goodsInfo" @click="goToDetail(good.id)">
						<image :src="good.picUrl" mode=""></image>
						<text class="goodTitle">{{good.goodTitle}}</text>
						<text class="sale">热销{{good.sales}}件</text>
						<view class="price">
							<text class="currentPrice">￥{{good.currentPrice}}</text>
							<text class="oldPrice">￥{{good.oldPrice}}</text>
						</view>
					</view>
				
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import NavBar from '../../components/navBar/NavBar.vue'
	
	import {mapState} from 'vuex'
	import {getIndexInfo} from '../api/pages.js'
	import {RESET_PAGE,INCREMENT_PAGE} from '../../vuex/mutationTypes.js'
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			...mapState(['banners','album','goodsInfo','page'])
		},
		onLoad() {
			this.$store.dispatch("getIndexInfo")  //加载首页信息
			this.$store.commit(RESET_PAGE);  //重置商品页数
			uni.showToast({
				title:"加载中",
				icon:"loading",
				duration:2000
			})
			
		},
		
		onReachBottom(e) {
			uni.showToast({
				title:"加载中",
				icon:"loading"
			})
			this.$store.commit(INCREMENT_PAGE); 
			this.$store.dispatch("getMoreGoods",this.page);		
		
		},
		methods: {
			/**
			 * 方法说明
			 * @method goToDetail
			 * @for 所属类名
			 * @param {int} id 商品id
			 * @return {void} 
			 */
			goToDetail(id){
				uni.navigateTo({
					url:"../detail/detail?id="+id
				})
			}
		},
		components:{
			NavBar
		}
	}
</script>

<style lang="less" scoped>
	.content {
		display: flex;
		background:#f5f5f5 ;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		.topDepartment{
			width: 100%;
			margin-top: 40*2rpx;
			height: 600rpx;
			background:#ff0136 ;
			.swiper-container{
				width: 90%;
				height: 200*2rpx;
				
				margin: 20rpx auto;
				.swiper{
					height: 100%;
					swiper-item{
						height: auto;
						.swiper-item{
							height: 100%;
							image{
								width: 100%;
								height: 100%;
								background-color: #912825;
								border-radius: 20px;
							}
							
						}
					}
				}
			}
			.middle-goods{
				width: 90%;
				height: 160*2rpx;
				margin: 20rpx auto;
				background: white;
				border-radius: 20rpx;
				display: flex;
				.good-item{
					flex: 1;
					width: 200rpx;
					display: flex;
					flex-direction: column;
					
					image{
						width: 90*2rpx;
						margin: 20rpx 10rpx 0rpx 14rpx;
						height: 90*2rpx;
					}
					.goodTitle{
						max-width: 90*2rpx;
						white-space: nowrap; 
						overflow: hidden;
						text-overflow:ellipsis;
						margin-left: 6rpx;
						font-size: 30rpx;
					}
					.sale{
						color: #666666;
						font-size: 24rpx;
					}
					.currentPrice{
						font-size: 30rpx;
						color: #ff3001;
					}
					.oldPrice{
						color: #6666666;
						font-size: 20rpx;
						text-decoration: line-through;
					}
				}
			}
			.recomment-goods{
				width: 90%;
				margin: 0px auto;
				background: white;
				.TitleWrap{
					
					.recommentTitle{
						font-size: 42rpx;
						font-weight: bold;
						
					}
					.recommentInfo{
						margin-left: 12rpx;
						color: #666666;
					}
				}
				.goodList{
					display: flex;
					
					flex-wrap: wrap;
					.goodItem{
						flex: 1;
						display: flex;
						flex-direction: column;
						image{
							width: 150*2rpx;
							height: 150*2rpx;
						}
						.goodTitle{
							width: 140*2rpx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							padding: 10rpx;
							margin-left: 6rpx;
							font-size: 30rpx;
							margin-top: 20rpx;
						}
						.sale{
							color: #666666;
							font-size: 24rpx;
						}
						.currentPrice{
							font-size: 36rpx;
							color: #ff3001;
						}
						.oldPrice{
							color: #6666666;
							font-size: 20rpx;
							text-decoration: line-through;
						}
						
					}
				}
			}
		}
		
	}

</style>
