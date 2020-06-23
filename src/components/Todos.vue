<template>
    <div>
    <div class="legend">
      <!-- <span>Double click to mark yout favorite</span> -->
      <span>
        <span class="incomplete-box"></span> = no name
      </span>
      <span>
        <span class="complete-box"></span> = named
      </span>
    </div>
        <div class="todos">
           <div
        @dblclick="onDblClick(todo)"
        v-for="todo in allTodos"
           :key="todo.id"
           class="todo"
           v-bind:class="{'is-complete':todo.komoditas}">
           <h1>Komoditas: {{todo.komoditas ? todo.komoditas : 'no name'}}</h1>
           <p>Price: {{todo.price}}</p>
           <p>{{todo.area_kota}} {{todo.area_kota && todo.area_provinsi? ',' :''}} {{todo.area_provinsi}}</p>
          <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
           </div> 
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        komoditas: todo.komoditas,
      };
      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #4fc590;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>