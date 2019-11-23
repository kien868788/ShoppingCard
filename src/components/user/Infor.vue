<template>
  <div class="infor">
    <h5>Thông tin tài khoản</h5>
    <v-alert type="error" :value="!!errorMessage" dense outlined> {{ errorMessage }}</v-alert>
    <v-alert type="success" :value="!!successMessage" dense outlined> {{ successMessage }}</v-alert>
    <hr>
    <div class="row">
      <div class="col-4 pt-5">Email</div>
      <v-text-field
        class="col-8"
        placeholder="Email"
        disabled
        :value="$currentUser.email"
      ></v-text-field>
    </div>
    <br>
    <div class="row">
      <div class="col-4 pt-5">Số điện thoại</div>
      <v-text-field
        class="col-8"
        placeholder="Số điện thoại"
        v-model="phoneNumber"
        :rules="[rules.phone]"
      ></v-text-field>
    </div>
    <br>
    <div class="row">
      <div class="col-4 pt-5">Họ và tên</div>
      <v-text-field
        class="col-8"
        placeholder="Họ và tên"
        v-model="fullName"
      ></v-text-field>
    </div>
    <br>
    <v-row justify="center">
      <button type="submit" class="col-8 button-update-info" @click="updateUserInfor">Cập nhật thông tin</button>
    </v-row>
  </div>
</template>

<script>
import ValidationMixin from '../../mixins/validation'
import userService from '../../services/users.service'
export default {
  mixins: [ValidationMixin],

  data() {
    return {
      phoneNumber: '',
      fullName: '',

      errorMessage: undefined,
      successMessage: undefined,
    }
  },

  methods: {
    init() {
      this.phoneNumber = this.$currentUser.phoneNumber;
      this.fullName = this.$currentUser.fullName;
    },

    async updateUserInfor() {
      try {
        await userService.update({ phoneNumber: this.phoneNumber, fullName: this.fullName });
        this.successMessage = 'Cập nhập thành công !!';
      } catch (error) {
        this.errorMessage = 'Cập nhập thất bại !!';
      }
    }
  },

  mounted() {
    this.init();
  }

}
</script>

<style scoped>

</style>
