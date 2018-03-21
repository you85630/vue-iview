import * as types from './types'
import router from 'router'

export default {
  // 获取数据
  [types.GET_ITEMS] (state) {
    if (state.nowPages === '') {
      router.push('/')
    }
  },
  // 重置
  reset (state, key) {
    state.nowIndex = key
    state.nowPages = ''
    state.nowOpen = []
    state.breadcrumb = ''
  },
  // 增加标签
  [types.ADD_TAB] (state, RPC) {
    router.push(RPC.link)
    state.nowPages = RPC.link
    state.breadcrumb = RPC.breadcrumb
  }
}
