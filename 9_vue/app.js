const vm = new Vue({
   el: '#app',
   data: {
      todos: [
         { title: '아침 먹기' },
         { title: '점심 먹기' },
         { title: '저녁 먹기' }
      ]
   },
   computed: {
      computedTodos() {
         return this.todos.map((todo, index) => {
            /*
            return Object.assing({}, todo, {
               id: index + 1,
               done: false
            })
            */
            return {
               ...todo,
               id: index + 1,
               done: false
            }          
         })
      }
   }
});