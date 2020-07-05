
import {
	getIndexInfo,
	reqGoodsInfo,
	reqMoreGood,
	reqAddAddress,
	getAddresses,
	delAddress,
	seachGoods,
	reqGoodsList
	} from '../pages/api/pages.js'
import {
	RECEIVE_INDEX,
	RECEIVE_GOODINFO,
	JOIN_CART_GOOD,
	RECEIVE_MORE_GOODS,
	ADD_ADDRESS,
	SAVE_ADDRESS,
	GET_ADDRESS,
	DEL_ADDRESS,
	SEARCH_GOODS,
	RECEIVE_GOODSLIST
	} from './mutationTypes.js'

export default {
	//异步获取首页信息
	async getIndexInfo({commit}) {
		
		const result = await getIndexInfo();
		
		commit(RECEIVE_INDEX,{data:result.data})
	},
	//异步获取商品详细信息
	async getGoodInfo({commit},id) {
		const result = await reqGoodsInfo(id);
		
		commit(RECEIVE_GOODINFO,{data:result.data});
	},
	//异步获取更多商品
	async getMoreGoods({commit},page) {
	
		const result = await reqMoreGood(page);
		console.log(result);
		console.log(result.data.goodsInfo);
		if(result.data.goodsInfo.length ==0) {
			uni.showToast({
				title:"已经到底了",
				icon:"none"
			})
		}
		commit(RECEIVE_MORE_GOODS,{data:result.data});
		
	},
	//异步保存收货地址信息
	async saveAddress({commit},address) {
	console.log(address);
		const result = await reqAddAddress(address);
		
		commit(SAVE_ADDRESS,{addresses:result.data.user.swiperData});
		
	},
	//异步获取地址信息
	async getAddress({commit},_id) {
	
		uni.showToast({
			title:"加载中",
			icon:"loading",
			duration:10000
		})
		const result = await getAddresses({_id});
		if(result) {
			uni.hideToast();
		}
		//对默认地址进行排序
		console.log(result);
		result.data.addresses.forEach((item,index)=>{
			if(item.defaultAddress) {
				let temp = result.data.addresses[0];
				result.data.addresses[0] = item;
				result.data.addresses[index]= temp;
			}
		})
		console.log(result);
		
		commit(GET_ADDRESS,result.data.addresses);
		
	},
	async delAddress({commit},obj) {
		
		const result = await delAddress(obj);
		
		result.data.addresses.forEach((item,index)=>{
			if(item.defaultAddress) {
				let temp = result.data.addresses[0];
				result.data.addresses[0] = item;
				item = temp;
			}
		})
		commit(DEL_ADDRESS,result.data.addresses);
		// console.log(result);
	},
	async seachGood ({commit},word) {
		const result = await seachGoods({goodTitle:word});
		console.log(result);
		commit(SEARCH_GOODS,result.data.goods);
	},
	async goodsList ({commit},word) {
		
		const result = await reqGoodsList({goodTitle:word});
	
		commit(RECEIVE_GOODSLIST,result.data.goodsList);
	},
	
	//加入购物车
	joinCartGood({commit},good) {
		commit(JOIN_CART_GOOD,good);
	}
}