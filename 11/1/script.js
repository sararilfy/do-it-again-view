var app = new Vue({
  el: '#app',
  mounted: function() {
    console.log(this.$el);
    console.log(this.$refs.hello);
  },
  data: {
    show: true
  },
  methods: {
    handleClick() {
      var count = this.$refs.count;
      if (count) {
        count.innerText = parseInt(count.innerText, 10) + 1;
      }
    }
  }
});