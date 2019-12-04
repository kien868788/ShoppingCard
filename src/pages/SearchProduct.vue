<template>
  <div class="container">
    <h3 class="h3">{{ keyword }}</h3>
    <div class="row">
      <div class="col-md-3 col-sm-6" v-for="(product,j) in products" :key="j">
        <product :product="product"></product>
      </div>
      <div class="d-flex justify-end col-md-12">
        <button v-if="isEnd == false" class="btn btn-success text-center" @click="loadProducts()"><i class="fa fa-plus"></i> Xêm thêm</button>
      </div>
    </div>
  </div>
</template>

<script>
import productService from '../services/products.service'
import categoryService from '../services/category.service'
import FormMixin from '../mixins/form'
import Product from '../components/product/Product'

export default {
  mixins: [ FormMixin ],
  props: ['keyword'],
  components: {
    Product
  },

  data() {
    return {
      products: [],
      limit: 4,
      page: 0,
      isEnd: true
    }
  },

  methods: {
    async init() {
      this.keyword = this.keyword || ''
      this.loadProducts()
    },

    async loadProducts() {
       this.page++;
       const {data: res} = await productService.getSearchProducts({keyword: this.keyword, page:this.page});
       this.products = this.products.concat(res.products)
       this.keyword = res.keyword
       this.isEnd = res.isEnd
    }
  },

  mounted() {
    this.init();
  }

}
</script>

<style lang="css" >


</style>
