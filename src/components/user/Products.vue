<template>
  <div class="row">
    <div class="order-item col-md-8" v-for="order in orders">
      <div class="row">
        <div class="col-md-9">
          <div v-for="orderDetail in order.orderDetails">
            <div class="row">
              <div class="col-md-4">
                <img class="img-responsive" width=100% :src="$getImageUrl(orderDetail.product.images[0].image_path)" alt="">
              </div>
              <div class="col-md-8">
                <div><strong>{{ orderDetail.product.name }}</strong></div>
                <div>{{ orderDetail.quantity }} * {{ orderDetail.product.discountPrice }} = {{  orderDetail.quantity * orderDetail.product.discountPrice }} VND</div>
                <div class="time-order"><i>{{ $showTime(order.createAt) }}</i></div>
              </div>
            </div>
            <hr class="hr-order">
          </div>
        </div>
        <div class="col-md-3">
          <div class="status-order-badge">
            <div v-if="order.status == orderStatus.completed" class="order-status completed-status"><i class="fas fa-check"></i> {{ order.status}}</div>
            <div v-if="order.status == orderStatus.waiting" class="order-status waiting-status"><i class="fas fa-exclamation"></i> {{ order.status}}</div>
            <div v-if="order.status == orderStatus.cancel" class="order-status cancel-status"><i class="fas fa-times"></i> {{ order.status}}</div>
            <div v-if="order.status == orderStatus.shipping" class="order-status shipping-status"><i class="fas fa-shipping-fast"></i> {{ order.status}}</div>
            <div v-if="order.status == orderStatus.confirmed" class="order-status confirmed-status"><i class="fas fa-shipping-fast"></i> {{ order.status}}</div>
            <div v-if="order.status == orderStatus.failed" class="order-status failed-status"><i class="fas fa-times"></i> {{ order.status}}</div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
 import OrderService from '../../services/orders.service'

export default {
  data() {
    return {
      orders: [],
      orderStatus: {
        waiting: 'waiting',
        completed: 'completed',
        cancel: 'cancel',
        failed: 'failed',
        shipping: 'shipping',
        confirmed: 'confirmed'
      }
    }
  },

  methods: {
    async init() {
      try {
        let res = await OrderService.getMyOrders()
        this.orders = res.data.orders
      } catch (err) {

      }
    }
  },

  mounted() {
    this.init()
  }
}

</script>

<style lang="css">
  .time-order {
    font-size: 0.8em;
  }

  .order-status {
    padding: 3px 7px;
    color: white;
    display: inline-block;
    width: auto;
    font-size: 0.8em;
    border-radius: 15px;
    margin-bottom: 8px;
  }

  .completed-status {
    background: green;
  }

  .waiting-status {
    background: red;
  }

  .shipping-status {
    background: blue;
    cursor: pointer;
  }

  .cancel-status {
    background: gray;
  }

  .confirmed-status {
    background: #2e86de;
    cursor: pointer;
  }

  .failed-status {
    background: black;
  }

  .order-item {
    margin-bottom: 15px;
    border: 1px dotted black;
  }

  .status-order-badge {
    width: 100% !important;
    text-align: right;
  }

  .hr-order {
    margin: 5px !important;
  }
</style>
