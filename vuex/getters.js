
export default {
	priceRange:state => (id) =>{
		let min,max;
		if(state.good.id == id) {
			
			console.log(state.good.priceList);
			if(state.good.priceList!=null) {
			
				min = Math.min.apply(null,state.good.priceList)
				max = Math.max.apply(null,state.good.priceList)
			}
		}
		return {min,max}
	},
	getDefaultAddress:state=>{
		let obj= {};
		state.address.forEach(item=>{
			if(item.defaultAddress) {
				obj=item;
			}
		})
		return obj;
	}
}