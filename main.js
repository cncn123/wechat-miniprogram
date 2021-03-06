import Vue from 'vue'
import App from './App'
import Common from './static/js/common.js'
import Config from './static/js/config.js'

Vue.prototype.$Common = Common
Vue.prototype.$Config = Config

//顶部导航
import cuCustom from './lib/colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
//首页
import home from './pages/home/home.vue'
Vue.component('home',home)
//运动
import motion from './pages/motion/motion.vue'
Vue.component('motion',motion)
//设备（蓝牙）
import ble from './pages/ble/ble.vue'
Vue.component('ble',ble)
//目标
import goal from './pages/goal/goal.vue'
Vue.component('goal',goal)
//目标
import edu from './pages/edu/edu.vue'
Vue.component('edu',edu)
//数据
import index from './pages/index/index.vue'
Vue.component('index',index)
//我的
import mine from './pages/mine/mine.vue'
Vue.component('mine',mine)

import {http} from './service/request/index.js' //请求拦截
Vue.prototype.$http=http

import store from './store/index.js' //状态管理
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
