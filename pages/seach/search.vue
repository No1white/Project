<template>
	<view class="searhContainer">
		<view class="inputWrap">
			<input type="text"  value="" @input="seachGoods" placeholder="请输入搜索词"  />
			<span class="iconfont icon-search"></span>
			<button type="default" @click="goTo">搜索</button>
		</view>
		<uni-list v-if="hisTorySwitch">
			<uni-list-item v-for="word in words" @click="goToSeachList(word.goodTitle)">{{word.goodTitle}}</uni-list-item>
			
		</uni-list>
		
		<view class="hisStory" v-if="!hisTorySwitch">
			<view class="searchHistory">
				<text>历史搜索</text>
				<view class="historyContent">
					<view class="hItem" v-for="word in historyWords">
						{{word}}
					</view>
					
				</view>
			</view>
			<view class="searchHistory">
				<text>热门搜索</text>
				<view class="historyContent">
					<view class="hItem" v-for="hot in hotWords">
						{{hot}}
					</view>
				
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
		
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	
	export default{
		data(){
			return {
				timer:'',
				searchWord:'',
				hotWords:['纸巾','面包','蛋糕','笔记本电脑','哈密瓜'],
				historyWords:['笔记本电脑','笔记本','台式电脑','西瓜','短袖'],
				hisTorySwitch:false
			}
		},
		onLoad() {
			
		},
		watch:{
			'this.$store.state.words'(val){
				console.log("改变")
				
				this.words = this.$store.state.words
			},
			
			        
	

		},
		computed:{
			 ...mapState({
				 words:state=>state.words
			 }),
			 
			// getWords(){
			// 	console.log("chufa");
			// 	console.log(this);
			// 	console.log(this.$store.state.words);
			// 	return this.$store.state.words
			// }
		},
		methods:{
			seachGoods(e){
				this.searchWord =e.detail.value;
				if(this.timer) {
					clearInterval(this.timer);
				}
				if(e.detail.value) {
					this.hisTorySwitch=true;
				}
				this.timer = setTimeout(()=>{
					this.$store.dispatch('seachGood',e.detail.value);
				},500)
			},
			goTo(){
				
				uni.redirectTo({
					url:'../seachList/seachList?goodTitle='+this.searchWord
				})
			},
			goToSeachList(goodTitle){
				
				uni.redirectTo({
					url:'../seachList/seachList?goodTitle='+goodTitle
				})
			}
		},
		 components: {uniList,uniListItem}
	}
</script>

<style lang="less">
	.searhContainer{
		width: 100%;
		height: 100%;
		.inputWrap{
			margin-left: 20rpx;
			margin-top: 20rpx;
			display: flex;
			input{
				flex: 5;
				background: #f2f2f2;
				margin-left: 50rpx;
				height: 70rpx;
			}
			span{
				background: #f2f2f2;
				font-size: 60rpx;
				position: absolute;
			}
			button{
				flex: 1;
				background: #ff0136;
				color: white;
				line-height: 70rpx;
				height: 70rpx;
			}
		}
		.searchHistory{
			padding-left: 20rpx;
			padding-top: 20rpx;
			text{
				margin-bottom: 30rpx;
			}
			.historyContent{
				display: flex;
				flex-wrap: wrap;
				view{
					padding: 16rpx;
					margin:20rpx;
					background: #f5f5f5;
				}
			}
		}
	}
</style>
