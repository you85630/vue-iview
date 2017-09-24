export default{
  // 获取数据
  dataItems: state => state.dataItems,
  // 个人中心
  user: state => state.user,
  // 顶部导航
  nowIndex: state => state.nowIndex,
  // 面包屑
  breadcrumb: state => state.breadcrumb,
  // 当前页面
  nowPages: state => state.nowPages,
  nowOpen: state => state.nowOpen,
  // 登陆
  form: state => state.form,
  msg: state => state.msg
}
