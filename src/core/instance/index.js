import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 初始化Vue
  this._init(options)
}
// 为vue对象添加_init方法
initMixin(Vue)
// 为vue对象添加$set,$delete,$watch
stateMixin(Vue)
// 为vue对象添加$on,$once,$off,$emit
eventsMixin(Vue)
// 为vue对象添加生命周期
lifecycleMixin(Vue)
// 添加$nextTick 和 _render
renderMixin(Vue)

export default Vue
