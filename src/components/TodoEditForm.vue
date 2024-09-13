<template>
  <form @submit.prevent="update(todoData.todo.id)">
    <div class="info">
      <div class="info-ctnr">
        <label>Priority: </label>
        <input
          type="number"
          :value="todoData.todo.priority"
          name="priority"
          autocomplete="off"
          min="0"
          @input="updateContent"
        />
      </div>
      <div class="info-ctnr">
        <label>Due Date: </label>
        <input
          class="input-date date"
          type="date"
          :value="todoData.todo.dueDate"
          name="dueDate"
          @input="updateContent"
        />
      </div>
      <div class="info-ctnr">
        <label>Category: </label>
        <select
          class="input-select"
          :value="todoData.todo.category"
          name="category"
          @input="updateContent"
        >
          <option value="Work">Work</option>
          <option value="Home">Home</option>
          <option value="Leisure">Leisure</option>
        </select>
      </div>
    </div>
    <div class="content-ctnr">
      <label>Todo: </label>
      <input
        :value="todoData.todo.content"
        name="todo"
        autocomplete="off"
        @input="updateContent"
      />
    </div>
    <button>Update ToDo</button>
  </form>
</template>

<script setup>
import { useTodoListStore } from "../store/useTodoListStore";
import { ref, defineProps } from "vue";

const store = useTodoListStore();
const todoData = defineProps({
  todo: Object,
});
const todo = ref("");
const category = ref("");
const priority = ref(0);
const dueDate = ref("");

const update = (id) => {
  const newInputs = {
    content: todo.value,
    priority: priority.value,
    category: category.value,
    dueDate: dueDate.value,
  };
  store.updateTodo(id, newInputs);
};

const updateContent = (e) => {
  switch (e.target.name) {
    case "todo":
      todo.value = e.target.value;
      break;
    case "priority":
      priority.value = e.target.value;
      break;
    case "dueDate":
      dueDate.value = e.target.value;
      break;
    default:
      category.value = e.target.value;
      break;
  }
};
</script>
