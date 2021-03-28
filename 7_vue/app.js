Vue.component('my-todo-item', {
   props: ['todo'],
   template: `<li>
            <input type="checkbox" v-model="todo.done">
            <span v-bind:class="{ done: todo.done }">{{ todo.title }}</span>
         </li>`
});

const vm = new Vue({
   el: '#app',
   data: {
      msgA: 'Message A.',
      msgB: ''
   },
   methods: {
      changeMessage () {
         this.msgA = 'Changed message A !';
         this.msgB = 'Changed message B !';
      }
   },
   watch: {
      msgA (value) {
         console.log(value);
      }
   },
   created: {

   },
   mounted: {
   }
});