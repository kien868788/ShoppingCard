<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="orders"
      :page.sync="page"
      :server-items-length="total"
      :items-per-page.sync="limit"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Danh sách đơn hàng</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          >
          </v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>

      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.user.fullName }}</td>
          <td>{{ $showTime(item.createAt) }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.shippingFee }}</td>
          <td>
            <div v-if="item.status == orderStatus.completed" class="order-status completed-status"><i class="fas fa-check"></i> {{ item.status}}</div>
            <div v-if="item.status == orderStatus.waiting" class="order-status waiting-status"><i class="fas fa-exclamation"></i> {{ item.status}}</div>
            <div v-if="item.status == orderStatus.cancel" class="order-status cancel-status"><i class="fas fa-times"></i> {{ item.status}}</div>
            <div
              v-if="item.status == orderStatus.shipping"
              class="order-status shipping-status"
              @click="openFinishedOrderDialog(item)"
            >
              <i class="fas fa-shipping-fast"></i>
              {{ item.status}}
            </div>
            <div
              @click="openAcceptOrderDialog(item)"
              v-if="item.status == orderStatus.confirmed"
                 class="order-status confirmed-status"><i class="fas fa-shipping-fast"></i> {{ item.status}}</div>
            <div v-if="item.status == orderStatus.failed" class="order-status failed-status"><i class="fas fa-times"></i> {{ item.status}}</div>
          </td>
        </tr>
      </template>
    </v-data-table>
    <v-dialog
      v-model="finishOrderDialogVisible"
      @click:outside="finishOrderDialogVisible = false"
      @keydown.esc="finishOrderDialogVisible = false"
      max-width="500"
    >
      <v-card
      >
        <v-card-title>
          Bạn muốn cập nhập status nào?
        </v-card-title>

        <v-card-actions>
          <v-container class="ma-0 pa-0">
            <v-row justify="space-around" class="ma-0 pa-0 text-center">
              <v-col cols="6" class="pr-2 d-flex justify-end">
                <v-btn
                  class="white--text"
                  color="black"
                  width="200px"
                  @click="finishOrder(orderStatus.failed)"
                >
                  Failed
                </v-btn>
              </v-col>
              <v-col cols="6" class="pl-2 d-flex justify-start">
                <v-btn
                  class="white--text"
                  color="success"
                  width="200px"
                  @click="finishOrder(orderStatus.completed)"
                >
                  Completed
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>

      </v-card>
    </v-dialog>
    <v-dialog
      v-model="acceptOrderDialogVisible"
      @click:outside="acceptOrderDialogVisible = false"
      @keydown.esc="acceptOrderDialogVisible = false"
      max-width="500"
    >
      <v-card
      >
        <v-card-title>
          Bạn muốn cập nhập status nào?
        </v-card-title>

        <v-card-actions>
          <v-container class="ma-0 pa-0">
            <v-row justify="space-around" class="ma-0 pa-0 text-center">
              <v-col cols="6" class="pr-2 d-flex justify-end">
                <v-btn
                  color="gray"
                  width="200px"
                  @click="acceptOrders(orderStatus.cancel)"
                >
                  Cancel
                </v-btn>
              </v-col>
              <v-col cols="6" class="pl-2 d-flex justify-start">
                <v-btn
                  class="white--text"
                  color="blue"
                  width="200px"
                  @click="acceptOrders(orderStatus.shipping)"
                >
                  Shipping
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import OrderService from '../../services/orders.service'

  export default {
    data() {
      return {
        finishOrderDialogVisible: false,
        acceptOrderDialogVisible: false,
        editingId: undefined,
        acceptingId: undefined,
        orderAcceptStatus: undefined,
        orderFinishStatus: undefined,
        orders: [],
        orderStatus: {
          waiting: 'waiting',
          completed: 'completed',
          cancel: 'cancel',
          failed: 'failed',
          shipping: 'shipping',
          confirmed: 'confirmed'
        },

        limit: 10,
        page: 1,
        total: -1,

        headers: [
          {
            text: "Khách hàng",
            align: "left",
          },
          {
            text: "Ngày mua",
            align: "left",
          },
          {
            text: "Tổng tiền",
            align: "left",
          },
          {
            text: "Tiền ship",
            align: "left",
          },
          {
            text: "Tình trạng",
            align: "left",
          },
        ],
      }
    },

    mounted() {
      this.init();
    },

    watch: {
      page() {
        this.init();
      },

      limit() {
        this.init();
      },
    },

    methods: {
      openFinishedOrderDialog({ _id }) {
        this.editingId = _id;
        this.finishOrderDialogVisible = true;
      },

      openAcceptOrderDialog({ _id }) {
        this.acceptingId = _id;
        this.acceptOrderDialogVisible = true;
      },


      async fetOrders() {
        const { data: res } = await OrderService.getAllOrders({page: this.page, limit: this.limit});
        this.orders = res.orders;
        this.total = res.total;
      },

      async init() {
        this.fetOrders()
      },

      async acceptOrders(status) {
        try {
          const {data: res} = await OrderService.acceptOrders({
            orderIds: [this.acceptingId],
            status: status
          })
          this.fetOrders()
          this.acceptOrderDialogVisible = false
        } catch (e) {
          console.log(e)
        }
      },

      async finishOrder(status) {
        try {
          const {data: res} = await OrderService.acceptOrders({
            orderIds: [this.editingId],
            status: status
          })
          this.fetOrders()
          this.finishOrderDialogVisible = false
        } catch (e) {
          console.log(e)
        }
      }
    },
  }
</script>

<style scoped>

</style>
