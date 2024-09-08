<template>
  <h2>ToDo List</h2>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <div class="card-ctnr" v-if="!todo.isEdit">
        <div class="content">
          <span>{{ `Priority: ${todo.priority}` }}</span>
          <span>{{ `Category: ${todo.category}` }}</span>
          <span>{{ `Content: ${todo.content}` }}</span>
        </div>
        <div class="btn-ctnr">
          <button class="btn" @click="editTodo(todo.id)">Edit</button>
          <button class="btn" @click="deleteTodo(todo.id)">Remove</button>
        </div>
      </div>
      <div v-else class="card-ctnr">
        <TodoEditForm :todo="todo" />
      </div>
    </li>
  </ul>
  <h4 v-if="todos.length === 0">Empty list.</h4>
</template>

<script>
import { useTodoListStore } from "../store/useTodoListStore";
import { storeToRefs } from "pinia";
import TodoEditForm from "./TodoEditForm.vue";

export default {
  components: { TodoEditForm },
  setup() {
    const store = useTodoListStore();
    const { todoList } = storeToRefs(store);
    const { deleteTodo, editTodo } = store;

    return {
      todos: todoList,
      deleteTodo,
      editTodo,
    };
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 70%;
}

.btn-ctnr {
  display: flex;
  width: 30%;
  justify-content: space-evenly;
}

.btn {
  width: 70px;
}

.card-ctnr {
  display: flex;
  flex: 1;
}
</style>
