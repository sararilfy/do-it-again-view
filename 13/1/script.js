var app = new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    handleClick: function(item) {
      alert(item);
    }
  }
});