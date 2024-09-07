<template>
  <h1>ToDo App</h1>
  <TodoForm />
  <TodoList />
</template>

<script>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
export default {
  components: { TodoForm, TodoList },
  setup() {
    return {};
  },
};
</script>
