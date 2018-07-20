<style lang="scss" scoped="scoped">
	.normal {
		ul {
			margin: 0;
			li {
				width: 100%;
				height: 150px;
				text-align: left;
				list-style-type: none;
				img {
					width: 50%;
				}
				.left_bottom {
					width: 40%;
					display: inline-block;
					>p {
						width: 100%;
						display: inline-block;
						span {
							width: 30px;
							text-align: center;
							border: 1px solid #ccc;
							border-radius: 4px;
						}
					}
					>span {
						display: inline-block;
					}
					.btn {
						width: 30px;
						text-align: center;
						border: 1px solid #ccc;
						border-radius: 4px;
					}
					.add {}
					.reduce {}
				}
			}
		}
	}
</style>
<template>
	<div class="normal">
		普通列表
		<ul>
			<li v-for="(item,index) in list">
				<img :src="item.img" />
				<div class="left_bottom" >
					<p>{{item.name}}</p>
					<p><span v-if="item.num > 0">{{item.num}}整份</span><span v-if="item.num > 0">{{item.num}}半份</span></p>
					<span class="add btn" @click="add(index)">+</span>
					<span class="num">{{item.num}}</span>
					<span class="reduce btn" @click="reduce(index)">-</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import list from "./list.js"
	export default {
		name: 'normal',
		data() {
			return {
				list: list
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
				t.list[index].num > 0 ? t.list[index].num-- : 0;
			}
		}
	}
</script>