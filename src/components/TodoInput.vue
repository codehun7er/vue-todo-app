<script setup lang="ts">
import { ref } from 'vue'

interface TodoInputProps {
	addTodo: (text: string) => void
}

const { addTodo } = defineProps<TodoInputProps>()
const newTodo = ref('')

const handleSubmit = () => {
	if (newTodo.value.trim() === '') return

	addTodo(newTodo.value.trim())
	newTodo.value = ''
}
</script>

<template>
	<form class="form" @submit.prevent="handleSubmit">
		<input class="input" type="text" v-model="newTodo" placeholder="What needs to be done?" />

		<button class="button" type="submit">Add Todo</button>
	</form>
</template>

<style scoped>
.form {
	display: flex;
	gap: 10px;
	font-size: 10px;
	margin-bottom: 2em;
}

.input {
	flex: 1;
	font-size: 18px;
	padding: 0.8em 1.1em;
	border: 2px solid var(--border-color);
	border-radius: 0.8em;
	background: var(--black);
	color: var(--white);
	transition: 0.3s ease all;
}

.input::placeholder {
	color: var(--gray);
}

.input:focus {
	outline: none;
	border-color: var(--primary);
	box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

.button {
	font-size: 16px;
	padding: 1em 2em;
	background: #4f46e5;
	color: var(--white);
	border: none;
	border-radius: 0.8em;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s ease;
}

.button:hover {
	background: var(--primary);
	transform: translateY(-1px);
}
</style>
