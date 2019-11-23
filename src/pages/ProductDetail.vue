<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-4">
          <div id="demo" class="carousel slide carousel-fade" data-ride="carousel" data-interval="4000">
            <!-- The slideshow -->
            <v-carousel>
              <v-carousel-item
                src="@/assets/img/clothes.png"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
              <v-carousel-item
                src="@/assets/img/clothes2.jpg"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
              <v-carousel-item
                src="@/assets/img/clothes3.jpg"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </div>
        </div>
        <div class="col-sm-6">
          <div>
            <p style="font-size:25px;">ÁO THUN REGULAR THÊU TÚI NGỰC - KEM 846</p>
            <ul class="rating">
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star disable"></li>
            </ul>
            <div class="row">
              <p class="col-sm-3" style="font-style:unset;margin-top:11px;">Giá bán:</p>
              <div class="col-sm-4 text-warning"style="font-size:25px;margin-top:3px;">350.000</div>
            </div>
            <div class="row">
              <p class=" col-sm-3 " style="font-style:unset;">Tình trạng:</p>
              <div class="col-sm-4" style="color:red;">Còn hàng</div>
            </div>
            <hr>
            <div class="row">
              <p class=" col-sm-5 " style="font-style:unset;">Trọng lượng sản phẩm:</p>
              <div class="col-sm-3">250 gram</div>
            </div>

            <p style="font-style:unset;">Điểm nổi bật:</p>
            <div>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</div>
            <hr>
            <div class="row">
              <div class="col-sm-5">
                <p>Size *</p>
                <div class="form-group" >
                  <select class="form-control text-dark" id="size" style="background: rgb(223, 221, 221);">
                    <option>S</option>
                    <option>L</option>
                    <option>M</option>
                    <option>XL</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-5">
                <p>Số lượng *</p>
                <div class="form-group">
                  <select class="form-control" id="so luong"style="background: rgb(223, 221, 221);">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>

                  </select>
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col -sm-1">
                <button  class="bg-danger text-white" style="border-radius: 5px;padding:5px;">
                  MUA NGAY
                </button>
              </div>
              <div class="col -sm-3">
                <button class="bg-primary text-white"style="border-radius: 5px;padding:5px;">
                  THÊM GIỎ HÀNG
                  <img src="../assets/img/shopping-cart.png" alt="cart_">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="container">
      <br>
      <!-- Nav tabs -->
      <ul class="nav nav-tabs" role="tablist">
        <!-- nav-justified: chinh full -->
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#home">Mô tả sản phẩm</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#menu1">Đánh giá</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#menu2">Bình luận</a>
        </li>
      </ul>

      <!-- Tab panes -->
      <div class="tab-content">
        <div id="home" class="container tab-pane active"><br>
          <h3>Mô tả sản phẩm</h3>
          <p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>
          <p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>
          <p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>
          <p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>
          <p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>
        </div>
        <div id="menu1" class="container tab-pane fade"><br>
          <h3>Đánh giá sản phẩm</h3>
          <p>Bạn thấy sản phẩm này như thế nào</p>
          <div class="container">
            <form action="/action_page.php">
              <input class=" mt-3" type="radio" name="gender" value="5_star" checked> 5 sao<ul class="rating">
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
            </ul>
              <input class=" mt-3" type="radio" name="gender" value="4_star"> 4 sao<ul class="rating">
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star disable"></li>
            </ul>
              <input class=" mt-3" type="radio" name="gender" value="3_star"> 3 sao<ul class="rating">
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star disable"></li>
              <li class="fa fa-star disable"></li>
            </ul>
              <input class=" mt-3" type="radio" name="gender" value="2_star"> 2 sao<ul class="rating">
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star disable"></li>
              <li class="fa fa-star disable"></li>
              <li class="fa fa-star disable"></li>
            </ul>
              <input class=" mt-3" type="radio" name="gender" value="1_star"> 1 sao<ul class="rating">
              <li class="fa fa-star"></li>
              <li class="fa fa-star disable"></li>
              <li class="fa fa-star disable"></li>
              <li class="fa fa-star disable"></li>
              <li class="fa fa-star disable"></li>
            </ul>

            </form>
            <button class="bg-danger text-white" style="border-radius: 5px;padding:5px;" >Submit</button>
          </div>


        </div>
        <div id="menu2" class="container tab-pane fade"><br>
          <h3>Bình luận</h3>
          <p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>
          <p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>
          <p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>
          <p>Thiết kế Regular của 4MEN ưu tiên những đường may vừa vặn, hạn chế ôm sát nhằm phù hợp với mọi vóc dáng.</p>
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style scoped>

</style>
