<template>
  <div class="container mt-3">
    <h3>Agregar Tareas Manualmente</h3>
    <form @submit.prevent="emitAddTask">
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
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    emitAddTask() {
      if (this.newTask.trim()) {
        this.$emit("add-task", this.newTask);
        this.newTask = ""; // Limpiamos el campo después de agregar
      }
    },
  },
};
</script>

<style scoped>
/* Puedes añadir estilos personalizados aquí */
</style>
