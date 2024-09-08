<template>
  <form @submit.prevent="update(todoData.id)">
    <div class="info">
      <div class="info-ctnr">
        <label>Priority: </label>
        <input
          type="number"
          :value="todoData.priority"
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
          :value="todoData.dueDate"
          name="dueDate"
          @input="updateContent"
        />
      </div>
      <div class="info-ctnr">
        <label>Category: </label>
        <select
          class="input-select"
          :value="todoData.category"
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
        :value="todoData.content"
        name="todo"
        autocomplete="off"
        @input="updateContent"
      />
    </div>
    <button>Update ToDo</button>
  </form>
</template>

<script>
import { useTodoListStore } from "../store/useTodoListStore";
import { ref, computed } from "vue";

export default {
  props: { todo: Object },
  setup(props) {
    const store = useTodoListStore();
    const todoData = computed(function () {
      return props.todo;
    });
    const todo = ref("");
    const category = ref("");
    const priority = ref(0);
    const dueDate = ref("");

    function update(id) {
      const newInputs = {
        content: todo.value,
        priority: priority.value,
        category: category.value,
        dueDate: dueDate.value,
      };
      store.updateTodo(id, newInputs);
    }

    function updateContent(e) {
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
    }

    return { todoData, updateContent, update };
  },
};
</script>
