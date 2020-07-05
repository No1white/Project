


//获取请求方式
function getType (data,method){
	let type = {};
	if(method=='post'|| method=='POST') {
		method = 'post'
		type = {
			method,
			data: {
				...data
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			}
		}
	}
	else {
		method = 'get'
		type = {
			method,
			data:{
				...data
			}
		}
	}
	
	return type;
}
function Request(data ={},url,method){
	
	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			...getType(data,method),
			success: res=>{
				resolve(res)
			},
			fail: err =>{
				reject(err)
			}
		})
	}).catch(err => console.log(err))
}


export default function(data, url, method) {
	
	return Request(data, url, method)
}
