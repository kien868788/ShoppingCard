<template>
  <div class="product-grid">
    <div class="product-image">
      <a href="#">
        <img class="pic-1" :src="product.images[0]">
        <img class="pic-2" v-if="product.images[1]" :src="product.images[1]">
      </a>
      <ul class="social">
        <li><a href="" data-tip="Thêm vào giỏ"><i class="fa fa-shopping-cart"></i></a></li>
      </ul>
      <span class="product-new-label">Sale</span>
      <span class="product-discount-label">20%</span>
    </div>
    <ul class="rating">
      <li class="fa fa-star"></li>
      <li class="fa fa-star"></li>
      <li class="fa fa-star"></li>
      <li class="fa fa-star"></li>
      <li class="fa fa-star disable"></li>
    </ul>
    <div class="product-content">
      <h3 class="title"><a href="#">{{ product.name }}</a></h3>
      <div class="price">{{ `$${ product.discountPrice }`}}
        <span>{{ `$${ product.price }`}}</span>
      </div>
      <a class="add-to-cart" href="">+ Add To Cart</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },

  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>
