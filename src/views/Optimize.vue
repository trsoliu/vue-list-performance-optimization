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
			<Operate v-for="(item,index) in list" :item="item" :index="index" :key="index"></Operate>
		</ul>
	</div>
</template>

<script>
	import list from "./list.js"
	export default {
		name: 'optimize',
		data() {
			return {
				list: list,
				listOp:list
			}
		},
		methods: {
			add(index) {
				let t = this;
				console.log(index, "+");
				t.list[index].num++;
			},
			reduce(index) {
				let t = this;
				console.log(index, "-");
				//				console.log(index, "-", t.list[index].num > 0,t.list[index].num)
				t.list[index].num > 0 ? t.list[index].num-- : 0;
				//				console.log(t.list[index].num)
			}
		},
		components:{
			Operate: function(resolve) {
				require(['@/components/Operate.vue'], resolve)
			}
		}
	}
</script>