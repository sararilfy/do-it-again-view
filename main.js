var app = new Vue({
  el: '#app',
  data: {
    message: 'test',
    scroll: 0
  },
  mounted: function() {
    this.scroll = 100
  }
});