<template>
  <div class="container mt-3">
    <h3>Agregar Tareas Manualmente</h3>
    <form @submit.prevent="addTask">
      <div class="mb-3">
        <input
          v-model="newTask"
          type="text"
          class="form-control"
          placeholder="Escribe una tarea"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Agregar Tarea</button>
    </form>
    <ul class="list-group mt-3">
      <li v-for="(task, index) in tasks" :key="task.id || index" class="list-group-item">
        {{ task.todo }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newTask: '',  // Para agregar una tarea nueva
      tasks: [],    // Lista de tareas obtenidas desde la API
    };
  },
  methods: {
    // Método para agregar una tarea manualmente
    addTask() {
      if (this.newTask.trim()) {
        // Aquí agregamos la tarea manual a la lista de tareas locales
        this.tasks.push({
          id: this.tasks.length + 1,
          todo: this.newTask,
        });
        this.newTask = '';  // Limpiamos el campo de entrada después de agregar la tarea
      }
    },
    // Método para cargar las tareas desde la API de DummyJSON
    fetchTasks() {
      axios
        .get('https://dummyjson.com/todos')  // Aquí es donde se obtiene la lista de tareas
        .then((response) => {
          this.tasks = response.data.todos;  // Se asignan las tareas obtenidas a la variable 'tasks'
        })
        .catch((error) => {
          console.error('Hubo un problema al obtener las tareas:', error);
        });
    },
  },
  // Cargar las tareas de la API cuando el componente se monta
  mounted() {
    this.fetchTasks();
  },
};
</script>

<style scoped>
/* Estilos personalizados, si lo deseas */
</style>
