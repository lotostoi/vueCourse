<template>
	<div class="form-group">
		<label>
			{{ name }}
			<transition v-if="activated" name="icon" mode="out-in" appear appear-active-class="fadeIn">
				<fa-icon :class="icon.class" :name="icon.name" :key="icon.name"></fa-icon>
			</transition>
		</label>
		<input type="text" class="form-control" :value="value" @input="onInput">
	</div>
</template>
<script>
	import FaIcon from 'vue-awesome/components/Icon'
	import 'vue-awesome/icons/check-circle'
	import 'vue-awesome/icons/exclamation-circle'

	export default {
		components: {
			FaIcon
		},
		props: ['name', 'value', 'valid'],
		data(){
			return {
				activated: this.value != ''
			}
		},
		computed: {
			/*activated(){
				return this.value != ''
			},*/
			icon(){
				return {
					class: this.valid ? 'text-success' : 'text-danger',
					name: this.valid ? 'check-circle' : 'exclamation-circle'
				}
			}
		},
		methods: {
			onInput(e){
				this.activated = true;
				this.$emit('update', { value: e.target.value.trim() });
			}
		}
	}
</script>
<style>
	.icon-enter-active{
		animation: flipInY 0.3s;
	}

	.icon-leave-active{
		animation: flipOutY 0.3s;
	}

	.fadeIn{
		animation: fadeIn 0.3s;
	}

	@keyframes flipInY{
		from{transform: rotateY(-90deg)}
		to{transform: rotateY(0deg)}
	}

	@keyframes flipOutY{
		from{transform: rotateY(0deg)}
		to{transform: rotateY(90deg)}
	}

	@keyframes fadeIn{
		from{opacity: 0;}
		to{opacity: 1;}
	}
</style>