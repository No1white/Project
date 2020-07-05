<template>
	<view class="shopContainer">
		<view class="shop">
			<view class="shopItem" v-for="(shop,shopIndex) in cartGoods">
				<view class="shopInfo">
					<image :src="shop.shopThumbnail" mode="widthFix"></image>
					<text class="shopTitle">{{shop.shopTitle}}</text>
				</view>
				<view class="goods">
					<view class="goodItem" v-for="(good,goodIndex) in shop.cartGoods" :key="good.id">
						
							<label class="checkBtn">
								<checkbox value="cb" :checked=good.checked @click="cChecked(shopIndex,goodIndex)" />
							</label>
						
						<view class="goodInfo">
							<image :src="good.picUrl" mode="widthFix"></image>
							<view class="goodDetail">
								<text class="goodTitle">{{good.goodTitle}}</text>
								<view class="goodCategory">
								{{good.categoryType}} {{good.category}}
								</view>
								<view class="goodSize">
								{{good.sizeUnit}}: {{good.size.unit}}
								</view>
								<view class="total">
									<view class="price">
										${{good.size.price}}
									</view>
									
									<view class="operation">
										<view type="default" class="delBtn" @click="decrement(shopIndex,goodIndex)">-</view>
										<text class="goodNum">{{good.num}}</text>
										<view type="default" class="addBtn" @click="increment(shopIndex,goodIndex)">+</view>
									</view>
								</view>
							</view>
						</view>
					</view>
						
					
					</view>
					
				</view>
				
			</view>
			
			<view class="footer">
				<view class="allCheckWrap">
					<checkbox value="cb" :checked="checkAll" class="allCheck" @click="allCheked" />
					全选
				</view>
				<view class="totalPrice">
					合计:
					<text class="price">${{countPrice}}</text>
				</view>
				<button type="default" class="settleAcount" @click="goToPay">结算</button>
			</view>
		</view>
	</view>
	
</template>

<script>
	import {mapState} from 'vuex'
	export default {
	        data() {
	            return {
	               totalPrice:0,
				   num:0,
				   checkAll:false
				   
				   
	            }
	        },
			computed:{
				...mapState(['cartGoods']),
				countPrice(){
					console.log(this.cartGoods);
					let sum = 0 ;
					this.cartGoods.forEach(item=>{
						item.cartGoods.forEach(item=>{
							if(item.checked) {
								sum += item.size.price * item.num;
							}
							
						})
					})
					return sum;
				}
			},
	        methods: {
	            checkboxChange: function (e) {
	                var items = this.items,
	                    values = e.detail.value;
	                for (var i = 0, lenI = items.length; i < lenI; ++i) {
	                    const item = items[i]
	                    if(values.includes(item.value)){
	                        this.$set(item,'checked',true)
	                    }else{
	                        this.$set(item,'checked',false)
	                    }
	                }
	            },
				cChecked(shopIndex,goodIndex) {
					console.log(shopIndex,goodIndex);
					console.log(this.cartGoods[shopIndex].cartGoods[goodIndex].checked);
					this.cartGoods[shopIndex].cartGoods[goodIndex].checked = !this.cartGoods[shopIndex].cartGoods[goodIndex].checked
				} ,
				increment(shopIndex,goodIndex){
					this.cartGoods[shopIndex].cartGoods[goodIndex].num++;
				},
				decrement(shopIndex,goodIndex) {
					this.cartGoods[shopIndex].cartGoods[goodIndex].num--;
				},
				allCheked() {
					this.checkAll = !this.checkAll;
				
					this.cartGoods.forEach(item=>{
						item.cartGoods.forEach(item=>{
							item.checked=this.checkAll;
						})
					})
				},
				goToPay(){
					uni.navigateTo({
						url:'../pay/pay'
					})
				}
	        }
	    }
</script>

<style lang="less">
	.shopContainer{
		width: 100%;
		height: 100%;
		background: #f0f0f0;
		.shop{
			margin-top: 20rpx;
			width: 100%;
			background: white;
			
			.shopItem{
				margin-left: 30rpx;
				align-items: center;
				.checkAll{
					
					margin: 0px 26rpx;	
				}
				.shopInfo{
					flex: 5;
					image{
						width: 60rpx;
						height: 60rpx;
						vertical-align: middle;
					}
					.shopTitle{
						margin-left: 12rpx;
						font-size: 24rpx;
					}
					
				}
				.goods{
					display: flex;
					flex-direction: column;
					.goodItem{
						flex: 1;
						display: flex;
						align-items: center;
						.checkBtn{
							margin: 0 20rpx;
						}
						.goodInfo{
							flex: 5;
							display: flex;
							
							image{
								width: 90*2rpx;
								height: 90*2rpx;
								margin: 10rpx 20rpx;
							}
							.goodDetail{
								
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								.goodTitle{
										margin-top: 24rpx;
										
										width: 32%;
										white-space: nowrap;
										overflow: hidden;
										text-overflow: ellipsis;
								}
								.total{
									width: 230*2rpx;
									display: flex;
								
									margin-bottom: 24rpx;
									.price{
										color: #ff5501;
										flex: 1;
									}
									.goodWeight{
										font-size: 24rpx;
										margin-top: 10rpx;
									}
									.operation{
										flex: 1;
										
										
										
										view{
											font-size: 42rpx;
											display: inline-block;
										}
										text{
											margin: 0 10px;
										}
										
									}
								}
							}
						}
					}
				
				}
				
				
			}
			
			
		}
		.footer{
			width: 100%;
			height: 120rpx;
			position: fixed;
			bottom: 0px;
			border-top: 1rpx solid #6666;
			display: flex;
			align-items: center;
			.settleAcount{
				flex: 1;
				margin-left: 10px;
				background: #ff5501;
				color: white;
			}
			.allCheckWrap{
				flex: 1;
			}
			.totalPrice{
				flex: 2;
				text-align: right;
				.price{
					color:#ff5501 ;
				}
			}
		}
	}
</style>
