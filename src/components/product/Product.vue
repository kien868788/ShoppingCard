<template>
  <div class="product-grid">
    <div class="product-image">
      <a href="#">
        <img class="pic-1" :src="$getImageUrl(product.images[0].image_path)">
        <img class="pic-2" v-if="product.images[1]" :src="$getImageUrl(product.images[1].image_path)">
      </a>
      <span class="product-new-label" v-if="isSale">Sale</span>
    </div>

    <div class="product-content">
      <h3 class="title"><a href="#">{{ product.name }}</a></h3>
      <div class="price" v-if="isSale">
        {{ `$${ product.discountPrice }`}}
        <span>{{ `$${ product.price }`}}</span>
      </div>

      <div v-else class="price">
        {{ `$${ product.price }` }}
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

  computed: {
    isSale() {
      return this.product.discountPrice > 0 && this.product.price > this.product.discountPrice;
    }
  },

  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>
