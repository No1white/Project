<template>
	<view class="container">
		<view class="addressWrap">
			<view class="userInfo">
				<view class="userName">
					<text>收件人</text>
					<input type="text" placeholder="请输入收件人姓名" v-model="address.userName" />
				</view>
				<view class="userPhone">
					<text>联系电话</text>
					<input type="text" placeholder="请输入收件人号码" v-model="address.userPhone" />
				</view>
			</view>
			<view class="address">
				<view class="region">
					<text>所在区域</text>
					<input type="text" placeholder="请输入收件人所在地址"  v-model="address.region"/>
				</view>
				<view class="detailAddress">
					  <textarea v-model="address.detailAddress" auto-height placeholder="请输入详细地址" />
				</view>
			</view>
			<view class="uni-list">
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-list-cell-db" >设置为默认地址</view>
					<switch :checked="address.defaultAddress"  @click="()=>(address.defaultAddress=!address.defaultAddress)" color="#007AFF"/>
				</view>
				
			</view>
		</view>
		<button class="saveAddress" @click="saveAddress">保存</button>
		   
	</view>
</template>

<script>
		import {ADD_ADDRESS,EDIT_ADDRESS,SAVE_ADDRESS} from '../../vuex/mutationTypes.js'
		
		export default {
			data() {
				return {
					userInfo:{
						_id:""
					},
					address:{
						userName:'',
						userPhone:'',
						region:'',
						detailAddress:'',
						defaultAddress:true,
						_id:''
					},
					edit:false,
					addressIndex:0
					
					
				}
			},
			onLoad:function(options){
				if(options.index!=null) {
					console.log(options.index);
					this.edit=true;
					this.address=this.$store.state.address[options.index];
					this.addressIndex= options.index;
				}
				uni.getStorage({
					key:'userInfo',
					success:(res)=>{
						console.log(res.data);
						if(res.data) {
							this.userInfo._id=res.data._id;
						
						}
					}
				})
				
			},
			methods:{
				saveAddress() {
					
					if(this.edit) {
						console.log("edit");
						this.$store.commit(EDIT_ADDRESS,this.address,this.addressIndex)
						this.edit=false;
						uni.navigateTo({
							url:"../address/address"
						})
					}else {
						// this.$store.commit(ADD_ADDRESS,this.address)
						// uni.navigateTo({
						// 	url:"../address/address"
						// })
						
						this.address._id=this.userInfo._id;
						console.log(this.$store.state.userInfo);
						this.$store.dispatch("saveAddress",this.address);
						
						uni.redirectTo({
						   url:"../address/address"
						});
					}
				}
			}
		}
</script>

<style lang="less">
	.container{
		width: 100%;
		height: 100%;
		background: #f1f1f1;
		.addressWrap{
			width: 100%;
			height: 500rpx;
			background: white;
			.userInfo{
				padding: 20rpx 40rpx;
				.userName{
					margin-top: 20rpx;
					display: flex;
					test{
						flex: 1;
						
					}
					input{
						margin-left: 20rpx;
						flex: 1;
					}
				}
				.userPhone{
					margin-top: 20rpx;
					display: flex;
					test{
						flex: 1;
						
					}
					input{
						margin-left: 20rpx;
						flex: 1;
					}
				}
			}
			.address{
				margin-left: 40rpx;
				.region{
					margin-top: 20rpx;
					display: flex;
					test{
						flex: 1;
						
					}
					input{
						margin-left: 20rpx;
						flex: 1;
					}
				}
				.detailAddress{
					margin-top: 20rpx;
				}
			}
			.uni-list{
				.uni-list-cell{
					overflow: hidden;
					margin-top: 90rpx;
					margin-left: 40rpx;
					view{
						float: left;
					}
					switch{
						float: right;
					}
				}
			}
		}
		.saveAddress{
			margin-top: 200rpx;
			background: #007aff;
			color: white;
		}
	}
</style>
