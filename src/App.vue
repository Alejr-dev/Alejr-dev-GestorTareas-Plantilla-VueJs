<template>
  <div id="app">
    <header>
      <h1>Gestor de Tareas</h1>
      <nav>
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/todo-list" class="nav-link">Lista de Tareas</router-link>
        <router-link to="/issue-list" class="nav-link">Agregar Tareas</router-link>
        <router-link to="/todos-issue" class="nav-link">Resumen Tareas</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #444;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}

header {
  background-color: #ffffff;
  padding: 30px 20px;
  border-bottom: 3px solid #e4e4e4;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header h1 {
  margin: 0;
  font-size: 2.2rem;
  color: #2c3e50;
  font-weight: 700;
}

nav {
  margin-top: 15px;
}

.nav-link {
  font-weight: 500;
  color: #2c3e50;
  padding: 10px 20px;
  margin: 0 15px;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #fff;
  background-color: #42b983;
  transform: translateY(-2px);
}

nav a.router-link-exact-active {
  color: #fff;
  background-color: #42b983;
  font-weight: bold;
  transform: translateY(-2px);
}

main {
  padding: 20px;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
