<template>
	<view class="personContainer">
		<view class="avatar">
			<image src="../../static/avatar1.jpg" mode=""></image>
			<text class="userName">{{phoneNum!=''?phoneNum:'未登录'}}</text>
		</view>
		<view class="iconBar">
			<view class="iconItem" @click="goToOrder(0)">
				<span class="iconfont icon-dingdan-" ></span>
				<text>全部订单</text>
			</view>
			<view class="iconItem" @click="goToOrder(1)">
				<span class="iconfont icon-daifahuo"></span>
				<text>待发货</text>
			</view>
			<view class="iconItem" @click="goToOrder(2)">
				<span class="iconfont icon-wuliu"></span>
				<text>已发货</text>
			</view>
			<view class="iconItem" @click="goToOrder(3)">
				<span class="iconfont icon-dingdan-"></span>
				<text>评价</text>
			</view>
			
		</view>
		<view class="listBar">
			<view class="listItem" @click="goTo('../address/address')">
				<span class="iconfont icon-address"></span>
				<text>收获地址</text>
			</view>
			<view class="listItem">
				<span class="iconfont icon-kefu"></span>
				<text>客服</text>
			</view>
			<view class="listItem">
				<span class="iconfont icon-banben"></span>
				<text>版本</text>
			</view>
		</view>
		<button type="default" class="logOut" @click="logOut" v-if="phoneNum!=''">退出登录</button>
		<button type="default" class="goToLogin" @click="goTo('../login/login')" v-if="phoneNum==''" >登录</button>
		<button type="default" class="goToRegister" @click="goTo('../register/register')" v-if="phoneNum==''"  >注册账号</button>
	
	</view>
</template>
	
<script>
	export default{
		data(){
			return{
				phoneNum:'',
				nickName:'',
				avatar:'',
			
			}
		},
		onLoad(){
			
			
		},
		onShow () {
			uni.getStorage({
				key:'userInfo',
				success:(res)=>{
					console.log(res.data);
					if(res.data) {
						this.phoneNum = res.data.phoneNum
						console.log(this.phoneNum);
					}
				}
			})
		},
		methods:{
			logOut(){
				this.phoneNum=''
				uni.removeStorage({
					key:"userInfo"
				})
			},
			goTo(url){
				uni.navigateTo({
					url
				})
			},
			goToOrder(TabCur) {
				uni.redirectTo({
					url:'../order/order?TabCur='+TabCur
				})
			}
		}
	}
</script>

<style lang="less">
	.personContainer{
		width: 100%;
		height: 100%;
		background-color: #e9edf5;
		.avatar{
			width: 100%;
			height: 200*2rpx;
			
			background-color: #4088f3;
			image{
				margin-top: 150rpx;
				margin-left: 40rpx;
				width: 150rpx;
				height: 150rpx;

				border-radius: 50%;
			}
			text{
				position: relative;
				top:-40rpx;
				margin-left: 50rpx;
				color: white;
				line-height: 40rpx;
				font-size: 70rpx;
			}
		}
		.iconBar{
			width: 90%;
			height: 100*2rpx;
			background: white;
			border-radius: 30rpx;
			margin: -60rpx auto;
			display: flex;
			align-items: center;
			.iconItem{
				flex: 1;
				margin: 0px 20rpx;
				text-align: center;
				span{
					font-size: 80rpx;
					width: 90rpx;
					height: 90rpx;
				
					border-radius: 50%;
				}
				text{
					display: block;
					font-size: 30rpx;
				
				}
			}
		}
		.listBar{
			margin-top: 90rpx;
			
			.listItem{
				height: 90rpx;
				font-size: 30rpx;
				margin-top: 20rpx;
				background: white;
				
				display: flex;
				align-items: center;
				span{
					margin-left: 20*2rpx;
					
				}
			}
			
		}
		
		.logOut{
			margin-top: 40rpx;
			
		}
	}
</style>
