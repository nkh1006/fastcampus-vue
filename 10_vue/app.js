const vm = new Vue({
   el: '#app',
   data: {
      msg: 'Hello Vue !'
   },
   computed: {
      reversedMsg: {
         get () {
            return this.msg.split('').reverse().join('')
         },
         set (v) {
            this.msg = v;
         }
      }
   },
   watch: {
      msg(newMsg) {
         console.log(newMsg);
      },
      reversedMsg(value) {
         console.log(value);
      }
   }
});   