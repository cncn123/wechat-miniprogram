<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
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
		<swiper class="screen-swiper" style="min-height:600rpx" :class="dotStyle?'square-dot':'round-dot'"
			:indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index" @click="toUrl(item.path)">
				<image :src=" item.url" mode="aspectFit" v-if="item.type=='image'">
				</image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover"
					v-if="item.type=='video'"></video>
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
					url: '/static/pic/北京.png',
					path: '/pages/edu/edu'
				}, {
					id: 1,
					type: 'image',
					url: '/static/pic/上海.png',
					path: '/pages/edu/edu'
				}, {
					id: 2,
					type: 'image',
					url: '/static/pic/深圳.png',
					path: '/pages/edu/edu'
				}, {
					id: 3,
					type: 'image',
					url: '/static/pic/西安.png',
					path: '/pages/edu/edu'
				}, {
					id: 4,
					type: 'image',
					url: '/static/pic/广州.png',
					path: '/pages/edu/edu'
				}, {
					id: 5,
					type: 'image',
					url: '/static/pic/南京.png',
					path: '/pages/edu/edu'
				}, {
					id: 6,
					type: 'image',
					url: '/static/pic/天津.png',
					path: '/pages/edu/edu'
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
			},
			toUrl(url) {
				this.$Common.navigateTo(url);
			}

		}
	}
</script>

<style>

</style>
