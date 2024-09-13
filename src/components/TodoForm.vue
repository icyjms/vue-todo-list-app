<template>
  <form @submit.prevent="addTodo(newTodo, priority, category, dueDate)">
    <div class="info">
      <div class="info-ctnr">
        <label>Priority: </label>
        <input
          type="number"
          v-model="priority"
          name="priority"
          autocomplete="off"
          min="1"
        />
      </div>
      <div class="info-ctnr">
        <label>Due Date: </label>
        <input
          class="input-date date"
          type="date"
          v-model="dueDate"
          name="dueDate"
        />
      </div>
      <div class="info-ctnr">
        <label>Category: </label>
        <select class="input-select" v-model="category" name="category">
          <option value="Work">Work</option>
          <option value="Home">Home</option>
          <option value="Leisure">Leisure</option>
        </select>
      </div>
    </div>
    <div class="content-ctnr">
      <label>Todo: </label>
      <input v-model="newTodo" name="newTodo" autocomplete="off" />
    </div>
    <button>Add ToDo</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTodoListStore } from "../store/useTodoListStore";

const newTodo = ref("");
const category = ref("");
const priority = ref(1);
const dueDate = ref("");
const store = useTodoListStore();

const addTodo = (content, priority, category, dueDate) => {
  const newInputs = {
    content,
    priority,
    category,
    dueDate,
  };
  store.addTodo(newInputs);
  newTodo.value = "";
};
</script>

<style>
.content-ctnr {
  display: flex;
  flex-direction: column;
}

.info {
  display: flex;
  justify-content: space-between;
}

.info-ctnr {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
}

.input-select,
.input-date {
  background-color: white;
  color: black;
  height: 55px;
  margin-left: 10px;
}
</style>
