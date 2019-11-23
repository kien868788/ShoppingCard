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
    <div class="container" v-for="j in 3">
      <h3 class="h3">Shopping Demo</h3>
      <div class="row">
        <div class="col-md-3 col-sm-6" v-for="i in 4">
          <product :product="product"></product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../components/product/Product'
export default {
  name: 'IndexPage',

  components: {
    Product
  },

  data () {
    return {
      product: {
        name: "Bad boy style",
        discountPrice: 16,
        price: 20,
        images: [
          'http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg',
          'http://bestjquery.com/tutorial/product-grid/demo9/images/img-4.jpg'
        ]
      }
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
