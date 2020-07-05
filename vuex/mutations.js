
import {
	RECEIVE_INDEX,
	RECEIVE_GOODINFO,
	JOIN_CART_GOOD,
	RECEIVE_MORE_GOODS,
	INCREMENT_PAGE,
	RESET_PAGE,
	DEL_CART_GOOD,
	ADD_ADDRESS,
	DEL_ADDRESS,
	EDIT_ADDRESS,
	LOGIN,
	GET_ADDRESS,
	SAVE_ADDRESS,
	SEARCH_GOODS,
	RECEIVE_GOODSLIST

	
	} from './mutationTypes.js'

export default {
	//获取首页的数据信息  
	[RECEIVE_INDEX](state,indexData){
		
		state.banners = indexData.data.banners;
		state.album = indexData.data.album;
		state.goodsInfo = indexData.data.goodsInfo;
	},
	//获取商品详细信息
	[RECEIVE_GOODINFO](state,good) {
		
		state.good = good.data;
		
	},
	//获取更多商品
	[RECEIVE_MORE_GOODS](state,data) {
	
		state.goodsInfo = [...state.goodsInfo,...data.data.goodsInfo];
		
	},
	//商品加入购物车
	[JOIN_CART_GOOD](state,shopInfo) {
		let newArr = state.cartGoods;
		let newShop = true;
		let arrIndex = newArr.findIndex((item)=>item.shopId==shopInfo.shopId);
		console.log(shopInfo);
		if(arrIndex != -1) {
			newArr[arrIndex].cartGoods.forEach(item=>{
				console.log(item);
				console.log(shopInfo);
				if(item.id == shopInfo.cartGoods[0].id && item.category == shopInfo.cartGoods[0].category 
				&& item.size.unit == shopInfo.cartGoods[0].size.unit){
					item.num++;
				}else {
					newArr[arrIndex].cartGoods.push(shopInfo.cartGoods[0]);
				}
			})
			
		}else {
			newArr.push(shopInfo);
		}
		state.cartGoods = newArr;
		
			
	},
	
	//删除购物车
	[DEL_CART_GOOD](state,id) {
		let newArr = state.filter((item,index)=>{item.id==id});
		console.log(newArr);
		
	},
	//增加页面
	[INCREMENT_PAGE](state) {
		state.page++;
	},
	//重置页数
	[RESET_PAGE](state) {
		state.page=1;
	},
	[DEL_ADDRESS](state,addresses) {
		state.address = addresses
	},
	[EDIT_ADDRESS] (state,address,index) {
		
		state.address[index] = address
	},
	[LOGIN] (state,userInfo) {
		
		state.userInfo = userInfo
		
	},
	[GET_ADDRESS] (state,addresses) {
		
		state.address = addresses
		
	},
	[SAVE_ADDRESS] (state,addresses) {
		state.address = addresses;
		
	},
	[SEARCH_GOODS] (state,words) {
		
		state.words = words;
	},
	[RECEIVE_GOODSLIST] (state,goods) {
		console.log(goods);
	 	state.goodsList = goods;
		
	} 
	
	
	
}