<template>
	<view class="container">
		
		<view class="addressItem" v-for="(add,index) in address">
			<view class="userInfo">
				<text class="userName">{{add.userName}}</text>
				<text class="phoneNum">{{add.userPhone}}</text>
			</view>
			<view class="addressInfo">
				<text>{{add.detailAddress}}</text>
			</view>
			<view class="btnGroup">
				<view class="defaultAddress">
					<label class="radio"><radio value="r1" color="#007AFF" :checked="add.defaultAddress" />默认地址</label>
				</view>
				<view class="btn"  >
					<view class="editAddress" @click="editAddress(add.userName)">
						<span class="iconfont icon-bianji1"></span>
						编辑
					</view>
					<view class="delAddress" @click="delAddress(add._id)">
						<span class="iconfont icon-shanchu"></span>
						删除
					</view>
				</view>
			</view>
		</view>
		
		<button type="default" class="addAddress" @click="goToAdd" >添加收获地址</button>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import {EDIT_ADDRESS,DEL_ADDRESS} from '../../vuex/mutationTypes.js'
 	export default {
		data() {
			return {
				userInfo:{
					_id:''
				}
			}
		},
		onLoad:function(){
			console.log(this.$store.state.userInfo._id);
			console.log(this.userInfo._id);
			uni.getStorage({
				key:'userInfo',
				success:(res)=>{
					console.log(res.data);
					if(res.data) {
						console.log(res.data._id);
						this.$store.dispatch("getAddress",res.data._id);
						this.userInfo._id=res.data._id;
					
					}
				}
			})
			
			
		},
		onShow() {
			
		},
		computed:{
			...mapState(['address'])
		},
		methods:{
			editAddress(userName1){
				this.address.forEach((item,index)=>{
					if(item.userName==userName1) {
						uni.navigateTo({
							url:'../addAddress/addAddress?index='+index
						})
					}
				})
			},
			delAddress(sId) {
				console.log("sid="+sId);
				uni.showModal({
				    title: '提示',
				    content: '确定删除地址',
				    success:  (res) => {
						
				        if (res.confirm) {
							let obj = {
								_id:this.userInfo._id,
								sId
							};
							
				           this.$store.dispatch("delAddress",obj)
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			goToAdd(){
				console.log("goto");
				
				uni.redirectTo({
				   url:'../addAddress/addAddress'
				});
			}
		}
	}
</script>

<style lang="less">
	.container{
		width: 100%;
		height: 100%;
		background: #f4f4f4;
		padding-bottom: 50rpx;
		.noneAddress{
			
			text-align: center;
		}
		.addressItem{
			width: 100%;
			height: 260rpx;
			margin-bottom: 30rpx;
			
			
			background: white;
			
			.userInfo{
				margin-left: 20rpx;
				overflow: hidden;
				.userName {
					float: left;
				}
				.phoneNum{
					float: right;
					margin-right: 20rpx;
					
				}
			}
			.addressInfo{
				
				margin-top: 20rpx;
				padding-left: 20rpx;
				padding-right: 20rpx;
				border-bottom: 1rpx solid #666666;
			}
			.btnGroup{
				margin-left: 20rpx;
				margin-top: 20rpx;
				overflow: hidden;
				.defaultAddress{
					float: left;
					.radio{
						
					}
				}
				.btn{
					float: right;
					margin-right: 20rpx;
					view{
						display: inline-block;
					}
					.editAddress{
						margin-right: 10rpx;
					}
				}
			}
			
			
		}
		.addAddress{
			position: fixed;
			width: 100%;
			bottom: 0px;
			background: linear-gradient(120deg,#ff8d01,#ff5501);
			color: white;
			text-align: center;
		}
	}
</style>
