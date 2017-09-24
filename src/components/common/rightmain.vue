<template>
  <div class="rightmain">
    <Breadcrumb v-if="breadcrumb">
      <BreadcrumbItem href="" v-for="li in breadcrumb" :key="li.index">{{li}}</BreadcrumbItem>
    </Breadcrumb>
    <transition name="fold">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
        <main-index v-if="breadcrumb.length===0"></main-index>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mainIndex from 'components/common/index'
export default {
  components: {
    mainIndex
  },
  computed: {
    ...mapGetters([
      'breadcrumb'
    ])
  }
}
</script>>

<style scoped lang="scss">
.rightmain {
  width: 78%;
  margin-left: 20%;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1%;
  overflow-y: auto;
  .ivu-breadcrumb{
    margin-bottom: 1%;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0
  }
}
</style>
