<!-- src/components/CombinedView.vue -->
<template>
    <div class="container mt-3">
      <h3>Vista Combinada</h3>
      <button @click="fetchTasks" class="btn btn-info mb-3">Cargar Tareas de la API</button>
      <form @submit.prevent="addTask">
        <div class="mb-3">
          <input
            v-model="newTask"
            type="text"
            class="form-control"
            placeholder="Escribe una tarea"
          />
        </div>
        <button type="submit" class="btn btn-primary">Agregar Tarea</button>
      </form>
      <ul class="list-group mt-3">
        <li v-for="task in combinedTasks" :key="task.id || task" class="list-group-item">
          {{ task.title || task }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newTask: '',
        tasksFromApi: [],
        userTasks: [],
      };
    },
    computed: {
      combinedTasks() {
        return [...this.tasksFromApi, ...this.userTasks];
      },
    },
    methods: {
      async fetchTasks() {
        try {
          const response = await axios.get('https://dummyjson.com/todos');
          this.tasksFromApi = response.data.todos;
        } catch (error) {
          console.error("Error al obtener tareas:", error);
        }
      },
      addTask() {
        if (this.newTask.trim()) {
          this.userTasks.push(this.newTask);
          this.newTask = '';
        }
      },
    },
  };
  </script>
  