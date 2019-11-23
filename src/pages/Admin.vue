<template>
  <v-container class="ma-0">
    <v-row>
      <v-col cols="3">
        <v-card
          height="400"
          width="256"
          class="mx-auto"
        >
          <v-navigation-drawer permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Application</v-list-item-title><v-list-item-subtitle>
                  subtext
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
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>

      </v-col>
      <v-col cols="9">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Thống kê', icon: 'mdi-view-dashboard' },
        { title: 'Đơn hàng', icon: 'mdi-image' },
        { title: 'Nhân viên', icon: 'mdi-help-box' },
      ],
      right: null,
    }
  }
}
</script>

<style scoped>

</style>
