const vm = new Vue({
   el: '#app',
   data: {
      todos: [
         { title: '아침먹기' },
         { title: '점심먹기' },
         { title: '저녁먹기' }
      ],
      heropy: {
         name: 'HEROPY',
         age: 35,
         homepage: '',
         email: ''
      }
   },
   methods: {
      pushTodo() {
         // this.todos[3] = { title: '야식먹기' }
         this.todos.push({ title: '야식 먹기' })
      }
   }
});