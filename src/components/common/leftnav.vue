<template>
  <div class="leftnav">
    <Menu theme="dark" width="auto" v-for="(li,index) in dataItems" :key="li.index" accordion :active-name="nowPages" :open-names="nowOpen" v-if="nowIndex===index">
      <Submenu v-for="item in li.leftNav" :key="item.index" :name="item.name">
        <template slot="title">
          <Icon :type="item.icon"></Icon>
          {{item.title}}
        </template>
        <MenuItem v-for="subitem in item.subs" :key="subitem.index" :name="subitem.link">
          <div class="addtab" @click="addTab(subitem)">
            {{subitem.title}}
          </div>
        </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'dataItems',
      'nowPages',
      'nowOpen',
      'nowIndex'
    ])
  },
  methods: {
    ...mapActions([
      'addTab'
    ])
  }
}
</script>

<style lang="scss" scoped>
.leftnav {
  background-color: #495060;
  color: #bfcbd9;
  height: 100%;
  width: 20%;
  overflow: hidden;
  ul {
    width: 100%;
    height: 100%;
  }
}
.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item{
  padding: 0;
}
.addtab{
  padding: 14px 24px 14px 43px;
}
</style>

