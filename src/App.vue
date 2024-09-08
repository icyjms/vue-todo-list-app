<template>
  <TodoApp />
</template>

<script>
import TodoApp from "./components/TodoApp.vue";

export default {
  name: "App",
  components: {
    TodoApp,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #283b61;
  color: white;
}

#app {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}

h1 {
  font-weight: bold;
  font-size: 28px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  font-size: 14px;
  font-weight: bold;
}

input,
button,
select {
  height: 48px;
  box-shadow: none;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  font-size: 18px;
  margin-top: 6px;
  margin-bottom: 12px;
}

input,
select {
  background-color: transparent;
  border: 2px solid;
  color: inherit;
}

button {
  cursor: pointer;
  background-color: #a0a4d9;
  border: 1px solid #a0a4d9;
  color: #1f2023;
  font-weight: bold;
  outline: none;
  border-radius: 6px;
}

h2 {
  font-size: 22px;
  border-bottom: 2px solid;
  padding-bottom: 6px;
}

ul {
  padding: 10px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid;
  padding: 12px 24px;
  border-radius: 6px;
  margin-bottom: 12px;
}

span {
  cursor: pointer;
}

.done {
  text-decoration: line-through;
}

button {
  font-size: 12px;
  padding: 6px;
}

h4 {
  text-align: center;
  opacity: 0.5;
  margin: 0;
}
</style>
