<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add Task</router-link> |
      <router-link to="/completed">Completed</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  background: #4f46e5;
  padding: 10px;
  text-align: center;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: 500;
}

nav a.router-link-active {
  text-decoration: underline;
}
</style>
