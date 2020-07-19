<template>
	<div class="container">
		<div v-if="formDone">
			<h2>Hi there!</h2>
		</div>
		<form v-else>
			<b-progress :value="fieldsDone" :max="info.length"></b-progress>
			<div :class="$style.formWrapper">
				<app-field v-for="field, i in info" 
								:key="i"
								:name="field.name"
								:value="field.value"
								:valid="field.valid"
								@update="onInput(i, $event)"
				></app-field>
			</div>
			<button class="btn btn-primary" :disabled="!formReady" @click.prevent="formConfirmation = true">
				Send Data
			</button>
		</form>
		<b-modal v-model="formConfirmation" title="Check your data!" @ok="formDone = true">
			<table class="table table-bordered">
				<tbody v-for="field in info">
					<tr>
						<td>{{ field.name }}</td>
						<td>{{ field.value }}</td>
					</tr>
				</tbody>
			</table>
		</b-modal>
	</div>
</template>
<script>
	import { BProgress, BModal } from 'bootstrap-vue'
	import AppField from './components/Field.vue';

	export default {
		components: {
			BProgress,
			BModal,
			AppField
		},
		data(){
			return {
				formConfirmation: false,
				formDone: false,
				info: [
					{
						name: 'Name',
						value: 'Dmitry',
						pattern: /^[a-zA-Z ]{2,30}$/
					},
					{
						name: 'Phone',
						value: '',
						pattern: /^[0-9]{7,14}$/
					},
					{
						name: 'Email',
						value: '',
						pattern: /.+/
					},
					{
						name: 'Some Field 1',
						value: '',
						pattern: /.+/
					},
					{
						name: 'Some Field 2',
						value: '',
						pattern: /.+/
					}
				]
			}
		},
		computed: {
			fieldsDone(){
				return this.info.reduce((total, field) => {
					return total + (field.valid ? 1 : 0);
				}, 0);
			},
			formReady(){
				return this.fieldsDone === this.info.length;
			}
		},
		methods: {
			onInput(i, e){
				let field = this.info[i];
				field.value = e.value;
				field.valid = field.pattern.test(field.value);
			}
		},
		created(){
			this.info.forEach(field => {
				this.$set(field, 'valid', field.pattern.test(field.value)); // hw add 1f (120, 125)
			});
		}
	}

</script>
<style module>
	.formWrapper{
		border: 1px solid #000;
		border-radius: 10px;
		padding: 10px;
		margin: 10px 0;
	}
</style>