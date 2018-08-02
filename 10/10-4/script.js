var app = new Vue({
  el: '#app',
  data: {
    name: 'さんだー',
    monster: [
      { id: 1, name: 'ぶい', hp:100 },
      { id: 2, name: 'しゃわー', hp:400 },
      { id: 3, name: 'ブラッキ', hp:500 }
    ]
  },
  methods: {
    // 追加ボタンクリック
    doAdd: function() {
      // リストの最大ID取得
      var max = this.monster.reduce(function(a, b) {
        return a.id > b.id ? a.id : b.id
      }, 0);
      // 新しいリストに追加
      this.monster.push({
        id: max + 1, // 最大IDから+1してユニークID生成
        name: this.name, // フォーム入力値
        hp: 500
      });
    },
    doRemove: function(index) {
      console.log(this.monster);
      this.monster.splice(index, 1);
    }
  }
});