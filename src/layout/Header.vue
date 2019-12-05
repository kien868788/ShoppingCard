<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end py-0">
      <ul class="navbar-nav">
        <li class="navbar-brand">
          <img src ="../assets/img/telephone.png" alt="telephone" style="width:20px;">
        </li>
        <li class="navbar-text mr-5">
          <div class="text-yellow">Hotline: 0868788245</div>
        </li>
        <li class="nav-item " v-show="!$currentUser._id">
          <div class="nav-link register clickable" @click="openLoginDialog()">
            Đăng Ký
          </div>
        </li>

        <li class="nav-item" v-show="!$currentUser._id">
          <div class="nav-link clickable" @click="openLoginDialog(true)">
            Đăng Nhập
          </div>
        </li>

        <li class="nav-item" v-if="$currentUser._id">
          <div class="nav-link clickable" @click="$router.push({ name: 'user-infor'})">
             {{ greeting }}
          </div>
        </li>

        <li class="nav-item" v-if="$currentUser._id" @click="makeLogout">
          <div class="nav-link clickable">
            Đăng Xuất
            <i class="fa fa-sign-out"></i>
          </div>
        </li>

      </ul>
    </nav>

    <div class="navbar navbar-expand-md navbar-dark color-nav mb-0 py-0 sticky-top" v-if="!isAdmin()">
      <router-link class="navbar-brand" :to="{ name: 'index' }">
        <img src="../assets/img/logo.png" alt="logo" width="50%">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-secondary"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li v-for="(dropdown,j) in dropdowns" :key="j">
            <div class="dropdown">
              <button class="dropbtn">{{ dropdown.text }}</button>
              <div class="dropdown-content">
                <div class="mega-item">
                  <div class="item" v-for="(item,j) in dropdown.items" :key="j">
                  <ul>
                    <li
                    v-for="(text, index) in item" :key="index"
                    :style="index == 0 ? 'list-style: none' : ''">
                      <router-link
                        :to="{ name: 'product-by-category', params: { categoryId: text.id }}"
                         :class="index !== 0 ? 'border_bottom' : 'dropdown-item__head'"
                       >
                       {{ text.name }}
                     </router-link>
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <form class="form-inline my-auto mt-md-0">
          <input class="form-control mr-sm-2" v-model="keyword" type="text" placeholder="Search" aria-label="Search" style="height: 35px;">
          <button class="btn btn-outline-secondary mr-sm-2" type="button"><img src="../assets/img/search.png" alt="search"  style="width: 20px" @click="$router.push({ name: 'product-search', params: {keyword }})"></button>
          <v-badge
            :value="numberOfProduct"
            color="red"
            overlap
            v-if="$currentUser._id"
          >
            <template v-slot:badge>
              {{ numberOfProduct }}
            </template>
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="$router.push({name: 'carts-detail'})"
            >
              <img src="../assets/img/cart.png" alt="search"  style="width: 20px">
            </button>
          </v-badge>
        </form>
      </div>
    </div>
    <login-dialog
      :visible.sync="loginDialogVisible"
      :default-tab="defaultLoginDialogTab"
    >
    </login-dialog>
  </div>
</template>

<script>
import LoginDialog from '../components/Login';
import { makeLogout } from "../services/auth.service";
import { mapGetters } from 'vuex';
import CategoryService from '../services/category.service'
export default {

  components: {
    LoginDialog
  },

  data() {
    return {
      makeLogout,
      loginDialogVisible: false,
      defaultLoginDialogTab: 'login',
      dropdowns: [],
      keyword: ''
    };
  },

  mounted() {
    this.getCategories();
  },

  computed: {
    greeting() {
      return `Xin chào ${this.$currentUser.fullName || 'bạn'}`;
    },
    ...mapGetters({ numberOfProduct: 'cart/numberOfProduct'}),
  },

  methods: {
    openLoginDialog(isLogin) {
      this.defaultLoginDialogTab = isLogin ? 'login' : 'register';
      this.loginDialogVisible = true;
    },
    ...mapGetters({ isAdmin: 'user/isAdmin'}),

    async getCategories() {
      const {data: parentCategories} = await CategoryService.getAllWithRelation();
      let dropdownsItems = []
      parentCategories.forEach(function(parentCategorie) {
        let items = []
        parentCategorie.subCategories.forEach(function(subCategory) {
          let subItems = []
          subItems.push({
            name: subCategory.name,
            id: subCategory._id
          })
          subCategory.subCategories.forEach(function(secondSubCategory) {
            subItems.push({
              name: secondSubCategory.name,
              id: secondSubCategory._id
            })
          })
          items.push(subItems)
        })
        dropdownsItems.push({
          text: parentCategorie.name,
          items: items
        })
      });
      this.dropdowns = dropdownsItems
    }
  },
}
</script>

<style lang="stylus" scoped>
</style>
