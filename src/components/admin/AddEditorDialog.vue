<template>
  <v-dialog
    :value="visible"
    max-width="600"
    @keydown.esc="closeDialog()"
    @click:outside="closeDialog()"
  >
    <v-card
      dense
      class="mx-auto"
    >
      <v-card-title>
        Thêm thể Editor
      </v-card-title>
      <v-card-actions>
        <v-container>
          <v-row>
            <v-container fluid>
              <v-form ref="form">
                <v-row>
                  <v-col cols="3">
                    <v-subheader class="font-weight-bold pt-6 px-0">Email<span class="red--text">&ensp;*</span></v-subheader>
                  </v-col>
                  <v-col cols="9">
                    <v-text-field
                      placeholder="Nhập email"
                      v-model="email"
                      :rules="[rules.email]"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <v-subheader class="font-weight-bold pt-6 px-0">Password<span class="red--text">&ensp;*</span></v-subheader>
                  </v-col>
                  <v-col cols="9">
                    <v-text-field
                      :type="'password'"
                      placeholder="Nhập password"
                      v-model="password"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3">
                    <v-subheader class="font-weight-bold pt-6 px-0">Full name<span class="red--text">&ensp;*</span></v-subheader>
                  </v-col>
                  <v-col cols="9">
                    <v-text-field
                      placeholder="Nhập tên"
                      v-model="fullName"
                      :rules="[rules.required]"
                    ></v-text-field>
                  </v-col>
                </v-row>

              </v-form>

              <v-alert type="success" :value="!!successMessage" dense outlined> {{ successMessage }}</v-alert>
              <v-alert type="error" :value="!!errorMessage" dense outlined> {{ errorMessage }}</v-alert>

              <v-row justify="center">
                <v-btn color="success" @click="add" min-width="300">Thêm</v-btn>
              </v-row>

            </v-container>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ValidationMixin from '../../mixins/validation'
import FormMixin from '../../mixins/form'
import UserService from '../../services/users.service'

export default {

  mixins: [ValidationMixin, FormMixin],

  props: {
    visible: Boolean
  },

  watch: {
    visible(val) {
      if (!val) {
        setTimeout(() => {
          this.clearInput();
          this.clearMessage();
        }, 200)
      }
    },
  },

  data() {
    return {
      fullName: '',
      email: '',
      password: ''
    }
  },

  methods: {

    async add() {
      if (!this.$refs.form.validate()) {
        return;
      }
      try {
        await UserService.createEditor(this.getBuiltItem());
        this.showSuccessMessage("Thêm Editor thành công!!")
        this.$emit('save');
        this.clearInput();
      } catch (e) {
        this.showErrorMessage("Thêm Editor thất bại!!")
      }
      this.clearMessage()
    },

    closeDialog() {
      this.$emit('update:visible', false);
    },

    clearMessage() {
      setTimeout(()=> this.successMessage = undefined, 3000)
      setTimeout(()=> this.errorMessage = undefined, 3000)
    },

    getBuiltItem() {
      return {
        fullName: this.fullName,
        email: this.email,
        password: this.password
      }
    }
  },
}
</script>

<style lang="stylus">

</style>
