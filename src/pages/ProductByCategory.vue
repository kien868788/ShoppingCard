<template>
  <div class="container">
    <h3 class="h3">{{ category }}</h3>
    <div class="row">
      <div class="col-md-3 col-sm-6" v-for="(product,j) in products" :key="j">
        <product :product="product"></product>
      </div>
      <button v-if="isEnd == false" class="btn btn-success text-center" @click="loadProducts()">Loadmore</button>
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
  props: ['categoryId'],
  components: {
    Product
  },

  data() {
    return {
      products: [],
      category: '',
      limit: 4,
      page: 0,
      isEnd: true
    }
  },

  methods: {
    async init() {
      try {
        const {data: category} = await categoryService.getById(this.categoryId);
        this.category = category.name;
      } catch (err) {
        console.log(err);
      }
    },
    async loadProducts() {
      this.page++;
      console.log({limit: this.limit, page: this.page})
      const {data: res} = await productService.getProductsByCategory(this.categoryId, {limit: this.limit, page: this.page});
        this.products = (res.products)
      console.log(res)
      this.isEnd = res.isEnd
    }
  },

  mounted() {
    this.init();
    this.loadProducts();
  }

}
</script>

<style lang="css" >


</style>
