<template>
  <div>
    <v-carousel>
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
      <h3 class="h3">Shopping</h3>
      <div class="row">
        <div class="col-md-3 col-sm-6" v-for="product in products">
          <product :product="product"></product>
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
      products: []
    }
  },

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      const resp = await productService.getAll();
      this.products = resp.data.products;
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
