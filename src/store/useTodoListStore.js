import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  // getters
  actions: {
    addTodo(content, priority) {
      this.todoList.push({ content, id: this.id++, priority });
    },
    deleteTodo(itemID) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID;
      });
    },
    // updateTodo(itemID, itemData) {},
  },
});
