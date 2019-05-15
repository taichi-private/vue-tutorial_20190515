const data = { a: 1 }

const vm = new Vue({
  el: '#app',
  data: data,
  created: function () {
    console.log('createされました', this.a)
  }
});

// data.aの値が更新されると呼ばれる
vm.$watch('a', function (newValue, oldValue) {
  console.log(oldValue)
  console.log(newValue)
})