<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background: #f2f2f2;
}
#nav {
  padding: 30px;
}
#nav a {
  font-size: x-large;
  font-weight: bold;
  color: #2c3e50;
  padding: 0px 5px;
  border-right: #2c3e50 3px solid;
}
#nav a:last-child {
  border-right: none;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
