<template>
  <div class="infor">
    <h5>Thông tin tài khoản</h5>
    <hr>
    <div class="row">
      <div class="col-4" >Email</div>
      <v-text-field
        class="col-8"
        placeholder="Email"
        disabled
        :value="$currentUser.email"
      ></v-text-field>
    </div>
    <br>
    <div class="row">
      <div class="col-4">Số điện thoại</div>
      <v-text-field
        class="col-8"
        placeholder="Số điện thoại"
        :value="$currentUser.phoneNumber"
      ></v-text-field>
    </div>
    <br>
    <div class="row">
      <div class="col-4">Họ và tên</div>
      <v-text-field
        class="col-8"
        placeholder="Họ và tên"
        :value="$currentUser.fullName"
      ></v-text-field>
    </div>
    <br>
    <div class="row">
      <div class="col-4">Giới tính</div>
      <div class="col-8">
        <input type="radio" name="gender" checked> Nam
        <input type="radio" name="gender"> Nữ
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-4">Ngày sinh</div>
      <div>
        <input type="date" id="start" name="trip-start"
               value="2019-01-01"
               min="1900-01-01" >
      </div>
    </div>
    <div class="row">
      <div class="col-4">
      </div>
      <div>
        <button type="submit" class="col-8 button-update-info" name="update-info">Cập nhật thông tin</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
