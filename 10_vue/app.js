const vm = new Vue({
   el: '#app',
   data: {
      msg: 'Hello Vue !'
   },
   computed: {
      reversedMsg () {
         return this.msg.split('').reverse().join('');
      }
   },
   watch: {
      msg (newMsg) {
         console.log(newMsg);
      },
      reversedMsg (value) {
         console.log(value);
      }
   }
})