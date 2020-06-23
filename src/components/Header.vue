<template>
  <header class="header">
    <h1>eFish</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>



<style scoped>
 .header{
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
    color: #fff;
    text-align: center;
    max-height: 150px;

 }

 .header a {
     color: rgb(20, 10, 10);
     padding-right: 5px;
     text-decoration: none;
     margin: 0 20px;
 }

 .header a:hover{
    color: rgb(8, 78, 43);
    background:rgb(20, 10, 10);
    padding: 3px 10px;

 }

 #nav{
     padding: 10px 29px;
     margin: 0 20px;
     display: flex;
     justify-content: center;

 }
</style>