<template>
  <div class="change-pass">
    <h5>Đổi mật khẩu</h5>
    <hr>
    <div class="input-pass">
      <v-text-field
        placeholder="Mật khẩu củ"
        type="password"
        :rules="[rules.required]"
        v-model="oldPassword"
      >
      </v-text-field>
      <v-text-field
        placeholder="Mật khẩu mới"
        type="password"
        :rules="[rules.required]"
        v-model="newPassword"
      >
      </v-text-field>
      <v-text-field
        placeholder="Xác nhận mật khẩu"
        type="password"
        v-model="reNewPassword"
        :rules="[
          rules.required,
          v => (v && v === newPassword) || 'Mật khẩu xác nhận sai!!!',
        ]"
      >
      </v-text-field>
      <input class="pass" type="text" placeholder="Mật khẩu mới">
      <input class="pass" type="text" placeholder="Xác nhận mật khẩu">
      <br>
      <button class="button-change-pass">Xác nhận</button>
    </div>
  </div>
</template>

<script>
import ValidateMixin from '@/mixins/validation';

export default {
  mixins: [ValidateMixin],
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      reNewPassword: ''
    }
  }
}
</script>

<style scoped>

</style>
