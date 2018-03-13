/* @flow */

import { mergeOptions } from '../util/index'

export function initMixin (Vue: GlobalAPI) {
  // 相当于默认设置一些配置，避免每次使用Vue时都要写同样的配置项
  Vue.mixin = function (mixin: Object) {
    // 混合配置
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
