<script setup lang="ts">
import { FilterType } from '../global.types'

interface TodoFiltersProps {
	currentFilter: FilterType
	onFilterChange: (filter: FilterType) => void
}

defineProps<TodoFiltersProps>()
</script>

<template>
	<div class="filters">
		<button
			:class="{ active: currentFilter === FilterType.ALL }"
			@click="onFilterChange(FilterType.ALL)"
		>
			All
		</button>

		<button
			:class="{ active: currentFilter === FilterType.ACTIVE }"
			@click="onFilterChange(FilterType.ACTIVE)"
		>
			Active
		</button>

		<button
			:class="{ active: currentFilter === FilterType.COMPLETED }"
			@click="onFilterChange(FilterType.COMPLETED)"
		>
			Completed
		</button>
	</div>
</template>

<style>
.filters {
	display: flex;
	justify-content: center;
	gap: 10px;
	font-size: 10px;
	margin-bottom: 3em;
}

.filters button {
	font-size: 16px;
	padding: 0.75em 1.5em;
	background: #1f2937;
	color: var(--dark-gray);
	border-radius: 0.5em;
	border: none;
	cursor: pointer;
	transition: 0.3s ease all;
}

.filters button:hover {
	background: #374151;
	color: var(--white);
}

.filters button.active {
	background: var(--primary);
	color: var(--white);
}
</style>
