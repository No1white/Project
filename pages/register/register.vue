<template>
	<view class="registerWrap">
		<view class="logo">
			<text>简购</text>
		</view>
		<view class="formWrap">
			<form @submit="register" @reset="">
				<view class="inputGroup">
					<view class="inputItem">
						<span class="iconfont icon-shouji"></span>
						<input type="text" value="" placeholder="请输手机号" name="phoneNum" v-model="phoneNum" class="phone"  />
						
					</view>
					<view class="inputItem">
						<span class="iconfont icon-iconfont17"></span>
						<input type="text" value="" placeholder="请输入验证码" name="vefCode" class="codeInput" v-model="vefCode" />
						<button type="primary" class="vefCode" @click="getCode" :disabled="Code">
							{{time !=0 ? time+'s':"获取验证码"}}
							<!-- 获取验证码 -->
						</button>
					</view>
					<view class="inputItem">
						<span class="iconfont icon-iconfont17"></span>
						<input type="password" value="" placeholder="请输入密码" name="password" v-model="password" class="password" />
						
					</view>
				</view>
				
				<button form-type="submit" class="register">注册</button>
			
			</form>
		</view>
	</view>
</template>

<script>
	import {register,sendPhoneMsg} from '../api/pages.js'
	export default {
		data(){
			return{
				phoneNum:"",
				password:"",
				vefCode:"",
				Code:false,
				time:0,
				timer:{}
			}
		},
		methods:{
			login(){
				console.log(this.$data);
				console.log(this.username);
			},
			isPhone (callback) {
				const reg = /^[1][3,4,5,7,8][0-9]{9}$/
				if (reg.test(this.phoneNum)) {
					callback(this.phoneNum)
				} else {
					uni.showToast({ title: "请输入正确的手机号", icon: "none" })
				}
			},
			getCode(){
				this.isPhone((phoneNum)=>{
					let phone = {"phoneNum":phoneNum}
					sendPhoneMsg(phone).then(res=>{

						clearInterval(this.timer)
						this.Code =true;
						this.time=60;
						this.timer = setInterval(()=>{
							this.time--;
							if(this.time<=0){
								this.Code=false;
								this.time=0;
								clearInterval(this.timer);
							}
						},1000)
					})
					
					
				})
			},
			register(e){
				if(this.phoneNum == ''){
					uni.showToast({
						title:'请填写手机号',
						duration:2000,
						icon:"none",
					})
					return;
				}
				if(this.vefCode == '' ) {
					uni.showToast({
						title:'请填写验证号',
						duration:2000,
						icon:"none",
					})
					return;
				}else if( this.password == '') {
					uni.showToast({
						title:'请填写密码',
						duration:2000,
						icon:"none",
					})
					return;
				}
				
				register({"phoneNum":this.phoneNum,"password":this.password,"vefCode":this.vefCode}).then(res=>{
					if(res.data.code ==1) {
						uni.showToast({
							title:res.data.msg,
							duration:2000,
							icon:"none",
						})
					}
					if(res.data.code == 0){
						uni.showToast({
							title:res.data.msg,
							duration:2000,
							icon:"none",
						})
						uni.redirectTo({
							url:'/pages/login/login'
						})
					}
					
				});
				
			}
		}
	}
	
</script>

<style lang="less" scoped>
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
			width: 80% !important;
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
					.vefCode{
						background-color: #669900;
						
						
					}
					input{
						flex: 5;
						font-size: 35rpx;
						display: inline-flexbox;
						height: 80rpx;
						text-indent: 10rpx;
					}
					.codeInput{
						margin-left: 20rpx;
						
					}
					.icon-iconfont17{
						
					}
				}
			}
			.register{
				margin-top: 30rpx;
				height: 100rpx;
				font-size: 50rpx;
				line-height: 100rpx;
				color: white;
				background-color: #669900;
				border-radius: 60rpx;
			}
		}
	}
</style>
