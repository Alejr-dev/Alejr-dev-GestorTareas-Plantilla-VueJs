<!-- src/views/FetchTasks.vue -->
<template>
    <div>
      <h1>Extraer Tareas de la API</h1>
      <button @click="fetchTasks" class="btn btn-primary">Cargar Tareas desde la API</button>
      <ul v-if="tasks.length">
        <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
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
  
  <style scoped>
  /* Estilos opcionales */
  h1 {
    margin-bottom: 20px;
  }
  </style>
  