<template>
  <form @submit.prevent="addTodo(newTodo, priority)">
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
          min="0"
        />
      </div>
      <div class="info-ctnr">
        <label>Category: </label>
        <select name="category" @change="selectedCategory">
          <option value="1">Work</option>
          <option value="2">Leisure</option>
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
    const priority = ref(0);
    const store = useTodoListStore();

    function addTodo(content, priority) {
      store.addTodo(content, priority);
      newTodo.value = "";
    }

    function selectedCategory() {}

    return { newTodo, priority, category, addTodo, selectedCategory };
  },
};
</script>

<style scoped>
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
}
</style>
