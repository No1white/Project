import request from './ajax.js'

const baseUrl = 'http://localhost:4000'

export function register(data) {return request(data,baseUrl+"/register",'POST');}//注册
export function getIndexInfo() {return request({},baseUrl+"/album","GET")} //获取首页信息
export function sendPhoneMsg(data){return request(data,baseUrl+'/getvef_code','GET')} //获取验证码
export function reqLogin(data) {return request(data,baseUrl+'/login','POST')}//登录
export function reqGoodsInfo(data){return request({id:data},baseUrl+'/good_detail','GET')} //获取商品详细信息
export function reqMoreGood(data) {return request({page:data},baseUrl+"/more_goods","GET")} //加载更多
export function reqAddAddress(data) {return request(data,baseUrl+"/add_address",'POST')} //添加收货地址
export function getAddresses(data) {return request(data,baseUrl+"/get_address","GET")}  //获取收货地址
export function delAddress(data) {return request(data,baseUrl+"/del_address","GET")} //删除地址

export function seachGoods(data) {return request(data,baseUrl+"/search_goods",'GET')} //搜索关键词
export function reqGoodsList(data) {return request(data,baseUrl+'/goods_list','GET')} //获取搜索词商品列表
export function reqComments(data) {return request(data,baseUrl+'/comments','GET')} //获取商品评论 