<template>
	<div class="errCard bg-info">
		<h2 class="text-success p-2">訊息</h2>
		<div class="text-success p-2">{{ errText }}</div>
		<button type="button" style="position: relative; top: 20%;
          left: 65%;" class="btn btn-outline-primary text-white" @click="$emit('active')">
			關閉
		</button>
	</div>
</template>
<script setup>
	defineProps({
		errText: String
	})

	defineEmits(['active'])
</script>
<style lang="scss">
	.errCard {
		width: 250px;
		height: 200px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 10px;
	}
</style>