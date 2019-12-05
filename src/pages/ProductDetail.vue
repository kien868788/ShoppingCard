<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-4">
          <div id="demo" class="carousel slide carousel-fade" data-ride="carousel" data-interval="4000">
            <!-- The slideshow -->
            <v-carousel>
              <v-carousel-item
                v-for="{ image_path } in product.images"
                :key="image_path"
                :src="$getImageUrl(image_path)"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </div>
        </div>
        <div class="col-sm-6">
          <div>
            <p style="font-size:25px;">{{ product.name }}</p>
            <div class="row">
              <p class="col-sm-3" style="font-style:unset;margin-top:11px;">Giá bán: </p>
              <div class="col-sm-4 text-warning"style="font-size:25px;margin-top:3px;">{{ '$' + product.price }}</div>
            </div>
            <div class="row">
              <p class=" col-sm-3 " style="font-style:unset;">Tình trạng:</p>
              <div class="col-sm-4" style="color:red;">
                {{ product.amounts ?  'Còn hàng' : 'Hết hàng'}}
              </div>
            </div>
            <hr>
            <div class="row">
              <p class=" col-sm-5 " style="font-style:unset;">Trọng lượng sản phẩm:</p>
              <div class="col-sm-3">250 gram</div>
            </div>

            <p style="font-style:unset;">Điểm nổi bật:</p>
            <div>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</div>
            <hr>
            <div class="row" v-if="product.amounts">
              <div class="col-sm-5">
                <p>Size *</p>
                <div class="form-group" >
                  <select class="form-control text-dark" id="size" style="background: rgb(223, 221, 221);">
                    <option>S</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-5">
                <p>Số lượng *</p>
                <div class="form-group">
                  <v-autocomplete
                    flat
                    class="form-control"
                    style="background: rgb(223, 221, 221);"
                    :items="amounts"
                    v-model="quantity"
                  >
                  </v-autocomplete>
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col -sm-3">
                <v-btn color="success" style="border-radius: 5px;padding:10px;height:auto;" @click="addCartItem">
                  THÊM GIỎ HÀNG
                  <i class="fas fa-shopping-cart " style="font-size:20px;" ></i>
                </v-btn>
              </div>
              <v-alert
                style="margin-top:10px;"
                type="success"
                dense
                :value="!!successMessage"
                outlined
              >
                {{ successMessage }}
              </v-alert>

              <v-alert
                type="error"
                dense
                :value="!!errorMessage"
                outlined
              >
                {{ errorMessage }}
              </v-alert>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <!--<div class="container">-->
      <!--<br>-->
      <!--&lt;!&ndash; Nav tabs &ndash;&gt;-->
      <!--<ul class="nav nav-tabs" role="tablist">-->
        <!--&lt;!&ndash; nav-justified: chinh full &ndash;&gt;-->
        <!--<li class="nav-item">-->
          <!--<a class="nav-link active" data-toggle="tab" href="#home">Mô tả sản phẩm</a>-->
        <!--</li>-->
        <!--<li class="nav-item">-->
          <!--<a class="nav-link" data-toggle="tab" href="#menu1">Đánh giá</a>-->
        <!--</li>-->
        <!--<li class="nav-item">-->
          <!--<a class="nav-link" data-toggle="tab" href="#menu2">Bình luận</a>-->
        <!--</li>-->
      <!--</ul>-->

      <!--&lt;!&ndash; Tab panes &ndash;&gt;-->
      <!--<div class="tab-content">-->
        <!--<div id="home" class="container tab-pane active"><br>-->
          <!--<h3>Mô tả sản phẩm</h3>-->
          <!--<p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>-->
          <!--<p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>-->
          <!--<p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>-->
          <!--<p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>-->
          <!--<p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>-->
        <!--</div>-->
        <!--<div id="menu1" class="container tab-pane fade"><br>-->
          <!--<h3>Đánh giá sản phẩm</h3>-->
          <!--<p>Bạn thấy sản phẩm này như thế nào</p>-->
          <!--<div class="container">-->
            <!--<form action="/action_page.php">-->
              <!--<input class=" mt-3" type="radio" name="gender" value="5_star" checked> 5 sao<ul class="rating">-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star"></li>-->
            <!--</ul>-->
              <!--<input class=" mt-3" type="radio" name="gender" value="4_star"> 4 sao<ul class="rating">-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star disable"></li>-->
            <!--</ul>-->
              <!--<input class=" mt-3" type="radio" name="gender" value="3_star"> 3 sao<ul class="rating">-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star disable"></li>-->
              <!--<li class="fa fa-star disable"></li>-->
            <!--</ul>-->
              <!--<input class=" mt-3" type="radio" name="gender" value="2_star"> 2 sao<ul class="rating">-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star disable"></li>-->
              <!--<li class="fa fa-star disable"></li>-->
              <!--<li class="fa fa-star disable"></li>-->
            <!--</ul>-->
              <!--<input class=" mt-3" type="radio" name="gender" value="1_star"> 1 sao<ul class="rating">-->
              <!--<li class="fa fa-star"></li>-->
              <!--<li class="fa fa-star disable"></li>-->
              <!--<li class="fa fa-star disable"></li>-->
              <!--<li class="fa fa-star disable"></li>-->
              <!--<li class="fa fa-star disable"></li>-->
            <!--</ul>-->

            <!--</form>-->
            <!--<button class="bg-danger text-white" style="border-radius: 5px;padding:5px;" >Submit</button>-->
          <!--</div>-->


        <!--</div>-->
        <!--<div id="menu2" class="container tab-pane fade"><br>-->
          <!--<h3>Bình luận</h3>-->
          <!--<p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>-->
          <!--<p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>-->
          <!--<p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>-->
          <!--<p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <hr>
  </div>
</template>

<script>
import productService from '../services/products.service'
import FormMixin from '../mixins/form'
export default {
  mixins: [ FormMixin ],
  props: ['id'],


  data() {
    return {
      product: {},
      quantity: 1,
    }
  },

  computed: {
    amounts() {
      const one_to_n = [];
      for (let i = 1; i <= this.product.amounts; i++) {
        one_to_n.push(i);
      }
      return one_to_n;
    }
  },

  methods: {
    async init() {
      try {
        const { data: product }= await productService.getById(this.id);
        this.product = product;
      } catch (e) {
        console.log("failed to fetch product!!");
      }
    },

    async addCartItem() {
      await this.$store.dispatch("cart/addCard", { quantity: this.quantity, id: this.id });
      this.showSuccessMessage("Thêm thành công!!")
    },
  },

  mounted() {
    this.init();
  }

}
</script>

<style lang="stylus" >

.v-text-field > .v-input__control > .v-input__slot::before
.v-text-field > .v-input__control > .v-input__slot::after
  width 0% !important
</style>
