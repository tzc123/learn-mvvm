/* @flow */

import config from '../config'
import { initUse } from './use'
import { initMixin } from './mixin'
import { initExtend } from './extend'
import { initAssetRegisters } from './assets'
import { set, del } from '../observer/index'
import { ASSET_TYPES } from 'shared/constants'
import builtInComponents from '../components/index'

import {
  warn,
  extend,
  nextTick,
  mergeOptions,
  defineReactive
} from '../util/index'

export function initGlobalAPI (Vue: GlobalAPI) {
  // config
  const configDef = {}
  configDef.get = () => config
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = () => {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      )
    }
  }
  // 在Vue设置静态属性，且为只读
  Object.defineProperty(Vue, 'config', configDef)

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  // 这些不属于公共API，尽量不要用
  Vue.util = {
    warn,
    extend,
    mergeOptions,
    defineReactive
  }

  // 为data中的对象或数组修改值，并触发渲染的方法
  Vue.set = set
  // 为data中对象或数组删除值，并触发渲染的方法
  Vue.delete = del
  // 注册异步任务的函数
  Vue.nextTick = nextTick

  Vue.options = Object.create(null)
  ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
  })

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue

  extend(Vue.options.components, builtInComponents)
  // 设置Vue.use
  initUse(Vue)
  // 设置Vue.mixin
  initMixin(Vue)
  // 设置Vue.entend
  initExtend(Vue)
  // 
  initAssetRegisters(Vue)
}
