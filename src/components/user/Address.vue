<template>
  <div class="address">
    <h5>Địa chỉ nhận hàng</h5>
    <hr>
    <div>
      <div class="list-address" v-for="address in addresses">
        <div class="address-info" >
          <p class="address-info-name">{{ $currentUser.fullName }}</p>
          <p class="address-info-address">{{ address }}</p>
          Điện thoại: <span class="address-info-phone">{{ $currentUser.phoneNumber }}</span>
          <span @click="removeShippingAddress(address)"><i class="fas fa-trash edit-address"></i></span>
        </div>
      </div>
      <v-alert type="error" :value="!!errorMessage" dense outlined> {{ errorMessage }}</v-alert>
      <v-text-field
        placeholder="Nhập địa chỉ ship mới"
        v-model="newShippingAddress"
        @keyup.enter.native="addShippingAddress()"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
  import userService from '../../services/users.service'
  export default {
    data () {
      return {
        addresses: [],
        errorMessage: undefined,
        newShippingAddress: ''
      }
    },

    methods: {
      init() {
        this.addresses = this.$currentUser.shippingAddresses
      },
      async removeShippingAddress(address) {
        try {
         let res = await userService.removeShippingAddress({shippingAddress: address})
          this.addresses = res.data
        } catch (error) {
          this.errorMessage = 'Thêm đại chỉ ship thất bại !!';
        }
      },

      async addShippingAddress() {
        try {
          let res = await userService.addShippingAddress({shippingAddress: this.newShippingAddress})
          this.addresses = res.data
          this.newShippingAddress = ''
        } catch (error) {
          this.errorMessage = 'Thêm địa chỉ ship thất bại !!';
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
