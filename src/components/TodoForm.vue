<template>
  <form @submit.prevent="addTodo(newTodo, priority, category)">
    <div class="content-ctnr">
      <label>Todo: </label>
      <input v-model="newTodo" name="newTodo" autocomplete="off" />
    </div>
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
        <label>Category: </label>
        <select class="input-select" v-model="category" name="category">
          <option value="Work">Work</option>
          <option value="Home">Home</option>
          <option value="Leisure">Leisure</option>
        </select>
      </div>
    </div>
    <button>Add ToDo</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useTodoListStore } from "../store/useTodoListStore";

export default {
  setup() {
    const newTodo = ref("");
    const category = ref("");
    const priority = ref(1);
    const store = useTodoListStore();

    function addTodo(content, priority, category) {
      const newInputs = {
        content,
        priority,
        category,
      };
      store.addTodo(newInputs);
      newTodo.value = "";
    }

    return { newTodo, priority, category, addTodo };
  },
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

.input-select {
  background-color: white;
  color: black;
  height: 55px;
  margin-left: 10px;
}
</style>
