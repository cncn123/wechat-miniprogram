<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true"><block slot="backText">返回</block>
			<block slot="content">轮播图</block>
		</cu-custom>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-title text-pink"></text> 全屏限高轮播
			</view>
			<view class="action">
				<switch @change="DotStyle" :class="dotStyle?'checked':''" :checked="dotStyle?true:false"></switch>
			</view>
		</view>
		<swiper class="screen-swiper" style="min-height:600rpx" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: '/static/pic/北京.png'
				}, {
					id: 1,
					type: 'image',
					url: '/static/pic/上海.png',
				}, {
					id: 2,
					type: 'image',
					url: '/static/pic/深圳.png'
				}, {
					id: 3,
					type: 'image',
					url: '/static/pic/西安.png'
				}, {
					id: 4,
					type: 'image',
					url: '/static/pic/广州.png'
				}, {
					id: 5,
					type: 'image',
					url: '/static/pic/南京.png'
				}, {
					id: 6,
					type: 'image',
					url: '/static/pic/南京.png'
				}],
				dotStyle: false
			};
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			}
			
		}
	}
</script>

<style>

</style>
