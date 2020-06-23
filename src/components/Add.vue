<template>
    <div>
        <h3>Add list</h3>
        <div class="add">
             <form @submit="onSubmit">
               <input type="text" v-model="komoditas" placeholder="add ur list..">
               <input type="submit" value="Submit">
             </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'Add',
    data(){
        return{
            komoditas: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e){
            e.preventDefault();
            this.addTodo(this.komoditas)
        }
    }
}
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>