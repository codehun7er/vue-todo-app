<script setup lang="ts">
import TodoApp from './components/TodoApp.vue'
</script>

<template>
	<div class="app">
		<TodoApp />
	</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	outline: none;
	font-family: 'Roboto', sans-serif;
}

body {
	width: 100vw;
	overflow-x: hidden;
}

.app {
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--background-gradient);
	width: 100%;
	min-height: 100vh;
}
</style>
