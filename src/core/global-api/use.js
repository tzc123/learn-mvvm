/* @flow */

import { toArray } from '../util/index'

export function initUse (Vue: GlobalAPI) {
  // 安装插件，将Vue交给插件处理，使用处理后的Vue，便有了插件的功能
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    // 后面的参数 + Vue作为插件的参数传入
    const args = toArray(arguments, 1)
    args.unshift(this)
    // 如果插件是对象，则查找install方法并安装，插件时函数则直接安装
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
