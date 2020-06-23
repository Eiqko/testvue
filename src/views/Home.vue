<template>
  <div id="app">
    <div class="container">
       <Add/>
       <FilterMe/>
       <Todos/>
    </div>
  </div>
</template>

<script>
import Add from '../components/Add.vue';
import Todos from '../components/Todos.vue';
import FilterMe from "../components/FilterMe.vue";



export default {
  name: 'App',
  components: {
    Todos,
    Add,
    FilterMe
  }
}
</script>

<style>
body{
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.5;
  background: #e8f7f0;
}
.container{
  max-width: 1100px;
  margin: 0 auto;
}
</style>