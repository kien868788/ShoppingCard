<template>
  <v-row>
    <v-col cols="2">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            DashBoard
          </v-list-item-title>
          <v-list-item-subtitle>
            Shopping Card
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="{ name: item.route }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col cols="9">
      <router-view></router-view>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          route: 'admin-dashboard'
        },
        {
          title: 'Thể loại',
          icon: 'mdi-view-dashboard',
          route: 'admin-categories'
        },
        {
          title: 'Sản phẩm',
          icon: 'mdi-view-dashboard',
          route: 'admin-products'
        },
        {
          title: 'Editors',
          icon: 'mdi-view-dashboard',
          route: 'admin-editors'
        },
      ],
      right: null,
    }
  }
}
</script>

<style scoped>

</style>
