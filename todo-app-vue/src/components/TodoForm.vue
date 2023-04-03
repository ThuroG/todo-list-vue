<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '../stores/todolist';

const item = ref('');
const store = useTodoListStore();

function addTodoAndClear(todo) {
    if (todo.length === 0) {
        return;
    }
    store.add(todo);
    item.value = '';
}
</script>

<template>
<div>
    <form @submit.prevent="addTodoAndClear(todo)">
        <input v-model="todo" type="text" placeholder="Add Todo..." /><button>Add Todo</button>
    </form>
</div>
</template>

<style scoped>
</style>
