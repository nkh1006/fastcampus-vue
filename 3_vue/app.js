const vm = new Vue({
   el: "#app",
   data: { 
      message: "이제 나를 볼수 있습니다.",
      seen: true
   },
   methods: {
      seenBtn: function () {
         this.seen = !this.seen;
      }
   }
});