const vm = new Vue({
   el: '#app',
   data: {
      todos: [
         { title: '아침먹기' },
         { title: '점심먹기' },
         { title: '저녁먹기' }
      ],
   },
   methods: {
      clickMethod(title) {
         console.log(title);
      }
   }
});