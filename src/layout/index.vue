<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="wrapper">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from '../layout/Header.vue';
import AppFooter from '../layout/Footer.vue';

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<style lang="stylus">
.clickable
  cursor pointer
</style>
