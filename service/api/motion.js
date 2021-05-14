/**
 * 运动api
 */
import {http} from '../../service/request/index.js' //请求拦截

/**
 * 获取目标完成数据
 * @returns {Promise}
 */
export async function getGoalc(){
    let datas = {}
	let config = {}
	//#ifndef MP-WEIXIN
	let e = http.get("/mock/goalc.json",datas,config);
	//#endif
	//#ifdef MP-WEIXIN
	// let e = http.get("goalc",datas,config);
	return await uniCloud.callFunction({
		name: 'goalc',
		data: {
			data: datas
		}
	})
	//#endif
    // return e;
}

/**
 * 获取运动数据
 * @returns {Promise}
 */
export async function getYdList(){
    let datas = {}
	let config = {}
	//#ifndef MP-WEIXIN
	let e = http.get("/mock/ydlist.json",datas,config);
	//#endif
	//#ifdef MP-WEIXIN
	// let e = http.get("ydlist",datas,config);
	return await uniCloud.callFunction({
		name: 'ydlist',
		data: {
			data: datas
		}
	})
	//#endif
    // return e;
}

/**
 * 获取健康数据
 * @returns {Promise}
 */
export async function getJkList(){
    let datas = {}
	let config = {}
	//#ifndef MP-WEIXIN
	let e = http.get("/mock/jklist.json",datas,config);
	//#endif
	//#ifdef MP-WEIXIN
	// let e = http.get("jklist",datas,config);
	return await uniCloud.callFunction({
		name: 'jklist',
		data: {
			data: datas
		}
	})
	//#endif
    // return e;
}