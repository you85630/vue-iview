<template>
  <div id="app">
    <top-exit></top-exit>
    <top-nav></top-nav>
    <transition name="slide-fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import topNav from 'components/common/topnav'
import topExit from 'components/common/topexit'
import footerNav from 'components/common/footernav'
export default {
  components: {
    topNav,
    topExit,
    footerNav
  },
  created () {
    this.$store.dispatch('getItems')
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .5s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>
