const vm = new Vue({
   el: "#app",
   data: { 
      message: "안녕하세요 ! Vue.js"
   },
   methods: {
      reverseMessage: function () {
         this.message = this.message.split('').reverse().join('')
      }
   }
});