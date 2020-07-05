<template>
	<view class="detailContainer" >
		<view class="swiperContainer">
			  <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(pic,index) in good.picUrl" :key="index">
					<view class="swiper-item uni-bg-red">
						<image :src="pic" mode="widthFix"></image>
					</view>
				</swiper-item>
			
			</swiper>
		</view>
		<view class="goodInfo" >
			<view class="goodPrice">
				￥{{good.currentPrice}}
			</view>
			<view class="goodTitle">
				<text>{{good.goodTitle}}</text>
			</view>
			<view class="infoLine">
				<view class="delivery">
					{{good.delivery>0?'快递费：'+good.delivery:"快递：包邮"}}
				</view>
				<view class="sales">
					月销{{good.sales}}+
				</view>
				<view class="address">
					{{good.address}}
				</view>
			</view>
			
		</view>
		
		<view class="uniWrap">
			<view class="unit" @click="showCategory">
				<text>规格:</text>
				<text>请选择:</text>
			</view>
			
			
			<view class="comments">
				<text>商品评价({{good.commentCount}})</text>
				<text class="showAll" @click="goToComments">查看全部 ></text>
			</view>
		</view>
		<view class="shopWrap">
			<view class="shopInfo">
				<image :src="good.shopInfo.shopThumbnail" mode="widthFix"></image>
				<text class="shopTitle">{{good.shopInfo.shopTitle}}</text>
				<view class="allGood" @click="goTo">
					全部宝贝
				</view>
				<view class="enterShop"  @click="goTo">
					进店逛逛
				</view>
			</view>
			<view class="shopRating">
				<view class="rating goodRating">
					宝贝描述
					<text>{{good.shopInfo.goodRating}} 高</text>
				</view>
				<view class="rating ">
					卖家服务
					<text>{{good.shopInfo.sallerService}}高</text>
				</view>
				<view class="rating ">
					物流服务
					<text>{{good.shopInfo.deliveryService}}高</text>
				</view>
			</view>
		</view>
		<view class="imageInfo">
			<view class="titleLine">
				
			</view>
			<text class="goodDetail">宝贝详细</text>
			<image v-for="image in good.moreImages" :src="image" mode="widthFix"></image>
			
		</view>
		<view class="bottomBtn">
			<view class="indexIcon" @click="goTo('index/index')">
				<span class="iconfont icon-shouye" ></span>
				首页
			</view>
			<view class="btnWrap">
				<view class="cartBtn"  @click="showCategory">
					加入购物车
				</view>
				<view class="buyBtn" @click="buyNow" >
					立即购买
				</view>
				
			</view>
		</view>
		<view class="chooseWrap"  v-if="showChoose" @click.stop="switchChoose" >
			<view class="chooseCategory">
				<view class="goodWrap">
					<image :src="good.picUrl[0]" mode="widthFix"></image>
					<view class="goodLine">
						<view class="price" v-if="!selectPrice">
							￥{{getPriceRange.min!=null? getPriceRange.min+"-"+getPriceRange.max : good.currentPrice}}
						</view>
						<view class="price" v-if="selectPrice">
							￥{{currentPrice}}
						</view>
						<view class="storeCount">
							库存：{{good.storeCount}}
						</view>
						<view class="choose">
							请选择：{{good.sizeUnit}}
						</view>
					</view>
				</view>
				
				<view class="unit" >
					
					<view class="typeList" v-if="good.size!=null">
						<text >{{good.sizeUnit}}</text>
						<button type="default" size="mini"  v-for="(g,index) in good.size" 
						:key="g" :class="g.checked==true?'check':''" @click.stop="changeCheck(index)">{{g.unit}}</button>
						
					</view>
					<hr>
					<view class="cateGory" v-if="good.categoryType!=null">
						<view class="typeList">
							<text>{{good.categoryType}}</text>
							<button type="default" size="mini" v-for="(c,index) in good.category" 
							:key="index" :class="c.checked==true?'check':''" @click.stop="changeCheckCategory(index)">{{c.type}}</button>
						</view>
					</view>
					<view class="buyCount">
						<text>购买数量</text>
						<view class="btnGroup">
							
							<button type="default" size="mini" @click.stop="decrement" >-</button>
							<text>{{cartGood.num}}</text>
							<button type="default" size="mini" @click.stop="increment">+</button>
						</view>
					</view>
					<button type="default" class="joinCart" @click="joinCart" v-if="!buyImmediate">加入购物车</button>
					<button type="default" class="joinCart" @click="" v-if="buyImmediate">立即购买</button>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import {reqGoodsInfo} from '../api/pages.js'
	import {mapState} from 'vuex'
	import {JOIN_CART_GOOD} from '../../vuex/mutationTypes.js'
	export default {
		data(){
			return{
				// good:{},
				goodId:0,
				showChoose:false,
				priceRange:false,
				selectPrice:false,
				currentPrice:0,
				buyImmediate:false,
				shopInfo:{
					shopId:'',
					shopTitle:'',
					shopThumbnail:'',
					cartGoods:[]
				},
				cartGood : {
					"id":"",
					"picUrl":"",
					"goodTitle":"",
					"goodPrice":"",
					"sizeUnit":'',
					"size":{
						price:'',
						unit:'',
						checked:true
						
					},
					"categoryType":'',
					"category":"",
					"num":1,
					"checked":false
				}
			}
		},
		onLoad(options){
			this.goodId = options.id
			this.$store.dispatch('getGoodInfo',options.id);
			
		},
		computed:{
			...mapState({good:'good'}),
			getPriceRange(){
				return this.$store.getters.priceRange(this.good.id)
			},
			choosePrice(index){
				if(this.good.priceList) {
					return this.good.priceList[index];
				}else{
					
					return this.good.currentPrice;
				}
			}
			
		},
		methods:{
			goTo(url){
				uni.switchTab({
					url:'../'+url
				})
			},
			goToComments(){
				uni.navigateTo({
					url:'../comments/comments?id='+this.goodId
				})
			},
			showCategory(){
				this.showChoose=true;
			
			},
			switchChoose(){
			
				this.showChoose=false;
				
			},
			joinCart(){
				
				this.showChoose=false;
				this.shopInfo.shopId = this.good.shopInfo.shopId;//商店id
				this.shopInfo.shopTitle = this.good.shopInfo.shopTitle;
				this.shopInfo.shopThumbnail = this.good.shopInfo.shopThumbnail;
				// this.shopInfo = this.good.shopInfo;
				this.cartGood.id=this.good.id;
				
				this.cartGood.picUrl = this.good.picUrl[0];
				this.cartGood.goodTitle=this.good.goodTitle;
				this.cartGood.goodPrice = this.good.currentPrice;
				this.good.category.forEach(item=>{
					if(item.checked) {
						this.cartGood.category = item.type;
					}
				})
				
				this.cartGood.sizeUnit = this.good.sizeUnit;
				this.cartGood.categoryType  = this.good.categoryType
				
				if(this.cartGood.size.price=='') {
					this.cartGood.size= this.good.size[0];
				}
				this.shopInfo.cartGoods[0]=this.cartGood
				console.log(this.shopInfo.cartGoods);
				this.$store.commit(JOIN_CART_GOOD,this.shopInfo);
		
				
			
			},
			buyNow() {
				this.buyImmediate = true;
				this.cartGood.id=this.good.id;
				this.cartGood.picUrl = this.good.picUrl[0];
				this.cartGood.goodTitle=this.good.goodTitle;
				this.cartGood.goodPrice = this.good.currentPrice;
				if(this.cartGood.size.price=='') {
					this.cartGood.size= this.good.size[0];
					
				}
				this.$store.commit(JOIN_CART_GOOD,this.cartGood);
				uni.navigateTo({
					url:'../pay/pay'
				})
			},
			increment(){
				this.cartGood.num++;
			},
			decrement(){
				this.cartGood.num--;
			},
			changeCheck(index){
				this.currentPrice = this.good.size[index].price;
				this.selectPrice = true;
				this.good.size.forEach((item) => {
					item.checked=false;
				})
				this.cartGood.size = this.good.size[index];
				this.good.size[index].checked=true;
				
			},
			changeCheckCategory(index){
				this.good.category.forEach((item) => {
					item.checked=false;
				})
				this.good.category[index].checked=true;
				this.cartGood.category=this.good.category[index].type;
				
			},
			goTo(){
				uni.redirectTo({
					url:'../shop/shop'
				})
			}
			
		}
	}
		
</script>

<style lang="less">
		.detailContainer{
			width: 100%;
			height: 100%;
			background-color:#f7f7f7;
			.swiperContainer{
				width: 100%;
				height: 700rpx;
				background: white;
				.swiper{
					height: inherit;
					swiper-item{
						height: inherit;
						image{
							width: 100%;
						
						}
					}
				}
			}
			.goodInfo{
				width:100%;
				height: 240rpx;
				background: white;
				box-sizing: border-box;
				padding: 16rpx;
				.goodPrice{
					color: #cf3d15;
					font-size: 60rpx;
				}
				.goodTitle{
					font-weight: bold;
					font-size: 36rpx;
				}
				.infoLine{
					margin-top: 16rpx;
					display: flex;
					color: #666666;
					font-size: 28rpx;
	
					.delivery{
						flex: 1;
					}
					.sales{
						flex: 1;
					}
					.address{
						text-align: right;
						flex: 1;
					}
				}
				
			}
			.shopWrap{
				width: 100%;
				height: 120*2rpx;
				background: white;
				margin-top: 30rpx;
				.shopInfo{
					display: flex;
					padding: 20rpx;
					font-size: 35rpx;
					line-height: 30rpx;
					align-items: center;
					image{
						margin-right: 20rpx;
						flex: 2;
					}
					.shopTitle{
						flex: 3;
						font-size: 40rpx;
					}
					.allGood{
						flex: 2;
						border: 4rpx solid #ff8b01;
						color: #ff8b01;
						height: 30rpx;
						margin-right: 10rpx;
						border-radius: 50rpx;
						padding: 20rpx;
					}
					.enterShop{
						flex: 2;
						color: white;
						height: 30rpx;
						background: linear-gradient(120deg,#ff8b01,#ff5501);
						border-radius: 50rpx;
						padding: 20rpx;
					}
				}
				.shopRating{
					font-size: 30rpx;
					display: flex;
					text-align: center;
					justify-content: center;
					.rating{
						flex: 1;
						text{
							color:#ff5501;
						}
					}
				}
			}
			.uniWrap{
				box-sizing: border-box;
				background-color: white;
				margin-top: 70rpx;
				height: 160rpx;
				width: 100%;
				padding: 20rpx;
				
				.comments{
					margin-top: 40rpx;
					.showAll{
						float: right;
						color: #cb2d01;
					}
				}
			}
			.imageInfo{
				text-align: center;
				margin-top: 28rpx;
				background-color: white;
				.titleLine{
					
					width: 50%;
					height: 1px;
					background:rgba(0,0,0,.2);
					position: relative;
					left: 50%;
					transform: translateX(-50%);
					top:30rpx;
					z-index:1;
				}
				.goodDetail{
					width: 200rpx;
					display: block;
					background: white;
					z-index: 3;
					font-size: 42rpx;
					position: relative;
					left: 50%;
					transform: translateX(-50%);
					margin-bottom: 10rpx;
				}
				
				image{
					width: 100%;
				
				}
				
			}
			.bottomBtn{
				position: fixed;
				bottom: 0px;
				left: 0px;
				width: 100%;
				z-index: 3;
				height: 100rpx;
				background-color: white;
				display: flex;
				text-align: center;
				align-items: center;
				.indexIcon{
					span{
						font-size: 50rpx;
						display: block;
					}
					font-size: 20rpx;
					flex: 1;
				}
				.btnWrap{
					flex: 4;
					.cartBtn{
						width: 50%;height: 70rpx;
						color: white;
						line-height: 67rpx;
						display: inline-block;
						border-top-left-radius: 30rpx;
						border-bottom-left-radius: 30rpx;
						background: linear-gradient(120deg,#ac8b58,#d4b075);
					}
					.buyBtn{
						width: 50%;height: 70rpx;
						color: white;
						line-height: 67rpx;
						display: inline-block;
						border-top-right-radius: 30rpx;
						border-bottom-right-radius: 30rpx;
						background: linear-gradient(120deg,#fd0134,#e20320);
					}
				}
			}
			.chooseWrap{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background: rgba(0,0,0,.2);
				.chooseCategory{
					position: fixed;
					bottom: 0;
					z-index: 4;
					width:100%;
					height: 85%;
					border-radius: 20rpx;
					background: white;
					
					.goodWrap{
						width: 100%;
						height: 300rpx;
						display: flex;
						align-items: center;
						padding-left: 30rpx;
						justify-content: center;
						border-bottom: 1px solid #d3d3d3;
						image{
							flex: 2;
							width: 120rpx;
							height: 200rpx;
							
						}
						.goodLine{
							flex: 5;
							width: 100%;
							height: 70%;
							border-radius: 30rpx;
							padding-left: 20rpx;
							.price{
								color: #cb2d01;
							}
							.storeCount{
								margin: 20rpx 0;
							}
						}
						
					}
					.unit{
						width: 90%;
						height: 100%%;
						margin: 20rpx auto;
						
						.typeList{
							text{
								display: block;
							}	
							button{
								border-radius: 30rpx;
								border: none;
								margin-left: 40rpx;
								margin-top: 30rpx;
								background-color: #f8f8f8;
								
							}
							.check{
								background: #f70230;
								color: white;
							}
						}
						.buyCount{
							margin-top: 80rpx;
							border-top: 1px solid #d3d3d3;
							font-size: 36rpx;
							.btnGroup{
								position: relative;
								left: 200*2rpx;
								button{
									width: 80rpx;
									height: 80rpx;
									font-size: 50rpx;
									background: #f8f8f8;
									border: none !important;
									box-shadow: none;
									display: inline-block;
								}
								button::after{
									border: none;
								}
								text{
									text-align: center;
									font-size: 36rpx;
								}
							}
						}
						.joinCart{
							width: 90%;
							
							position: absolute;
							bottom: 0px;
							border-radius: 60rpx;
							color: white;
							background: linear-gradient(120deg,#ffc201,#ff9702);
						}
					}
					.cateGory{
						width: 100%;
						height: 100%%;
						margin: 20rpx auto;
						.typeList{
							text{
								display: block;
							}	
							button{
								border-radius: 30rpx;
								border: none;
								margin-left: 40rpx;
								margin-top: 30rpx;
								background-color: #f8f8f8;
								
							}
							.check{
								background: #f70230;
								color: white;
							}
						}
					}
				}
			}
		}
</style>
