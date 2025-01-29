<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

import { FilterType, TodoItem } from '../global.types'

import TodoFilters from './TodoFilters.vue'
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'

const todos = ref<TodoItem[]>([])
const filter = ref<FilterType>(FilterType.ALL)

const addTodo = (text: string) => {
	todos.value.push({
		id: Date.now(),
		text,
		completed: false
	})
}

const removeTodo = (id: number) => {
	todos.value = todos.value.filter(todo => todo.id !== id)
}

const toggleTodo = (id: number) => {
	todos.value = todos.value.map(todo => {
		if (todo.id === id) {
			todo.completed = !todo.completed
		}

		return todo
	})
}

const filteredTodos = computed(() => {
	switch (filter.value) {
		case FilterType.ACTIVE:
			return todos.value.filter(todo => !todo.completed)
		case FilterType.COMPLETED:
			return todos.value.filter(todo => todo.completed)
		default:
			return todos.value
	}
})

const remainingTodos = computed(() => todos.value.filter(todo => !todo.completed).length)

watch(
	todos,
	newVal => {
		localStorage.setItem('todos', JSON.stringify(newVal))
	},
	{ deep: true }
)

onMounted(() => {
	todos.value = JSON.parse(localStorage.getItem('todos') || '[]')
})
</script>

<template>
	<div class="todo">
		<header class="header">
			<h1>Todo App</h1>
		</header>

		<main>
			<TodoInput :addTodo="addTodo" />
			<TodoFilters :currentFilter="filter" :onFilterChange="newFilter => (filter = newFilter)" />
			<TodoList :todos="filteredTodos" :onToggle="toggleTodo" :onRemove="removeTodo" />
		</main>

		<footer class="footer">
			<span>{{ remainingTodos }} todos left</span>
		</footer>
	</div>
</template>

<style scoped>
.todo {
	display: flex;
	flex-direction: column;
	gap: 20px;
	font-size: 10px;
	max-width: 800px;
	width: 100%;
	margin: 3em auto;
	padding: 3em;
	border-radius: 1.5em;
	background: var(--background);
	box-shadow: 0 8px 16px var(--shadow-color);
}

.header h1 {
	font-size: 40px;
	color: var(--white);
	text-align: center;
	text-shadow: 0 2px 4px var(--shadow-color);
}

.footer {
	width: 100%;
	align-self: flex-end;
	font-size: 15px;
	padding-top: 1.5em;
	border-top: 1px solid var(--border-color);
	color: var(--dark-gray);
}
</style>
