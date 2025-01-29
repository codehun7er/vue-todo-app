<script setup lang="ts">
import { TodoItem } from '../global.types'

import TodoEditorInput from './TodoEditorInput.vue'

interface TodoListProps {
	todos: TodoItem[]
	onToggle: (id: number) => void
	onRemove: (id: number) => void
}

defineProps<TodoListProps>()
</script>

<template>
	<ul class="list">
		<li
			v-for="todo in todos"
			:key="todo.id"
			:class="['item', { completed: todo.completed }]"
			@click="onToggle(todo.id)"
		>
			<label class="checkbox">
				<input type="checkbox" :checked="todo.completed" @change="onToggle(todo.id)" />

				<span class="checkmark" />
			</label>

			<TodoEditorInput v-model="todo.text" v-if="!todo.completed" />
			<span class="text" v-else>{{ todo.text }}</span>

			<button class="delete" @click.stop="onRemove(todo.id)">×</button>
		</li>
	</ul>
</template>

<style scoped>
.list {
	list-style: none;
	min-height: 600px;
	position: relative;
}

.item {
	display: flex;
	align-items: center;
	font-size: 10px;
	padding: 1.1em 1.5em;
	background: var(--black);
	border-radius: 1.2em;
	margin-bottom: 1em;
	cursor: pointer;
	transition: all 0.3s ease;
}

.item:hover {
	transform: translateX(4px);
	background: var(--background);
}

.checkbox {
	position: relative;
	display: inline-block;
	width: 24px;
	height: 24px;
	margin-right: 1.25rem;
}

.checkbox input {
	opacity: 0;
	width: 0;
	height: 0;
}

.checkbox input:checked ~ .checkmark {
	background: var(--primary);
	border-color: var(--primary);
}

.checkbox input:checked ~ .checkmark:after {
	display: block;
}

.checkmark {
	position: absolute;
	top: 0;
	left: 0;
	width: 24px;
	height: 24px;
	border: 2px solid #4b5563;
	border-radius: 6px;
	cursor: pointer;
	transition: all 0.3s ease;
}

.checkmark:after {
	content: '';
	position: absolute;
	display: none;
	left: 8px;
	top: 3px;
	width: 6px;
	height: 12px;
	border: solid var(--white);
	border-width: 0 2px 2px 0;
	transform: rotate(45deg);
}

.text {
	flex: 1;
	margin-right: 1rem;
	color: var(--white);
	font-size: 1.1rem;
	border: none;
	background: transparent;
	word-break: break-all;
}

.text.input {
	resize: none;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	overflow: hidden;
}

.item.completed .text {
	text-decoration: line-through;
	color: var(--gray);
}

.delete {
	background: none;
	border: none;
	color: #ef4444;
	font-size: 1.75rem;
	cursor: pointer;
	padding: 0.2rem 0.5rem;
	opacity: 0;
	transition: all 0.3s ease;
}

.delete:hover {
	color: #dc2626;
	transform: scale(1.1);
}

.item:hover .delete {
	opacity: 1;
}
</style>
