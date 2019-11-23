<template>
  <div class="info-user row">
    <div class="col-3">
      <side-bar></side-bar>
    </div>
    <div class="col-9">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/user/SideBar'
export default {

  components: {
    SideBar
  },

  props: ['id'],

  data() {
    return {

    }
  },

  methods: {

  },

  mounted() {
  }
}
</script>

<style scoped>

</style>
