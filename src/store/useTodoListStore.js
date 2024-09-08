import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
    id: 0,
  }),

  actions: {
    addTodo(newInputs) {
      this.todoList.push({ id: this.id++, isEdit: false, ...newInputs });
      this.todoList = this.todoList.sort(
        (a, b) => parseFloat(a.priority) - parseFloat(b.priority)
      );
    },
    deleteTodo(itemID) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID;
      });
    },
    editTodo(itemID) {
      const myIndex = this.todoList.findIndex((x) => x.id === itemID);
      this.todoList[myIndex].isEdit = true;
    },
    updateTodo(itemID, itemData) {
      const myIndex = this.todoList.findIndex((x) => x.id === itemID);
      console.log(myIndex);
      const isContentUpdated =
        itemData.content !== "" &&
        this.todoList[myIndex].content !== itemData.content;
      const isCategoryUpdated =
        itemData.category !== "" &&
        this.todoList[myIndex].category !== itemData.category;
      const isPriorityUpdated =
        itemData.priority !== 0 &&
        this.todoList[myIndex].priority !== itemData.priority;

      if (isContentUpdated) {
        this.todoList[myIndex].content = itemData.content;
      }

      if (isCategoryUpdated) {
        this.todoList[myIndex].category = itemData.category;
      }

      if (isPriorityUpdated) {
        this.todoList[myIndex].priority = itemData.priority;
      }

      this.todoList[myIndex].isEdit = false;

      this.todoList = this.todoList.sort(
        (a, b) => parseFloat(a.priority) - parseFloat(b.priority)
      );
    },
  },
});
