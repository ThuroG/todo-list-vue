import { defineStore } from 'pinia'

export const useTodoListStore = defineStore({'todoList': {
    // state
    state: () => ({
        todoList: [],
        id: 0
    }),
    actions: {
        // getters
        get completedTodos() {
            return this.todos.filter(todo => todo.completed)
        },
        // actions
        add(todo) {
            this.todoList.push({ todo, id: this.id++, completed: false })
        },
        delete(todoId) {
            this.todoList = this.todoList.filter((object) => {
                return object.id !== todoId
            });
        },
        // mutations
        toggle(todo) {
            todo.completed = !todo.completed
        }
    }
}})
