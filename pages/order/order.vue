<template>
	<view class="orderContainer">
		<!-- <view class="orderTopBar">
			<text class="all active">全部</text>
			<text class="shipment">待发货</text>
			<text class="shipmented">已发货</text>
			<text class="rating">待评价</text>
		</view>
		<view class="orderInfo">
			<view class="shopInfoLine">
				<image src="../../static/images/goods/good1.jpg" mode="widthFix"
				class="shopLogo"></image>
				<text class="shopTitle">简约超市</text>
			</view>
			<view class="goodInfo">
				<GoodDetail></GoodDetail>
			</view>
			<view class="totalPrice">
				<text class="totalPrice">总价￥47.0</text>
				<text class="discount">优惠￥2.0</text>
				<text class="pay">实付款￥47.0</text>
			</view>
		</view> -->
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
		<swiper :current="TabCur" duration="300" class="orderList" >
		  <swiper-item v-for="(item,index) in orderInfos" :key="index" class="orderItem">
		    <view class="orderInfo">
		    	<view class="shopInfoLine">
		    		<image :src="item.shopInfo.shopThumbnail" mode="widthFix"
		    		class="shopLogo"></image>
		    		<text class="shopTitle">{{item.shopInfo.shopTitle}}</text>
		    	</view>
		    	<view class="goodInfo">
		    		<GoodDetail :goodInfoes="item.goodInfoes"></GoodDetail>
		    	</view>
		    	<view class="totalPrice">
		    		<text class="totalPrice">总价￥{{getTotal(index,"price")}}</text>
		    		<text class="discount">优惠￥{{getTotal(index,"discount")}}</text>
		    		<text class="pay">实付款￥{{getTotal(index,"pay")}}</text>
		    	</view>
		    </view>
		  </swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import GoodDetail from '../../components/goodDetail/goodDetail.vue'
	export default {
		data(){
			return {
				 TabCur: 0,
				 tabList: [{ name: '全部' }, { name: '待发货' },{ name: '已发货' },{ name: '评价' }],
				 orderInfos:[
							 {
								
								 "shopInfo": {
								   "shopId": 1,
								   "shopTitle": "简约超市",
								   "shopThumbnail": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3282703942,2976590518&fm=26&gp=0.jpg",
								 },
								 goodInfoes:[
									 {
										 "id": 1,
										 "orderId":20200623001,
										 "picUrl": "https://gd2.alicdn.com/imgextra/i1/687648533/O1CN01Nywig82CuADRcBEdy_!!687648533.jpg",
										 "goodTitle":"新款透气飞织网面运动鞋男夏季爆米花软底薄款跑步鞋情侣网鞋防臭",
										 "price": 98.00,
										 "categoryType": "颜色",
										 "category":"红色",
										 "sizeUnit": "尺码",
										 "size": "41",
										 "delivery": 0,
										 "address": "广东广州",
										 "discount":2,
										 "pay":47,
										 "num":1
									 },
									 {
										 "id": 2,
										 "orderId":20200623003,
										 "picUrl": "https://gd2.alicdn.com/imgextra/i1/687648533/O1CN01Nywig82CuADRcBEdy_!!687648533.jpg",
										 "goodTitle":"新款透气飞织网面运动鞋男夏季爆米花软底薄款跑步鞋情侣网鞋防臭",
										 "price": 98.00,
										 "categoryType": "颜色",
										 "category":"红色",
										 "sizeUnit": "尺码",
										 "size": "41",
										 "delivery": 0,
										 "address": "广东广州",
										 "discount":2,
										 "pay":47,
										  "num":1
									 }
								 ]
								 
							},
							{
								
								 "shopInfo": {
								   "shopId": 1,
								   "shopTitle": "简约超市",
								   "shopThumbnail": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3282703942,2976590518&fm=26&gp=0.jpg",
								 },
								 goodInfoes:[
									 {
										 "id": 1,
										 "orderId":20200623001,
										 "picUrl": "https://gd2.alicdn.com/imgextra/i1/687648533/O1CN01Nywig82CuADRcBEdy_!!687648533.jpg",
										 "goodTitle":"新款透气飞织网面运动鞋男夏季爆米花软底薄款跑步鞋情侣网鞋防臭",
										 "price": 98.00,
										 "categoryType": "颜色",
										 "category":"红色",
										 "sizeUnit": "尺码",
										 "size": "41",
										 "delivery": 0,
										 "address": "广东广州",
										 "discount":2,
										 "pay":47,
										  "num":1
									 }
								 ]
								 
							},
							{
								
								 "shopInfo": {
								   "shopId": 1,
								   "shopTitle": "简约超市",
								   "shopThumbnail": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3282703942,2976590518&fm=26&gp=0.jpg",
								 },
								 goodInfoes:[
									 {
										 "id": 1,
										 "orderId":20200623001,
										 "picUrl": "https://gd2.alicdn.com/imgextra/i1/687648533/O1CN01Nywig82CuADRcBEdy_!!687648533.jpg",
										 "goodTitle":"新款透气飞织网面运动鞋男夏季爆米花软底薄款跑步鞋情侣网鞋防臭",
										 "price": 98.00,
										 "categoryType": "颜色",
										 "category":"红色",
										 "sizeUnit": "尺码",
										 "size": "41",
										 "delivery": 0,
										 "address": "广东广州",
										 "discount":2,
										 "pay":47,
										  "num":1
									 }
								 ]
								 
							}
					]
				 
			}
		},
		onLoad(options) {
			
			this.TabCur =options.TabCur;
		},
		computed:{
			
			getTotal(){
				return function(index,property){
					let sum = 0;
				
					this.orderInfos[index].goodInfoes.forEach(item=>{
						sum+= item[property];
					})
					return sum;
				}
			},
			
		},
		methods:{
			tabChange(index) {
				this.TabCur = index;
			}
		},
		components:{
			GoodDetail,
			WucTab
		}
	}
</script>

<style lang="less">
	.orderContainer{
		width: 100%;
		height: 100%;
		background: #f4f4f4;
		.orderList{
			width: 100%;
			height: 100%;
			.orderItem{
				
				.orderInfo{
					width: 100%;
					height: auto;
					background: white;
					border-radius: 40rpx;
					.shopInfoLine{
						padding-left: 20rpx;
						padding-top: 20rpx;
						
						.shopLogo{
							width: 60rpx;
							border-radius: 50%;
							vertical-align: middle;
						}
						.shopTitle{
					
							margin-left: 30rpx;
						}
						
					}
					.totalPrice{
						font-size: 36rpx;
						text-align: right;
						padding-bottom: 20rpx;
						padding-right: 20rpx;
					}
				}
			}
		}
		
		
	}
</style>
