<template>
  <div class="product-grid">
    <div class="product-image">
      <router-link :to="{ name: 'product-detail-page', params: { id: product._id }}">
        <img class="pic-1" :src="$getImageUrl(product.images[0].image_path)">
        <img class="pic-2" v-if="product.images[1]" :src="$getImageUrl(product.images[1].image_path)">
      </router-link>
      <span class="product-new-label" v-if="isSale">Sale</span>
    </div>

    <div class="product-content">
      <h3 class="title">
        <router-link :to="{ name: 'product-detail-page', params: { id: product._id }}">{{ product.name }}</router-link>
      </h3>
      <div class="price" v-if="isSale">
        {{ `${ product.discountPrice }`}} VND
        <span>{{ `${ product.price }`}} VND</span>
      </div>

      <div v-else class="price">
        {{ `${ product.price }` }} VND
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
