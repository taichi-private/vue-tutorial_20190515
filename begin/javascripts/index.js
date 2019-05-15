Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

const app = new Vue({
  el: '#app',
  data: {
    message: 'hello world'
  }
});

const app2 = new Vue({
  el: '#app2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

const app3 = new Vue({
  el: '#app3',
  data: {
    flag: true
  }
});

const app4 = new Vue({
  el: '#app4',
  data: {
    list: [
      { text: '日本' },
      { text: 'アメリカ' },
      { text: 'アルゼンチン' },
    ]
  }
});

const app5 = new Vue({
  el: '#app5',
  data: {
    message: 'hello vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

const app6 = new Vue({
  el: '#app6',
  data: {
    message: 'hello vue!'
  }
});

const app7 = new Vue({
  el: '#app7',
  data: {
    list: [
      {id: 0, text: 'テキスト1'},
      {id: 1, text: 'テキスト2'},
      {id: 2, text: 'テキスト3'}
    ]
  }
});
