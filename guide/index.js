/**
 * https://jp.vuejs.org/v2/guide/index.html
 */

/**
 * 宣言的レンダリング
 */
var app = new Vue({
	el: '#app',
	data: {
		message: 'HELLO Vue!'
	}
})

var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'You loaded this page on ' + new Date().toLocaleString()
	}
})

/**
 * 条件分岐とループ
 */
// コンソールから app3.seen = false を入力してみましょう。
var app3 = new Vue({
	el:  '#app-3',
	data: {
		seen: true
	}
})

// コンソールで app4.todos.push({ text: 'New item' }) と入力してみましょう。
var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
		  { text: 'Learn JavaScript' },
		  { text: 'Learn Vue' },
		  { text: 'Build something awesome' }
		]
	}
})

/**
 * ユーザー入力の制御
 */
var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

/**
 * 「双方向バインディング」
 */
var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'HELLO Vue!'
	}
})

/**
 * コンポーネントによる構成
 */
 // todo-item と呼ばれる新しいコンポーネントを定義
 Vue.component('todo-item', {
    // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
    // このプロパティは todo と呼ばれます。
    props: ['todo'],
 	template: '<li>{{ todo.text }}</li>'
 })
 
 var app7 = new Vue({
	el: '#app-7',
 	data: {
 		groceryList: [
 		  { id: 0, text: 'Vegetables' },
 		  { id: 1, text: 'Cheese' },
 		  { id: 2, text: 'Whatever else humans are supposed to ea' }
 		]
 	}
 })