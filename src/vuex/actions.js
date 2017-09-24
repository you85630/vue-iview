import api from 'assets/js/api'

export default {
  // 获取数据
  getItems: ({
    commit
  }, key) => {
    api.get('/data.json')
      .then(function (res) {
        commit('GET_ITEMS', res.data)
      })
  },
  reset: ({
    commit
  }, key) => {
    commit('reset', key)
  },
  addTab: ({
    commit
  }, key) => {
    commit('ADD_TAB', key)
  }
}
