<!-- src/components/FetchTasks.vue -->
<template>
    <div class="container mt-3">
      <h3>Extraer Tareas de la API</h3>
      <button @click="fetchTasks" class="btn btn-success mb-3">Obtener Tareas</button>
      <ul class="list-group">
        <li v-for="task in tasks" :key="task.id" class="list-group-item">
          {{ task.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        tasks: [],
      };
    },
    methods: {
      async fetchTasks() {
        try {
          const response = await axios.get('https://dummyjson.com/todos');
          this.tasks = response.data.todos;
        } catch (error) {
          console.error("Error al obtener tareas:", error);
        }
      },
    },
  };
  </script>
  