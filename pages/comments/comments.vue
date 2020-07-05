<template>
	<view class="commentContainer">
		<view class="topBar">
			<view  v-for="(item,index) in topBarList" :key="index" :class="item.checked==true?'active':''" 
			@click="cTopBar(index)">
				{{item.title}}
			</view>
			
		</view>
		<view class="commentList">
			<view class="commentItem" v-for="comment in filterComments" :key="comment.userName">
				<view class="userInfo">
					<image class="avatar" :src="comment.avatar" mode="widthFix"></image>
					<text class="userTitle">{{comment.userName}}</text>
				</view>
				<view class="timeAndGoodInfo">
					<text class="time">{{comment.Time}}</text>
					<text class="goodInfo">{{comment.buyInfo.categoryType}} {{comment.buyInfo.category}}</text>
					<text class="goodInfo"> {{comment.buyInfo.goodUnit}} {{comment.buyInfo.size}}</text>
				</view>
				<view class="comment">
					<text class="content">{{comment.content}}</text>	
					<view class="imageWrap" >
						<image v-for="pic in comment.picUrls" :key="pic" :src="pic"  mode="widthFix"></image>
					</view>
				</view>
				<view class="addReview" v-if="comment.addReview">
					追评：{{comment.addReview}}
				</view>
				<view class="watchTimes">
					浏览：3232
				</view>
				
			</view>
			
				
			
			
				
			</view>
		</view>
	</view>
</template>

<script>
	import {reqComments} from '../api/pages.js'
	export default{
		data(){
			return {
				topBarList:[
					{
					title:'全部',
					checked:true
					},
					{
					title:'追评',
					checked:false
					},
					{
					title:'有图',
					checked:false
					}
				],
				comments:[]
			}
		},
		onLoad(options) {
			reqComments({id:options.id}).then((res)=>{
				
				this.comments= res.data.comments;
			})
		},
		computed:{
			filterComments:function(){
				let cIndex =0;
				
				this.topBarList.forEach((item,index)=>{
					if(item.checked) {
						cIndex = index;
					}
				})
				switch(cIndex) {
					case 0:
					return this.comments;
					case 1:
					return this.comments.filter(item=>{
						
						return item.addReview !=""
					});
					case 2:
					return this.comments.filter(item=>{
						return item.picUrls.length>0;
					})
				}
			}
		},
		methods:{
			cTopBar(index) {
				this.topBarList.forEach(item=>{
					item.checked=false;
				})
				this.topBarList[index].checked=true;
				
			}
			
		}
	}
</script>

<style lang="less">
	.commentContainer{
		width: 100%;
		height: 100%;
		background: #f5f5f5;
		.topBar{
			width: 100%;
			height: 120rpx;
			display: flex;
			background: white;
			view{
				height: 80rpx;
				line-height: 80rpx;
				border: 2rpx solid #ff5501;
				color: black;
				margin-left: 20rpx;
				margin-top: 20rpx;
				padding: 0rpx 60rpx;
				font-size: 30rpx;
				
				border-radius: 50rpx;
			}
			.active{
				color: white;
				background: #ff5501;
			}
		}
		.commentList{
			width: 100%;
			height: auto;
			margin-top: 10rpx;
			background: white;
			.commentItem{
				padding: 20rpx;
				.userInfo{
					height: 80rpx;
					.avatar{
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
						vertical-align: middle;
					}
					.userTitle{
						margin-left: 20rpx;
					}
				}
				.timeAndGoodInfo{
					margin: 20rpx 0px;
					color: #808080;
					font-size: 30rpx;
					.time{}
				}
				.comment{
		
					.content{
						
					}
					.imageWrap{
						margin: 20rpx 0rpx;
						display: flex;
						image{
							flex: 1;
							margin-left: 20rpx;
						}
					}
				}
				.watchTimes{
					color: #999999;
				}
			}
		}
	}
</style>
