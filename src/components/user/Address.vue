<template>
  <div class="address">
    <h5>Địa chỉ nhận hàng</h5>
    <hr>
    <div>
      <div class="address-info" >
        <p class="address-info-name">Nguyễn Ngọc thành</p>
        <p class="address-info-address">124 Nguyễn Lương Bằng, Hòa Khánh Bắc, Liên Chiểu, Đà Nẵng</p>
        Điện thoại: <span class="address-info-phone">0123456789</span>
        <i class="fas fa-edit edit-address"></i>
      </div>
      <div class="form-add-address hide">
        <div class="row">
          <div class="col-4">Họ và tên đệm</div>
          <input type="text" class="col-8" placeholder="Họ và tên đệm">
        </div>
        <br>
        <div class="row">
          <div class="col-4">Tên</div>
          <input type="text" class="col-8" placeholder="Tên">
        </div>
        <br>
        <div class="row">
          <div class="col-4" >Địa chỉ</div>
          <input class="col-8"type="text" placeholder="Địa chỉ chi tiết">
        </div>
        <br>
        <div class="row">
          <div class="col-4">Số điện thoại</div>
          <input class="col-8" type="text" placeholder="Số điện thoại">
        </div>
        <br>
        <div class="row button">
          <div class="col-6">
            <button class="add-address button-address">Lưu thông tin</button>
          </div>
          <div class="col-6">
            <button class="cancel-address button-address">Hủy</button>
          </div>
        </div>
      </div>
      <button class="button-add-address show"><i class="fas fa-plus"></i> Thêm địa chỉ</button>
    </div>
  </div>
</template>

<script>
export default {
name: "Address"
}
</script>

<style scoped>

</style>
