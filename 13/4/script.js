var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello!'
  },
  methods: {
    handleInput: function(e) {
      //代入前に何かおこなう
      alert(this.message);
      this.message = e.target.value;
    }
  }
});