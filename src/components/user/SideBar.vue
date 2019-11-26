<template>
  <div>
    <v-list v-for="(item, i) in lists" :key="i">
      <v-subheader class="subtitle-1 font-weight-bold"> {{ item.header }} </v-subheader>

      <v-list-item
        v-for="link in item.links"
        ripple
        :key="link.text"
        :to="link.route ? { name: link.route } : undefined"
      >
        <v-list-item-content>
          <v-list-item-title v-text="link.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [{
        header: "Quản lý tài khoản",
        links: [
          {
            text: "Thông tin tài khoản",
            route: "user-infor"
          },
          {
            text: "Đổi mật khẩu",
            route: "user-password",
          },
          {
            text: "Mã giảm giá của bạn",
            route: ""
          },
          {
            text: "Hỏi đáp",
            route: ""
          }
        ]
      },
      {
        header: "Quản lý đơn hàng",
        links: [
          {
            text: "Tình trạng đơn hàng",
            route: "user-products"
          },
          {
            text: "Địa chỉ nhận hàng",
            route: "user-address"
          }
        ]
      }],
    }
  }
}
</script>

<style scoped>

</style>
