const Vue = require('vue')
const vm = new Vue({
  data: {
    a: 1
  }
})
const component = Vue.component('Hello', {})
console.log(component.options)