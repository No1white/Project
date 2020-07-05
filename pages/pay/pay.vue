<template>
	<view class="container">
		<!-- <view class="addressInfo" v-if="address!=null" v-for="address in getDefaultAddress">
			<view class="userInfo" >
				<text class="userName">{{address.userName}}</text>
				<text class="userPhone">{{address.userPhone}}</text>
			</view>
			<view class="detailAddress">
				{{address.region+address.detailAddress}}
			</view>
		</view>
		<view class="noneAddress" v-if="address==null" >
			<text class="">还没有添加地址</text>
			<button type="default" class="goTo" @click="goTo('../addAddress/addAddress')">添加地址</button>
		</view>
		<view class="goodWrap">
			<view class="shopLine">
				
				<text class="shopName">简购超市</text>
			</view>
			<view class="goodInfo" v-for="good in cartGoods" :key="good.id">
				<image :src="good.picUrl" mode="widthFix"></image>
				<view class="goodInfo">
					<text class="goodTitle">
						{{good.goodTitle}}
					</text>
					<text class="goodCategory" v-if="good.category==null">颜色:{{good.category}}</text>
					<text class="goodSize" >{{good.size.unit}}</text>
				</view>
				<view class="goodPriceWrap">
					<text class="goodPrice">${{good.size.price}}</text>
					<text class="goodNum">x{{good.num}}</text>
				</view>
				
			</view>
			<view class="delivery">
				<text class="deliveryWay">
					普通配送
				</text>
				<text class="deliveryPrice">
					快递包邮
				</text>
			</view>
			<view class="orderNote">
				<text class="note">订单备注：</text>
				<input type="text" placeholder="选填" />
			</view>
		</view>
		<view class="bottomPay">
			<view class="totalInfo">
				<text class="goodCount">共计{{filterGoods.length}}件</text>
				<text class="totalPrice">合计：{{totalPrice}}</text>
			</view>
			<button type="default" class="submit" @click="payMoney">
				提交订单
			</button>
		</view>
	</view> -->
	
		<view class="addressInfo" v-if="address!=null" v-for="address in getDefaultAddress">
			<view class="addressIcon">
				<span class="iconfont icon-dizhi1"></span>
			</view>
			<view class="userInfo" >
				<text class="userName">林先生</text>
				<text class="userPhone">123456789789</text>
				<text  class="detailAddress">福建省漳州市平和完成的萨达多</text>
			</view>
			<view class="nextIcon">
				<span class="iconfont icon-jiantou1"></span>
			</view>
		</view>
		<view class="noneAddress" v-if="address==null" >
			<text class="">还没有添加地址</text>
			<button type="default" class="goTo" @click="goTo('../addAddress/addAddress')">添加地址</button>
		</view>
		<view class="goodWrap"  v-for="shop in filterGoods">
			<view class="shopLine">
				 <image :src="shop.shopThumbnail" class="shopIcon"></image>
				<text class="shopName">{{shop.shopTitle}}</text>
			</view>
		
			<view class="goodInfo" v-for="good in shop.cartGoods">
				<image :src="good.picUrl" mode="widthFix" class="goodImg"></image>
				<view class="goodInfo">
					<text class="goodTitle" >
						{{good.goodTitle}}
					</text>
					<text class="goodCategory" v-if="good.category==null">{{good.categoryType}} {{good.category}}</text>
					<text class="goodSize" >{{good.sizeUnit}} {{good.size.unit}}</text>
				</view>
				<view class="goodPriceWrap">
					<text class="goodPrice">${{good.goodPrice}}</text>
					<text class="goodNum">x{{good.num}}</text>
				</view>
				
			</view>
			<!-- <view class="goodInfo">
				<image src="../../static/images/goods/good3.jpg" mode="widthFix" class="goodImg"></image>
				<view class="goodInfo">
					<text class="goodTitle" >
						男短袖2020新款夏季韩版t恤超火ins搭配半截袖上衣服帅气百搭体恤
					</text>
					<text class="goodCategory" v-if="good.category==null">颜色:{{good.category}}</text>
					<text class="goodSize" >重量：3斤</text>
				</view>
				<view class="goodPriceWrap">
					<text class="goodPrice">$50</text>
					<text class="goodNum">x3</text>
				</view>
				
			</view> -->
			<view class="delivery">
				<text class="deliveryWay">
					配送方式
				</text>
				<text class="way">
					普通配送
				</text>
				<view class="deliveryPrice">
					快递包邮
					<span class="iconfont icon-jiantou1"></span>
				</view>
			</view>
			<view class="orderNote">
				<text class="note">订单备注</text>
				<input type="text" placeholder="选填" />
			</view>
		</view>
		<!-- <view class="goodWrap">
			<view class="shopLine">
				 <image src="../../static/images/goods/good2.jpg" class="shopIcon"></image>
				<text class="shopName">简购超市</text>
			</view>
			<view class="goodInfo">
				<image src="../../static/images/goods/good3.jpg" mode="widthFix" class="goodImg"></image>
				<view class="goodInfo">
					<text class="goodTitle" >
						男短袖2020新款夏季韩版t恤超火ins搭配半截袖上衣服帅气百搭体恤
					</text>
					<text class="goodCategory" v-if="good.category==null">颜色:{{good.category}}</text>
					<text class="goodSize" >重量：3斤</text>
				</view>
				<view class="goodPriceWrap">
					<text class="goodPrice">$50</text>
					<text class="goodNum">x3</text>
				</view>
				
			</view>
			<view class="goodInfo">
				<image src="../../static/images/goods/good3.jpg" mode="widthFix" class="goodImg"></image>
				<view class="goodInfo">
					<text class="goodTitle" >
						男短袖2020新款夏季韩版t恤超火ins搭配半截袖上衣服帅气百搭体恤
					</text>
					<text class="goodCategory" v-if="good.category==null">颜色:{{good.category}}</text>
					<text class="goodSize" >重量：3斤</text>
				</view>
				<view class="goodPriceWrap">
					<text class="goodPrice">$50</text>
					<text class="goodNum">x3</text>
				</view>
				
			</view>
			<view class="delivery">
				<text class="deliveryWay">
					配送方式
				</text>
				<text class="way">
					普通配送
				</text>
				<view class="deliveryPrice">
					快递包邮
					<span class="iconfont icon-jiantou1"></span>
				</view>
			</view>
			<view class="orderNote">
				<text class="note">订单备注</text>
				<input type="text" placeholder="选填" />
			</view>
		</view> -->
		<view class="bottomPay">
			<view class="totalInfo">
				<text class="goodCount">共计{{getGoodsNum}}件</text>
				<text class="totalPrice">合计：{{getGoodTotalPrice}}</text>
			</view>
			<button type="default" class="submit" @click="payMoney">
				提交订单
			</button>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return{
				totalPrice:0,
				userInfo:{
					_id:''
				},
				currentAddress:{}
			}
		},
		onLoad:function(){
			uni.getStorage({
				key:'userInfo',
				success:(res)=>{
					
					if(res.data) {
						console.log(res.data._id);
						this.$store.dispatch("getAddress",res.data._id);
						this.userInfo._id=res.data._id;
						
					}
				}
			})
			
		},
		computed:{
			...mapState(['cartGoods','address']),
			filterGoods(){
				let shops =this.cartGoods;
			
				this.cartGoods.forEach((item,index)=>{
					
					let cartGoods =item.cartGoods.filter((item)=>item.checked==true);
					shops[index].cartGoods=cartGoods;
				})
				
				return shops;
			},
			getDefaultAddress(){
				
				return this.address.filter(item=>item.defaultAddress==true)
				
			},
			getGoodsNum(){
				let sum=0;
				this.filterGoods.forEach(item=>{
					console.log(item);
					sum += item.cartGoods.length;
				})
				console.log(sum);
				return sum;
				
			},
			getGoodTotalPrice(){
				 let sum=0;
				this.filterGoods.forEach(item=>{
					
					item.cartGoods.forEach(good=>{
						sum+=good.goodPrice * good.num;
					})
				})
				return sum;
				// this.cartGoods.forEach((item,index)=>{
					
				// 	item.cartGoods.forEach(good=>{
				// 		sum+=good.
				// 	})
				// 	shops[index].cartGoods=cartGoods;
				// })
				return 
				
			}
			
			
		},
		onShow() {
			this.address.forEach(item=>{
				if(item.defaultAddress) {
					this.currentAddress= item
				}
			})
			console.log(this.currentAddress);
			console.log(this.address);
		},
		methods:{
			goTo(url){
				uni.navigateTo({
					url
				})
			},
			payMoney(){
				console.log(this.address);
			
			}
		}
	}
</script>

<style lang="less">
	.container{
		width: 100%;
		height: auto;
		background: #f1f1f1;
		margin-bottom: 120rpx;
		.noneAddress{
			width: 100%;
			height: 100*2rpx;
			background: white;
			font-size: 50rpx;
			text-align: center;
			button{
				color: white;
				background: #fe5d00;
			}
		}
		.addressInfo{
			
			width: 95%;
			height: 100*2rpx;
			border-radius: 16rpx;
			background: white;
			margin: 30rpx auto;
			display: flex;
			align-items: center;
			.addressIcon{
				text-align: center;
				margin-left: 10rpx;
				span{
					padding: 20rpx;
					background: linear-gradient(120deg,#fd851d,#ff5108);
					border-radius: 50%;
					color: white;
				}
				flex:1;
			}
			.userInfo{
				flex: 6;
				margin-left: 20rpx;
				margin-bottom: 40rpx;
				.userPhone{
					color: #808080;
					margin-left: 30rpx;
				}
				.detailAddress{
					margin-top: 20rpx;
					display: block;
				}
			}
			.nextIcon{
				flex: 1;
				font-size: 50rpx;
				color: #999999;
				text-align: center;
			}
			
		}
		.goodWrap{
			width: 95%;
			height: auto;
			background: white;
			margin: 30rpx auto;
			border-radius: 30rpx;
			.shopIcon{
					width: 60rpx;
					height: 60rpx;
					vertical-align: middle;
					margin-right: 20rpx;
			}
			.shopLine{
				margin-top: 20rpx;
				margin-bottom: 20rpx;
				margin-left: 20rpx;
				padding-top: 20rpx;
				
			}
			.goodInfo{
				display: flex;
				padding: 20rpx;
				font-size: 30rpx;
				.goodImg{
					width: 190rpx;
					height: 190rpx;
					
				}
				.goodInfo{
					flex: 3;
					display: block;
					
					.goodTitle{
						text-overflow: ellipsis;
						overflow: hidden;
						display:-webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient:vertical;
					
					}
					.goodCategory{
						margin: 10rpx 0rpx;
						
						display: block;
					}
					
					
				}
				.goodPriceWrap{
					flex: 1;
						margin-top: 20rpx;
						text-align: right;
						color: #808080;
					.goodPrice{
						
						display: block;
						
					}
				}
			}
		}
		.delivery{
			width: 100%;
			display: flex;
			margin: 20rpx auto;
			.deliveryWay{
				text-align: center;
				flex: 2;
			}
			.way{
			
				flex: 2;
			}
			.deliveryPrice{
				flex: 2;
				span{
					margin-left: 10rpx;
				}
			}
			
		}
		.orderNote{
			width: 100%;
			margin: 0 auto;
			display: flex;
			padding-bottom: 20rpx;
			.note{
			
				flex: 2;
					text-align: center;
			}
			input{
				flex: 3;
			}
		}
		.bottomPay{
			width: 100%;
			height: 50*2rpx;
			position: fixed;
			bottom: 0px;
			left: 0px;
			background: white;
			display: flex;
			
			.totalInfo{
				flex: 7;
				margin-top: 20rpx;
				text-align: right;
				
				.totalPrice{
					color: #fe5600;
				}
			}
			.submit{
				flex: 2;
				margin-left: 10rpx;
				font-size: 36rpx;
				color: white;
				background: linear-gradient(120deg,#fe7b00,#fe5600);
				border-radius: 50rpx;
				
			}
		}
	}
</style>
