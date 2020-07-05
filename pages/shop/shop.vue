<template>
	<view class="shopContainer">
		<view class="shopInfo">
			<view class="shopTitle">
				简约超市
			</view>
			<view class="fans">
				粉丝：32.3万
			</view>
			<view class="operationBar">
				<span class="iconfont icon-search"></span>
				<text class="recommend">推荐</text>
				<text class="goods">宝贝</text>
				<text class="lastGoods">新品</text>
				<text class="activity">活动</text>
			</view>
			<view class="mark">
				
			</view>
		</view>
		<view class="goodsWrap">
			<text class="guessLike">猜你喜欢</text>
			<Goods :goodsInfo="goodsInfo"></Goods>
		</view>
		<view class="totalPrice">
			<text class="totalPrice">总价￥47.0</text>
			<text class="discount">优惠￥2.0</text>
			<text class="pay">实付款￥47.0</text>
		</view>
	</view>
</template>

<script>
	import Goods from '../../components/goods/goods.vue'
	export default{
		data(){
			return {
				goodsInfo:[
					{
					    "id": "4",
					    "goodTitle": "哈密瓜新鲜一箱火焰山新疆哈密瓜10斤水果吐鲁番西洲蜜25号级包邮",
					    "sales": 23242,
					    "currentPrice": 43.3,
					    "oldPrice": "58.4",
					    "picUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590462847232&di=a9d3df55da5a34dc7b144265c00a5a0e&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn12%2F600%2Fw900h500%2F20180410%2F5a50-fyvtmxe9338969.jpg"
					  },
					  {
					    "id": "5",
					    "goodTitle": "越南黑美人西瓜8-10斤新鲜当季水果薄皮黑籽甜西瓜批发包邮",
					    "sales": 2342,
					    "currentPrice": 33.3,
					    "oldPrice": "43.4",
					    "picUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590462870187&di=377672aedf3429a4d1199bdadcbeb8b5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180524%2F95e445560f9c4f5494aa0a304635ffce.jpeg"
					  },
					  {
					    "id": "6",
					    "goodTitle": "水蜜桃子3斤应当季孕妇水果现摘脆甜桃整箱5批发包邮",
					    "sales": 4242,
					    "currentPrice": 31.3,
					    "oldPrice": "39.4",
					    "picUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590462899783&di=ba7a74a5324082839fc91746306ce1a9&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180727%2Fb18cf51189614c35a502b4591d36e806.jpeg"
					  },
					  {
					      "id": "7",
					      "goodTitle": "哈密瓜新鲜一箱火焰山新疆哈密瓜10斤水果吐鲁番西洲蜜25号级包邮",
					      "sales": 23242,
					      "currentPrice": 43.3,
					      "oldPrice": "58.4",
					      "picUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590462847232&di=a9d3df55da5a34dc7b144265c00a5a0e&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn12%2F600%2Fw900h500%2F20180410%2F5a50-fyvtmxe9338969.jpg"
					    },
					    {
					      "id": "8",
					      "goodTitle": "越南黑美人西瓜8-10斤新鲜当季水果薄皮黑籽甜西瓜批发包邮",
					      "sales": 2342,
					      "currentPrice": 33.3,
					      "oldPrice": "43.4",
					      "picUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590462870187&di=377672aedf3429a4d1199bdadcbeb8b5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180524%2F95e445560f9c4f5494aa0a304635ffce.jpeg"
					    },
					    {
					      "id": "9",
					      "goodTitle": "水蜜桃子3斤应当季孕妇水果现摘脆甜桃整箱5批发包邮",
					      "sales": 4242,
					      "currentPrice": 31.3,
					      "oldPrice": "39.4",
					      "picUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590462899783&di=ba7a74a5324082839fc91746306ce1a9&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180727%2Fb18cf51189614c35a502b4591d36e806.jpeg"
					    }
				]
			}
		},
		methods:{
			
		},
		components:{
			Goods
		}
	}
</script>

<style lang="less">
	.shopContainer{
		width: 100%;
		height: 100%;
		.shopInfo{
			width: 100%;
			height: 300rpx;
			color: white;
			margin-top: 30rpx;
			
			.shopTitle{
				margin-left: 30rpx;
				font-size: 60rpx;
			}
			.fans{
				margin-left: 30rpx;
				font-size: 40rpx;
			}
			.operationBar{
				margin-left: 30rpx;
				display: flex;
				span{
					font-size: 80rpx;
				}
				text{
					flex: 1;
					font-size: 60rpx;
				}
				
			}
			.mark{
				width: 100%;
				height: 300rpx;
				position: absolute;
				left: -10%;
				top: 0rpx;
				left: 0rpx;
				z-index: -1;
				background: url(../../static/avatar1.jpg);
				background-position: center center; 
				filter: blur(30rpx);
			}
		}
		.goodsWrap{
			.guessLike{
				font-size: 40rpx;
				margin-left: 20rpx;
				margin-top: 30rpx;
			}
		}
	}
</style>
