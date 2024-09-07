<template>
  <h2>ToDo List</h2>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <div class="content">
        <span>{{ `Priority: ${todo.priority}` }}</span>
        <span>{{ `Content: ${todo.content}` }}</span>
      </div>
      <button @click="removeTodo(index)">Remove</button>
    </li>
  </ul>
  <h4 v-if="todos.length === 0">Empty list.</h4>
</template>

<script>
import { useTodoListStore } from "../store/useTodoListStore";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useTodoListStore();
    const { todoList } = storeToRefs(store);
    const { deleteTodo } = store;

    return { todos: todoList, removeTodo: deleteTodo };
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
}
</style>
