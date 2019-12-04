<template>
  <div>
    <v-carousel interval="2500">
      <v-carousel-item
        src="@/assets/img/img3.png"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      <v-carousel-item
        src="@/assets/img/img1_1.jpg"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      <v-carousel-item
        src="@/assets/img/img2.png"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <div class="container">
      <h3 class="h3">Sản phẩm bán chạy</h3>
      <div class="row">
        <div class="col-md-3 col-sm-6" v-if="topProducts && topProducts.length" v-for="(product,j) in topProducts" :key="j">
          <product :product="product"></product>
        </div>
        <div class="d-flex justify-end col-md-12">
          <button class="btn-success btn pull-right" @click="getTopProducts()"v-if="topIsEnd == false"><i class="fa fa-plus"></i> Xem thêm</button>
        </div>
      </div>
      <h3 class="h3">Sản phẩm mới</h3>
      <div class="row">
        <div class="col-md-3 col-sm-6" v-if="newProducts && newProducts.length" v-for="(product,j) in newProducts" :key="j">
          <product :product="product"></product>
        </div>
        <div class="d-flex justify-end col-md-12">
          <button class="btn-success btn" @click="getNewProducts()" v-if="newIsEnd == false"><i class="fa fa-plus"></i> Xem thêm</button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import Product from '../components/product/Product'
import productService from '../services/products.service'
export default {
  name: 'IndexPage',

  components: {
    Product
  },

  data () {
    return {
      topProducts: [],
      newProducts: [],
      topIsEnd: true,
      newIsEnd: true,
      topPage: 0,
      newPage: 0
    }
  },

  mounted() {
    this.getTopProducts();
    this.getNewProducts();
  },

  methods: {
    async init() {
      const resp = await productService.getAll();
      this.products = resp.data.products;
    },

    async getTopProducts() {
      this.topPage++
      const {data: res} = await productService.getTopProducts({page: this.topPage});
      this.topProducts = this.topProducts.concat(res.products)
      console.log(this.topProducts)
      this.topIsEnd = res.isEnd
    },

    async getNewProducts() {
      this.newPage++
      const {data: res} = await productService.getNewProducts({page: this.newPage});
      this.newProducts = this.newProducts.concat(res.products)
      this.newIsEnd = res.isEnd
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
