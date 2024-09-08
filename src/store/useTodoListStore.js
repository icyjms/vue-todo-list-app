import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
    workCategoryList: [],
    homeCategoryList: [],
    leisureCategoryList: [],
    activeList: [],
    id: 0,
    selectedCategory: "All",
  }),

  actions: {
    addTodo(newInputs) {
      this.todoList.push({ id: this.id++, isEdit: false, ...newInputs });
      this.todoList = this.todoList.sort(
        (a, b) => parseFloat(a.priority) - parseFloat(b.priority)
      );

      if (this.selectedCategory === "All") {
        this.activeList = this.todoList;
      } else if (this.selectedCategory === newInputs.category) {
        this.activeList.push({ id: this.id++, isEdit: false, ...newInputs });
        this.activeList = this.activeList.sort(
          (a, b) => parseFloat(a.priority) - parseFloat(b.priority)
        );
      } else {
        return;
      }
    },

    deleteTodo(itemID) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemID;
      });

      this.activeList = this.activeList.filter((object) => {
        return object.id !== itemID;
      });
    },

    editTodo(itemID) {
      const activeCategory =
        this.selectedCategory === "All" ? "todoList" : "activeList";
      const myIndex = this[activeCategory].findIndex((x) => x.id === itemID);
      this[activeCategory][myIndex].isEdit = true;
    },

    updateTodo(itemID, itemData) {
      const activeCategory =
        this.selectedCategory === "All" ? "todoList" : "activeList";
      const myIndex = this[activeCategory].findIndex((x) => x.id === itemID);

      //check if the form datas have been modified
      const isContentUpdated =
        itemData.content !== "" &&
        this[activeCategory][myIndex].content !== itemData.content;
      const isCategoryUpdated =
        itemData.category !== "" &&
        this[activeCategory][myIndex].category !== itemData.category;
      const isPriorityUpdated =
        itemData.priority !== 0 &&
        this[activeCategory][myIndex].priority !== itemData.priority;
      const isDueDateUpdated =
        itemData.dueDate !== "" &&
        this[activeCategory][myIndex].dueDate !== itemData.dueDate;

      //Update the necessary form datas that had some changes
      if (isContentUpdated) {
        this[activeCategory][myIndex].content = itemData.content;
      }

      if (isCategoryUpdated) {
        this[activeCategory][myIndex].category = itemData.category;
      }

      if (isPriorityUpdated) {
        this[activeCategory][myIndex].priority = itemData.priority;
      }

      if (isDueDateUpdated) {
        this[activeCategory][myIndex].dueDate = itemData.dueDate;
      }

      this[activeCategory][myIndex].isEdit = false;

      this.todoList = this.todoList.sort(
        (a, b) => parseFloat(a.priority) - parseFloat(b.priority)
      );
    },
    filterByCategory(category) {
      this.selectedCategory = category;

      if (category === "All") {
        this.activeList = this.todoList;
      } else {
        this.activeList = this.todoList.filter((x) => x.category === category);
      }

      this.activeList = this.activeList.sort(
        (a, b) => parseFloat(a.priority) - parseFloat(b.priority)
      );
    },
  },
});
