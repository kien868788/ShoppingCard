<template>
  <div>
    <ul>
    <b>Quản lý tài khoản</b>
    <li class="button-info" @click="$router.push({ name: 'user-infor'})">Thông tin tài khoản</li>
    <li class="button-change-pass" @click="$router.push({ name: 'user-password'})">Đổi mật khẩu </li>
    <li class="button-vocher">Mã giảm giá của bạn</li>
    <li class="button-quesion">Hỏi đáp</li>
    </ul>
    <ul>
      <b>Quản lý đơn hàng</b>
      <li class="button-product" @click="$router.push({ name: 'user-products'})">Sản phẩm đã mua</li>
      <li class="button-address" @click="$router.push({ name: 'user-address' })">Địa chỉ nhận hàng</li>
      <li class="button-favorite-product" @click="$router.push({ name: 'user-favorite-products' })">Sản phẩm yêu thích</li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
