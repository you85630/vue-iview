export default {
  // 数据获取
  dataItems: [
    {
      link: '/read',
      title: '导航一',
      leftNav: [
        {
          name: '1',
          icon: 'ios-paper',
          title: '分类1',
          subs: [
            {
              name: '1-1-1',
              link: '/read/vuetable',
              title: '表格',
              breadcrumb: [
                '小思阅读',
                '分类1',
                '表格'
              ]
            },
            {
              name: '1-1-2',
              link: '/read/vuetable1',
              title: '表格1',
              breadcrumb: [
                '小思阅读',
                '分类1',
                '表格1'
              ]
            },
            {
              name: '1-1-3',
              link: '/read/vuetable2',
              title: '表格2',
              breadcrumb: [
                '小思阅读',
                '分类1',
                '表格2'
              ]
            },
            {
              name: '1-1-4',
              link: '/read/vuetable3',
              title: '表格3',
              breadcrumb: [
                '小思阅读',
                '分类1',
                '表格3'
              ]
            },
            {
              name: '1-1-5',
              link: '/read/vueform',
              title: '表单',
              breadcrumb: [
                '小思阅读',
                '分类1',
                '表单'
              ]
            }
          ]
        },
        {
          name: '2',
          icon: 'ios-people',
          title: '分类2',
          subs: [
            {
              name: '1-2-1',
              link: '/read/vuetimeline',
              title: '时间轴',
              breadcrumb: [
                '小思阅读',
                '分类2',
                '时间轴'
              ]
            },
            {
              name: '1-2-2',
              link: '/read/vuetooltip',
              title: '文字提示',
              breadcrumb: [
                '小思阅读',
                '分类2',
                '文字提示'
              ]
            },
            {
              name: '1-2-3',
              link: '/read/vuesteps',
              title: '步骤条',
              breadcrumb: [
                '小思阅读',
                '分类2',
                '步骤条'
              ]
            }
          ]
        },
        {
          name: '3',
          icon: 'stats-bars',
          title: '分类3',
          subs: [
            {
              name: '1-3-1',
              link: '/read/vueprogress',
              title: '进度条',
              breadcrumb: [
                '小思阅读',
                '分类3',
                '进度条'
              ]
            },
            {
              name: '1-3-2',
              link: '/read/vuenotice',
              title: '通知提醒',
              breadcrumb: [
                '小思阅读',
                '分类3',
                '通知提醒'
              ]
            },
            {
              name: '1-3-2',
              link: '/read/vuecarousel',
              title: '走马灯',
              breadcrumb: [
                '小思阅读',
                '分类3',
                '走马灯'
              ]
            },
            {
              name: '1-3-2',
              link: '/read/vuecard',
              title: '卡片',
              breadcrumb: [
                '小思阅读',
                '分类3',
                '卡片'
              ]
            },
            {
              name: '1-3-2',
              link: '/read/vuemodal',
              title: '对话框',
              breadcrumb: [
                '小思阅读',
                '分类3',
                '对话框'
              ]
            },
            {
              name: '1-3-2',
              link: '/read/vuealert',
              title: '警告提示',
              breadcrumb: [
                '小思阅读',
                '分类3',
                '警告提示'
              ]
            }
          ]
        }
      ]
    },
    {
      link: '/arts',
      title: '导航二',
      leftNav: [
        {
          name: '1',
          icon: 'el-icon-message',
          title: '分类1',
          subs: [
            {
              name: '1-1-1',
              link: '/arts/vuetable',
              title: '表格',
              breadcrumb: [
                '小思艺术',
                '分类1',
                '表格'
              ]
            },
            {
              name: '1-1-2',
              link: '/arts/vueform',
              title: '表单',
              breadcrumb: [
                '小思艺术',
                '分类1',
                '表单'
              ]
            }
          ]
        },
        {
          name: '2',
          icon: 'el-icon-menu',
          title: '分类2',
          subs: [
            {
              name: '1-2-1',
              link: '/arts/vueprogress',
              title: '进度条',
              breadcrumb: [
                '小思艺术',
                '分类3',
                '进度条'
              ]
            },
            {
              name: '1-2-2',
              link: '/arts/vuenotice',
              title: '通知提醒',
              breadcrumb: [
                '小思艺术',
                '分类3',
                '通知提醒'
              ]
            },
            {
              name: '1-2-2',
              link: '/arts/vuecarousel',
              title: '走马灯',
              breadcrumb: [
                '小思艺术',
                '分类3',
                '走马灯'
              ]
            }
          ]
        }
      ]
    },
    {
      link: '/learn',
      title: '导航三',
      leftNav: [
        {
          name: '1',
          icon: 'el-icon-message',
          title: '分类1',
          subs: [
            {
              name: '1-1-1',
              link: '/learn/vuetable',
              title: '表格',
              breadcrumb: [
                '小思课程',
                '分类1',
                '表格'
              ]
            },
            {
              name: '1-1-2',
              link: '/learn/vueform',
              title: '表单',
              breadcrumb: [
                '小思课程',
                '分类1',
                '表单'
              ]
            }
          ]
        }
      ]
    }
  ],
  nowIndex: 0,
  breadcrumb: '',
  nowPages: '',
  nowOpen: [],
  // 个人中心
  user: {
    name: '小明001'
  },
  // 登陆
  msg: '',
  form: {
    username: '',
    password: ''
  }
}
