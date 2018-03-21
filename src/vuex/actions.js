export default {
  // 获取数据
  getItems: ({ commit }, key) => {
    commit('GET_ITEMS', key)
  },
  reset: ({ commit }, key) => {
    commit('reset', key)
  },
  addTab: ({ commit }, key) => {
    commit('ADD_TAB', key)
  }
}
