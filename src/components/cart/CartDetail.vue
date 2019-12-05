<template>
  <div style="padding: 0 100px 0 100px">
    <h4 class="header">Giỏ hàng</h4>
    <v-data-table
      v-model="selectedCartItems"
      :headers="headers"
      :items="cartItems"
      item-key="_id"
      show-select
      hide-default-footer
    >
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item._id" class="text-left">
            <td>
              <v-checkbox
                class="ma-0 pa-0"
                hide-details
                v-model="selectedCartItems"
                :value="item"
              >
              </v-checkbox>
            </td>
            <td class="d-flex">
              <v-img
                :src="$getImageUrl(item.product.images[0].image_path)"
                max-width="50px"
                max-height="50px"
              ></v-img>
              <div class="mt-3 ml-2">
                {{ item.product.name }}
              </div>
            </td>

            <td>{{ isSale(item.product) ? item.product.discountPrice : item.product.price }}</td>

            <td>
              <v-text-field
                v-model="item.quantity"
                type="number"
                hide-details
                class="pa-0 ma-0"
              >
              </v-text-field>
            </td>
            <td>{{ (isSale(item.product) ? item.product.discountPrice : item.product.price) * item.quantity }} VNĐ</td>
            <td>
              <v-icon
                small
                @click="removeCartItem(item)"
              >
                delete
              </v-icon>
            </td>
          </tr>
        </tbody>
      </template>
      <template v-slot:footer>
        <v-container class="mx-0" fluid>
          <v-row>
            <v-col cols="3" class="headline font-weight-bold">
              Tổng tiền:
            </v-col>
            <v-col cols="3"></v-col>
            <v-col cols="4" class="headline font-weight-bold">
              {{ totalPrice }} VNĐ
            </v-col>
            <v-col>
              <v-btn
                min-width="150px"
                color="success"
                @click="orderDialog = true"
              >
                Thanh Toán
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-data-table>
    <v-dialog
      v-model="orderDialog"
      max-width="700"
      @keydown.esc="closeDialog"
      @click:outside="closeDialog"
    >
      <v-stepper
        v-model="step"
      >
        <v-stepper-header>
          <v-stepper-step color="success" :complete="step > 1" step="1">Sản phẩm</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step color="success" :complete="step > 2" step="2">Địa chỉ</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step color="success" :complete="step > 3" step="3">Thành công</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-12"
              min-height="200px"
              max-height="600px"
            >
              <v-card-title>
                Bạn có chắc muốn đặt hàng những sản phẩm dưới đây?
              </v-card-title>

              <v-card-text>
                <v-container fluid class="ma-0 pa-0 text-center">
                  <v-row class="subtitle-1 font-weight-bold">
                    <v-col cols="4">Tên sản phẩm</v-col>
                    <v-col cols="4">Số lượng</v-col>
                    <v-col cols="4">Giá</v-col>
                  </v-row>
                  <v-row v-for="cartItem in selectedCartItems" :key="cartItem._id">
                    <v-col cols="4">{{ cartItem.product.name }}</v-col>
                    <v-col cols="4">{{ cartItem.quantity }}</v-col>
                    <v-col cols="4">{{ isSale(cartItem.product) ? cartItem.product.discountPrice : cartItem.product.price }} VNĐ</v-col>
                  </v-row>
                  <v-row justify="end">
                    <v-col cols="5" class="headline font-weight-bold">Tổng tiền: {{ totalPrice }} VNĐ</v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>

            <v-btn
              color="success"
              @click="step = 2"
            >
              Next
            </v-btn>

            <v-btn
              @click="closeDialog"
            >
              Cancel
            </v-btn>
          </v-stepper-content>


          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              height="200px"
            >
              <v-card-title>
                {{ addressTitle }}
              </v-card-title>

              <v-card-text v-if="!hasShippingAddresses">
                <v-text-field
                  v-model="selectedShippingAddress"
                  placeholder="Nhập địa chỉ ship mới"
                  solo
                >
                </v-text-field>
              </v-card-text>

              <v-card-text v-else>
                <v-radio-group v-model="selectedShippingAddress">
                  <v-radio
                    v-for="(address, index) in shippingAddress"
                    :key="address + index"
                    :value="address"
                    :label="address"
                  >
                  </v-radio>
                </v-radio-group>
              </v-card-text>

            </v-card>

            <v-btn
              color="success"
              @click="order"
            >
              Order
            </v-btn>

            <v-btn
              @click="closeDialog"
            >
              Cancel
            </v-btn>

          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            >
              <v-card-title>
                Bạn đã đặt hàng thành công
              </v-card-title>
            </v-card>
          </v-stepper-content>

        </v-stepper-items>
      </v-stepper>
    </v-dialog>
  </div>
</template>

<script>
import orderService from '../../services/orders.service'
import cartItemService from '../../services/cart-items.service'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      step: 1,
      orderDialog: false,
      headers: [
        {
          text: "Sản phẩm",
          align: 'left',
          sortable: false
        },
        {
          text: "Đơn giá",
          align: 'left',
          value: 'price'
        },
        {
          text: "Số lương",
          align: 'left',
          value: 'amounts'
        },
        {
          text: "Số tiền",
          align: 'left'
        },
        {
          text: "Thao tác",
          align: 'left'
        }
      ],
      selectedCartItems : [],
      selectedShippingAddress: ""
    }
  },

  computed: {
    ...mapGetters({ cartItems : 'cart/cartItems'}),
    ...mapGetters({ shippingAddress: 'user/shippingAddress' }),
    ...mapGetters({ phoneNumber: 'user/phoneNumber' }),
    totalPrice() {
      return this.selectedCartItems.map(
        item => (this.isSale(item.product) ? item.product.discountPrice : item.product.price) * item.quantity
      ).reduce((acc, elm) => acc + elm, 0);
    },

    hasShippingAddresses() {
      return this.shippingAddress && this.shippingAddress.length > 0;
    },

    addressTitle() {
      return this.hasShippingAddresses ? "Hãy chọn những địa chỉ sau để giao hàng" : "Bạn chưa có địa chỉ xin hãy tạo mới";
    }
  },

  methods: {
    isSale({ discountPrice }) {
      return !!discountPrice;
    },

    closeDialog() {
      this.step = 1;
      this.orderDialog = false;
    },

    async order() {
      if (!this.hasShippingAddresses) {
        await this.$store.dispatch("user/addShippingAddress", this.selectedShippingAddress)
      }

      for (let i = 0 ; i < this.selectedCartItems.length ; i++) {
        await cartItemService.update(this.selectedCartItems[i]._id, { quantity: this.selectedCartItems[i].quantity });

      }

      const cartItemIds = this.selectedCartItems.map(item => item._id);

      await orderService.create({cartItemIds, shippingAddress: this.selectedShippingAddress })
      await this.$store.dispatch('cart/getCartData');
      this.step = 3;
    },

    async removeCartItem({ _id }) {
      if (confirm('Bạn chắc chắn muốn xóa sản phẩm này?')) {
        await this.$store.dispatch('cart/removeCart', _id);
      }
    }
  },
}
</script>

<style scoped>

</style>
