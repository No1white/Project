<template>
	<view class="searchListContainer">
		<view class="searchWrap">
			<input type="text" value="" @input="seachGoods"  placeholder="请输入搜索词"  />
			<span class="iconfont icon-search"></span>
		</view>
		<uni-list v-if="seachWord">
			<uni-list-item v-for="word in words" @click="searchWord(word.goodTitle)" >{{word.goodTitle}}</uni-list-item>
			
		</uni-list>
		<view class="goodsInfoWrap" v-if="!seachWord" >
			<view class="topBarWrap" v-if="true">
				<view class="topBarList">
					<view v-for="(item,index) in topBarList" class="topBarItem " :class="{checked:item.cheked}"  
					@click="cChked(index)">
						{{item.title}}
					</view>
					
				</view>
			</view>
			<view class="seachList">
				<GoodList :goodsInfo="goodsInfo"></GoodList>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import TopBar from '../../components/topBar/topBar.vue'
	import GoodList from '../../components/goodList/goodList.vue'
	export default {
		data(){
			return {
				index:2,
				timer:'',
				search:'',
				seachWord:false,
				topBarList:[
					{
						title:'综合排序',
						cheked:true
					},
					{
						title:'销量排序',
						cheked:false
					},
					{
						title:'价格排序',
						cheked:false
					}
				]
				
			}
		},
		onLoad(options) {
			console.log(options.goodTitle);
			this.$store.dispatch('goodsList',options.goodTitle);
		},
		methods:{
			seachGoods(e){
				this.search= e.detail.value;
				if(this.timer) {
					clearInterval(this.timer);
				}
				if(e.detail.value) {
					this.seachWord=true;
				}
				this.timer = setTimeout(()=>{
					this.$store.dispatch('seachGood',e.detail.value);
				},500)
			},
			compare(property){
			    return(a,b)=>{
					
			        let value1 = a[property];
			        let value2 = b[property];
					
			        return value1 - value2;
			    }
			},
			cChked(index){
				
				this.topBarList.forEach(item=>{
					item.cheked=false;
				})
				this.topBarList[index].cheked = true;
				this.filterGoods(index);
				console.log(this.goodsList);
				console.log(this.$store.state.goodsList);
			},
			filterGoods(index = 0){
				
				switch (index) {
					case 0:
						return this.goodsInfo;
						break;
					case 1:
						return this.goodsInfo.sort(this.compare('sales'))
						break;
					case 2:	
						return this.goodsInfo.sort(this.compare('currentPrice'))
						break;
						
				}
			},
			searchWord(goodTitle){
				console.log(goodTitle)
				this.$store.dispatch('goodsList',options.goodTitle);
			}
		},
		computed:{
			...mapState(
				{
					words:state=>state.words,
					goodsInfo:state=>state.goodsList
				}
			)
		},
		components:{
			TopBar,
			GoodList
		}
	}
</script>

<style lang="less">
	.searchListContainer{
		width: 100%;
		height: 100%;
		.searchWrap{
			width: 95%;
			margin: 10rpx auto;
			background:#f2f2f2 ;
			span{
				font-size: 60rpx;
				position: absolute;
				top: 18rpx;
			}
			input{
				height: 80rpx;
				margin-left: 50rpx;
			}
		}
		.topBarWrap{
			margin-top: 20rpx;
			padding-bottom: 6rpx;
			border-bottom: 1rpx solid #F1F1F1;
			.topBarList{
				display: flex;
				text-align: center;
				
				.topBarItem{
					flex: 1;
				}
				.checked{
						color: #ff0136;
				}
			}
		}
		
	}
</style>
