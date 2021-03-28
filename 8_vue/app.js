const vm = new Vue({
   el: '#app',
   data: {
      msg: "Hello Vue !"
   },
   beforeCreate() {
      console.log('Before Create !')
   },
   created() {
      console.log('Created !')
   },
   beforeMount() {
      console.log('Before Mount !')
   },
   mounted() {
      console.log('Mounted !')
   }
});