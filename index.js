const Vue = require('vue')
const vm = new Vue({
  name: '123',
  data: {
    a: 1
  }
})
const sub = Vue.extend({})

console.log(sub.options.name)