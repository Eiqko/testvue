import axios from 'axios';

const state = {
    todo: []
};

const getters = {
    allTodos: state => state.todo
}

const actions = {
   async fetchTodos({commit}){
       try{
       const response = await axios.get(
        'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list'
       );
       commit('setTodos', response.data);
       console.log(response.data)
       } catch(error){
        console.log(error)
       }
       
   },

   async deleteTodo({commit}, id){
       try{
      await axios.delete('https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list', {params: {id: id}});
      commit('removeTodo', id)
       }catch(err){
           console.log(err)
       }
   },

   async addTodo({commit}){
       let data = JSON.stringify({
           komoditas: this.state.todo
       })
       try{
         const response = await axios.post(
        'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list', data);
        commit('newTodo', response.data)
       }catch(err){
           console.log(err)
       }
   },
    async filterTodos({commit}, e){
        const lim = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
            );
        const response = await axios.get(
            `https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/option_size/${lim}`
        );
        commit('setTodos', response.data);
        console.log(response)
    },
    async updateTodo({commit}, updTodo){
        try{
       const response = await axios.put(
        `https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list/${updTodo.id}`,
        updTodo);
        console.log(response.data)
        commit('updateTodo', response.data);
        }catch(err){
            console.log(err)
        }
    }
};


const mutations = {
   setTodos: (state, data) => (state.todo = data),
   newTodo: (state, tod) => state.todo.unshift(tod),
   removeTodo: (state, id) =>  state.todo = state.todo.splice(id, 1),
//    removeTodo: (state, id) =>  (state.todo = state.todo.filter(tod => tod.id !== id)),
   updateTodo: (state, updTodo) => {
       const indx = state.todo.findIndex(tod => tod.id === updTodo.id);
       if(indx !== -1){
           state.todo.splice(indx, 1, updTodo);
       }
   } 
};

export default {
    state,
    getters,
    actions,
    mutations
}