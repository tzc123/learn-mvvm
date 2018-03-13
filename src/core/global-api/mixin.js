/* @flow */

import { mergeOptions } from '../util/index'

export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    // 混合配置
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
