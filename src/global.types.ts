export enum FilterType {
	ALL,
	ACTIVE,
	COMPLETED
}

export interface TodoItem {
	id: number
	text: string
	completed: boolean
}
