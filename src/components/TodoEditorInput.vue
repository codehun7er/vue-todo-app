<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'

interface TodoEditInputProps {
	modelValue: string
}

defineProps<TodoEditInputProps>()
const emit = defineEmits<{ 'update:modelValue': [string] }>()
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const adjustHeight = () => {
	if (textareaRef.value) {
		textareaRef.value.style.height = 'auto'
		textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`
	}
}

const autoResize = (event: Event) => {
	const target = event.target as HTMLTextAreaElement
	adjustHeight()
	emit('update:modelValue', target.value)
}

onMounted(async () => {
	await nextTick()
	adjustHeight()
})
</script>

<template>
	<textarea
		ref="textareaRef"
		class="text"
		:value="modelValue"
		rows="1"
		@click.stop
		@input="autoResize"
	/>
</template>

<style scoped>
.text {
	flex: 1;
	margin-right: 1rem;
	color: var(--white);
	font-size: 1.1rem;
	border: none;
	background: transparent;
	word-break: break-all;
	resize: none;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	overflow: hidden;
}
</style>
