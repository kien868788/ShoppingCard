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
      originalItems: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          route: 'admin-dashboard',
          isAdmin: true,
        },
        {
          title: 'Thể loại',
          icon: 'fa fa-list',
          route: 'admin-categories',
        },
        {
          title: 'Sản phẩm',
          icon: 'fab fa-product-hunt',
          route: 'admin-products'
        },
        {
          title: 'Editors',
          icon: 'fa fa-user-edit',
          route: 'admin-editors',
          isAdmin: true,
        },
        {
          title: 'Đơn hàng',
          icon: 'fas fa-money-check-alt',
          route: 'admin-orders',
          isAdmin: true,
        },
      ],
      right: null,
    }
  },

  computed: {
    items() {
      return this.$isAdmin ? this.originalItems :
        this.originalItems.filter(item => !item.isAdmin)
    }
  },
}
</script>

<style scoped>

</style>
