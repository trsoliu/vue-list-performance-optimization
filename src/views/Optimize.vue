<style lang="scss" scoped="scoped">
	.optimize {
		ul {
			margin: 0;
		}
	}
</style>
<template>
	<div class="optimize">
		优化列表
		<ul>
			<Operate v-for="(item,index) in listOriginal" :item="item" :index="index" :key="index"></Operate>
		</ul>
	</div>
</template>

<script>
	import list from "./list.js"
	export default {
		name: 'optimize',
		data() {
			return {
				listOriginal: JSON.parse(JSON.stringify(list)),//仅做初次渲染使用
				listOperate:JSON.parse(JSON.stringify(list))//组件回调后操作，用来做渲染之外的业务处理
			}
		},
		components:{
			Operate: function(resolve) {
				require(['@/components/Operate.vue'], resolve)
			}
		}
	}
</script>