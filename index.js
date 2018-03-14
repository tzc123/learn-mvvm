// Mixin阶段
Vue构造函数 = {
  prototype: {
    // initMixin
    _init: function() {},
    // stateMixin
    $set: function() {},
    $delete: function () {},
    $watch: function () {},
    // eventsMixin
    $on: function () {},
    $once: function () {}, 
    $off: function () {},
    $emit: function () {},
    // lifeCycleMixin
    _update: function () {},
    $forceUpdate: function () {},
    $destroy: function () {},
    // renderMixin
    ...renderHelpers,
    $nextTick: function () {},
    _render: function () {},
  }
}
//initGlobalApi阶段
Vue构造函数 = {
  config: {},
  util: {
    warn: function () {},
    extend: function () {},
    mergeOptions: function () {},
    defineReactive: function () {}
  },
  set: function () {},
  delete: function () {},
  nextTick: function () {},
  options: {
    directives: {},
    components: {
      keepAlive: {}
    },
    filters: {},
    _base: Vue构造函数
  },
  use: function () {},
  mixin: function () {},
  extend: function () {},
  component: function () {},
  directive: function () {},
  filter: function () {}
}
// vm init阶段
vm实例 = {
  // initLifeCycle
  _uid: 0,
  _isVue: true,
  $options: {},
  _renderProxy: vm实例,
  _self: vm实例,
  $parent: {},
  $root: {},
  $children: [],
  $refs: {},
  _watch: null,
  _inactive: null,
  _directInactive: false,
  _isMounted: false,
  _isDestroyed: false,
  _isBeingDestroyed: false,
  // initEvent
  _events: {},
  _hasHookEvent: false,
}

const Vue = require('vue')
const lu = Vue.extend({})
const u = new lu()
const vm = new Vue({
  name: '123',
  data: {
    a: 1
  },
  components: { lu }
})

console.log(vm.$options.parent)