<template>
	<view class="registerWrap">
		<view class="logo">
			<text>简购</text>
		</view>
		<form @submit="login" @reset="">
			<view class="formWrap">
				<view class="inputGroup">
					<view class="inputItem">
						<span class="iconfont icon-wode"></span>
						<input type="text" value="" placeholder="请输手机号" class="phone" name="phoneNum"/>
						
					</view>
					<view class="inputItem">
						<span class="iconfont icon-iconfont17"></span>
						<input type="password" value="" placeholder="请输入密码" class="password" name="password"/>
						
					</view>
				
				</view>
			
			</view>
			<button form-type="submit" class="submit">登录</button>
	
		</form>
	</view>
</template>

<script>
	import {reqLogin} from '../api/pages.js'
	import {LOGIN} from '../../vuex/mutationTypes.js'
	export default {
		data(){
			return {
				phoneNum:'',
				password:''
			}
		},
		methods:{
			login(e){
				let that = this;
				let phoneNum = e.detail.value.phoneNum;
				let password = e.detail.value.password;
				
					
				reqLogin({phoneNum,password}).then(res=>{
					if(res.data.code == 1) {
						uni.showToast({
							title:res.data.msg,
							icon:"none",
							duration:2000
						})
					}
					
					if(res.data.code == 0) {
						uni.showToast({
							title:"登录成功",
							icon:"none",
							duration:2000
						})
						
					this.$store.commit(LOGIN,res.data.user)
						uni.setStorage({key:'userInfo',data:res.data.user});
						
						uni.switchTab({
							url:'/pages/index/index'
						})
					}
					
					
				})
			}
		}
	}
</script>

<style lang="less">
	.registerWrap{
		.logo{
			width: 100%;
			height: 200*2rpx;
			margin-top: 50rpx;
			text-align: center;
			text{
				font-size: 200rpx;
				color: #669900;
			}
		}
		.formWrap{
			width: 80%;
			margin: 0px auto;
			.inputGroup{
				
				.inputItem{
					margin-top: 60rpx;
					border-bottom: 1px solid #666666;
					display: flex;
					span{
						flex: 1;
						font-size: 60rpx;
					}
					input{
						flex: 5;
						font-size: 35rpx;
						display: inline-flexbox;
						height: 80rpx;
						text-indent: 10rpx;
					}
				}
				
			}
			
		}
		.submit{
			
			width: 80%;
			margin: 30rpx auto;
			height: 100rpx;
			color: white;
			background-color: #669900;
			border-radius: 60rpx;
		}
	}
</style>
