<template xmlns:v="http://www.w3.org/1999/xhtml">
  <div>
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-aqua"><i class="fas fa-user"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">Tổng user</span>
            <span class="info-box-number">{{ totalUser}}</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-aqua"><i class="fab fa-product-hunt"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">Sản phẩm</span>
            <span class="info-box-number">{{ totalProduct}}</span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-aqua"><i class="fas fa-shopping-bag"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">Đặt hàng</span>
            <span class="info-box-number">{{ orderPercent}}<small>% thành công</small></span>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-aqua"><i class="fas fa-money-check-alt"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">Lợi nhuận</span>
            <span class="info-box-number">{{ totalProfit }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="Chart col-md-12">
        <h2>Doanh thu</h2>
        <line-chart :chartData="revenue" :chartLabel="chartLabel" :firstDataLabel="firstDataLabel" :secondDataLabel="secondDataLabel"></line-chart>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="row" v-if="!!topUsers">
          <div class="col-12 box box-danger">
            <div class="box-header with-border">
              <h3 class="box-title">Top user</h3>

              <div class="box-tools pull-right">
                <span class="label label-danger">{{ topUsers ? topUsers.length : 0}} top users</span>
              </div>
            </div>
            <div class="box-body no-padding">
              <ul>
                <carousel :autoplay="true" :nav="false" :items="4" :margin="15" v-for="topUser in topUsers">
                  <div class="users-item">
                    <img class="user-img" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="User Image">
                    <a class="users-list-name" href="#">{{ topUser.email }}</a>
                    <span class="users-list-date">{{ topUser.numberOrder }} đơn hàng</span>
                  </div>
                </carousel>
              </ul>
            </div>
          </div>
        </div>
        <div class="row"  v-if="!!lastedUsers">
          <div class="col-12 box box-danger">
            <div class="box-header with-border">
              <h3 class="box-title">User mới</h3>

              <div class="box-tools pull-right">
                <span class="label label-danger">{{ lastedUsers ? lastedUsers.length : 0}}ser mới</span>
              </div>
            </div>
            <div class="box-body no-padding">
              <ul>
                <carousel :autoplay="true" :nav="false" :items="4" :margin="15" v-for="lastedUser in lastedUsers">
                  <div class="users-item">
                    <img class="user-img" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="User Image">
                    <a class="users-list-name" href="#">{{ lastedUser.fullName }}</a>
                    <span class="users-list-date">{{ $showTime(lastedUser.createdAt) }}</span>
                  </div>
                </carousel>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 padding-left-30">
        <div class="row">
          <div class="col-12 box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Top sản phẩm</h3>
            </div>
            <div class="box-body">
              <ul class="products-list product-list-in-box">
                <li class="item">
                  <div class="product-img">
                    <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Product Image">
                  </div>
                  <div class="product-info">
                    <a href="" class="product-title">Samsung TV
                      <span class="label label-warning pull-right">$1800</span></a>
                    <span class="product-description">
                          Samsung 32" 1080p 60Hz LED Smart HDTV.
                        </span>
                  </div>
                </li>
                <li class="item">
                  <div class="product-img">
                    <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Product Image">
                  </div>
                  <div class="product-info">
                    <a href="" class="product-title">Bicycle
                      <span class="label label-info pull-right">$700</span></a>
                    <span class="product-description">
                          26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                        </span>
                  </div>
                </li>
                <li class="item">
                  <div class="product-img">
                    <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Product Image">
                  </div>
                  <div class="product-info">
                    <a href="" class="product-title">Xbox One <span class="label label-danger pull-right">$350</span></a>
                    <span class="product-description">
                          Xbox One Console Bundle with Halo Master Chief Collection.
                        </span>
                  </div>
                </li>
                <li class="item">
                  <div class="product-img">
                    <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Product Image">
                  </div>
                  <div class="product-info">
                    <a href="" class="product-title">PlayStation 4
                      <span class="label label-success pull-right">$399</span></a>
                    <span class="product-description">
                          PlayStation 4 500GB Console (PS4)
                        </span>
                  </div>
                </li>
                <li class="item">
                  <div class="product-img">
                    <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Product Image">
                  </div>
                  <div class="product-info">
                    <a href="" class="product-title">Samsung TV
                      <span class="label label-warning pull-right">$1800</span></a>
                    <span class="product-description">
                          Samsung 32" 1080p 60Hz LED Smart HDTV.
                        </span>
                  </div>
                </li>
                <li class="item">
                  <div class="product-img">
                    <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Product Image">
                  </div>
                  <div class="product-info">
                    <a href="" class="product-title">Bicycle
                      <span class="label label-info pull-right">$700</span></a>
                    <span class="product-description">
                          26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                        </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'
  import carousel from 'vue-owl-carousel'
  import DashboardService from '../../services/dashboard.service'

  export default {
    components: {
      LineChart,
      carousel,
    },

    data () {
      return {
        totalUser: 201,
        totalProduct: 300,
        orderPercent: 90,
        totalProfit: 1230,
        lastedUsers: [],
        topUsers: [],
        datacollection: null,
        gradient: null,
        gradient2: null,
        firstDataLabel: 'Doanh thu',
        secondDataLabel: 'Phí giao hàng',
        chartLabel: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        revenue: [
          [340, 239, 110, 140, 239, 480, 240, 345, 314, 254, 360, 213],
          [60, 55, 32, 10, 20, 12, 53, 76, 12, 13, 45, 34]
        ]
      }
    },
    mounted () {
      this.loadData()

    },
    methods: {
      async loadData () {
        await this.getOverview()
        await this.getTopUsers()
        await this.getLastedUsers()
      },

      async getLastedUsers () {
        try {
          let {data: users} = await DashboardService.getLastedUsers()
          this.lastedUsers = users

        } catch (e) {
          console.log(e)
        }
      },

      async getTopUsers () {
        try {
          let {data: users} = await DashboardService.getTopUsers()
          this.topUsers = users

        } catch (e) {
          console.log(e)
        }
      },

      async getOverview() {
        try {
          let {data: res} = await DashboardService.getOverview()
          this.totalUser = res.totalUser
          this.totalProduct = res.totalProduct
          this.orderPercent = res.orderPercent
          this.totalProfit = res.totalProfit
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style scoped>
  @keyframes colorchange
  {
    0%   {background: #9b59b6;}
    25%  {background: #f1c40f;}
    50%  {background: #3498db;}
    75%  {background: #1abc9c;}
    100% {background: #9b59b6;}
  }

  .Chart {
    background: #212733;
    border-radius: 15px;
    box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
    margin:  25px 0;
    padding: 15px;
  }

  .Chart h2 {
    margin-top: 0;
    padding: 15px 0;
    color:  white;
    border-bottom: 1px solid #323d54;
  }

  .info-box {
    display: block;
    min-height: 90px;
    background: #fff;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    border-radius: 2px;
    margin-bottom: 15px;
  }

  .bg-aqua, .callout.callout-info, .alert-info, .label-info, .modal-info .modal-body {
    background-color: #00c0ef !important;
  }

  .info-box-content {
    padding: 5px 10px;
    margin-left: 90px;
  }

  .info-box-icon {
    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px;
    display: block;
    float: left;
    height: 90px;
    width: 90px;
    text-align: center;
    font-size: 45px;
    line-height: 90px;
    background: rgba(0,0,0,0.2);
    color: white;
  }

  .info-box-number {
    display: block;
    font-weight: bold;
    font-size: 18px;
  }

  .info-box-text {
    text-transform: uppercase;
  }

  .box.box-danger {
    border-top-color: #FC2525;
  }
  .box.box-primary {
    border-top-color: #1976d2;
  }
  .box {
    position: relative;
    border-radius: 3px;
    background: #ffffff;
    border-top: 3px solid #d2d6de;
    margin-bottom: 20px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  }

  .box-header.with-border {
    border-bottom: 1px solid #f4f4f4;
  }
  .box-header {
    color: #444;
    display: block;
    padding: 10px !important;
    position: relative;
  }

  .box-header .box-title {
    display: inline-block;
    font-size: 18px;
    margin: 0;
    line-height: 1;
  }

  .box-header>.box-tools {
    position: absolute;
    right: 10px;
    top: 5px;
  }

  .danger, .modal-danger .modal-body {
    background-color: #dd4b39 !important;
  }

  .no-padding {
    padding: 0 !important;
  }
  .box-body {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    padding: 12px;
  }


  .user-img {
    border-radius: 50% !important;
    max-width: 100%;
    width: 100px !important;
    height: 100px;
    margin: 0 auto
  }

  .label {
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
    color:white
  }

  .users-list-name {
    font-weight: 600;
    color: #444;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }

  .users-list-date {
    color: #999;
    font-size: 12px;
    text-align: center;
  }
  .users-list-name, .users-list-date {
    display: block;
  }

  .users-item {
    margin-top: 15px !important;
  }

  .products-list .product-img img {
    width: 50px;
    height: 50px;
  }

  .products-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .product-list-in-box>.item {
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0;
    border-bottom: 1px solid #f4f4f4;
  }
  .products-list>.item {
    border-radius: 3px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    padding: 10px 0;
    background: #fff;
    display: block;
  }

  .products-list .product-img {
    float: left;
  }

  .products-list .product-info {
    margin-left: 60px;
  }

  .products-list .product-title {
    font-weight: 600;
    width: 100%;
  }

  .products-list .product-description {
    display: block;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .pull-right {
    float: right!important;
  }
  .label-warning {
    background-color: #f0ad4e;
  }

  .label-danger {
    background-color: #d9534f;
  }

  .label-success {
    background-color: green;
  }

  .padding-left-30 {
    padding-left: 30px !important;
  }
</style>
