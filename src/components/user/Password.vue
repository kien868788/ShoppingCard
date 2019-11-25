<template>
  <div class="change-pass">
    <h5>Đổi mật khẩu</h5>
    <hr>
    <div class="input-pass">
      <v-text-field
        placeholder="Mật khẩu cũ"
        type="password"
        v-model="oldPassword"
      >
      </v-text-field>
      <v-text-field
        placeholder="Mật khẩu mới"
        type="password"
        v-model="newPassword"
      >
      </v-text-field>
      <v-text-field
        placeholder="Xác nhận mật khẩu"
        type="password"
        v-model="reNewPassword"
        :rules="[
          v => (v === newPassword) || 'Mật khẩu xác nhận sai!!!',
        ]"
      >
      </v-text-field>
      <br>
      <v-alert type="error" :value="!!errorMessage" dense outlined> {{ errorMessage }}</v-alert>
      <v-alert type="success" :value="!!successMessage" dense outlined> {{ successMessage }}</v-alert>
      <v-row justify="center">
        <button @click="updatePassword()" class="col-8 btn-danger btn-block">Cập nhật</button>
      </v-row>
    </div>
  </div>
</template>

<script>
import ValidateMixin from '@/mixins/validation';
import userService from '../../services/users.service'

export default {
  mixins: [ValidateMixin],
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      reNewPassword: '',
      errorMessage: undefined,
      successMessage: undefined
    }
  },

  methods: {
    async updatePassword() {
      let isSuccess = false
      try {
        if (this.newPassword == this.reNewPassword) {
          let res = await userService.updatePassword({ oldPassword: this.oldPassword, newPassword: this.newPassword})
          if (res.status == 200) {
            isSuccess = true
          }
        }
      } catch(error) {

      }
      if (isSuccess) {
        this.successMessage = "Update password thành công !!!"
        setTimeout(()=> this.successMessage = undefined, 3000)
      } else {
        this.errorMessage = "Update password không thành công !!!"
        setTimeout(()=> this.errorMessage = undefined, 3000)
      }

      this.oldPassword = ''
      this.newPassword = ''
      this.reNewPassword = ''
    }
  }
}
</script>

<style scoped>

</style>
