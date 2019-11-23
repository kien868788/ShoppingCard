<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end py-0">
      <ul class="navbar-nav">
        <li class="navbar-brand">
          <img src ="../assets/img/telephone.png" alt="telephone" style="width:30px;">
        </li>
        <li class="navbar-text mr-5">
          <div class="text-danger">Hotline: 0868788245</div>
        </li>
        <li class="nav-item">
          <div class="nav-link">
            <i class="far fa-newspaper"></i>
            Thông báo
          </div>
        </li>

        <li class="nav-item">
          <div class="nav-link">
            <i class="fas fa-hands-helping"></i>
            Trợ Giúp
          </div>
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
          <div class="nav-link clickable">
            {{ `Xin chào ${$currentUser.fullName || 'bạn'}` }}
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

    <div class="navbar navbar-expand-md navbar-dark bg-light mb-0 py-0 sticky-top" v-if="!isAdmin()">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/logo.png" alt="logo" width="50%">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-secondary"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li>
            <button class="dropbtn active" >HOME</button>
          </li>
          <li v-for="dropdown in dropdowns">
            <div class="dropdown">
              <button class="dropbtn">{{ dropdown.text }}</button>
              <div class="dropdown-content">
                <div class="item" v-for="item in dropdown.items">
                  <a
                    v-for="(text, index) in item"
                    href="#"
                    :class="index !== 0 ? 'border_bottom' : 'dropdown-item__head'"
                  >
                    {{ text }}
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <form class="form-inline my-auto mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" style="height: 35px;">
          <button class="btn btn-outline-secondary mr-sm-2" type="button"><img src="../assets/img/search.png" alt="search"  style="width: 20px"></button>
          <button class="btn btn-outline-secondary" type="button"><img src="../assets/img/cart.png" alt="search"  style="width: 20px"></button>
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

export default {

  components: {
    LoginDialog
  },

  data() {
    return {
      makeLogout,
      loginDialogVisible: false,
      defaultLoginDialogTab: 'login',
      dropdowns: [
        {
          text: "ÁO NAM",
          items: [
            [
              "ÁO SO MI NAM", "Áo sơ mi hàn quốc",
              "Áo sơ mi họa tiết",
              "Áo sơ mi caro",
              "Áo sơ mi ngắn tay",
              "Áo sơ mi jean",
            ]
          ]
        },
        {
          text: "ÁO NAM",
          items: [
            [
              "ÁO SO MI NAM",
              "Áo sơ mi hàn quốc",
              "Áo sơ mi họa tiết",
              "Áo sơ mi caro",
              "Áo sơ mi ngắn tay",
              "Áo sơ mi jean",
            ],
            [
              "ÁO SO MI NAM",
              "Áo sơ mi hàn quốc",
              "Áo sơ mi họa tiết",
              "Áo sơ mi caro",
              "Áo sơ mi ngắn tay",
              "Áo sơ mi jean",
            ],
            [
              "ÁO SO MI NAM",
              "Áo sơ mi hàn quốc",
              "Áo sơ mi họa tiết",
              "Áo sơ mi caro",
              "Áo sơ mi ngắn tay",
              "Áo sơ mi jean",
            ],
            [
              "ÁO SO MI NAM",
              "Áo sơ mi hàn quốc",
              "Áo sơ mi họa tiết",
              "Áo sơ mi caro",
              "Áo sơ mi ngắn tay",
              "Áo sơ mi jean",
            ],
          ]
        },
      ],
    };
  },

  methods: {
    openLoginDialog(isLogin) {
      this.defaultLoginDialogTab = isLogin ? 'login' : 'register';
      this.loginDialogVisible = true;
    },
    ...mapGetters({ isAdmin: 'user/isAdmin'}),
  },
}
</script>

<style lang="stylus" scoped>
.register
  border-right 1px solid rgb(87, 87, 85)

.dropdown-item__head
  font-style oblique
  font-weight bold

.navbar .dropdown-toggle, .navbar .dropdown-menu a {
  cursor: pointer;
}

.navbar .dropdown-item.active, .navbar .dropdown-item:active {
  color: inherit;
  text-decoration: none;
  background-color: inherit;
}

.navbar .dropdown-item:focus, .navbar .dropdown-item:hover {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa;
}

@media (min-width: 767px) {
  .navbar .dropdown-toggle:not(.nav-link)::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .5em;
    vertical-align: 0;
    border-bottom: .3em solid transparent;
    border-top: .3em solid transparent;
    border-left: .3em solid;
  }
}
/* nav-item */
.dropbtn {
  background-color:inherit;
  color:black;
  margin-right: 20px;
  font-size: 17px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  left: -200px;
  min-width: 1200px;
  /* position: fixed !important;
  width: 70% !important;
  left: 15% !important;
  top: 120px; */
  background-color: #f1f1f1;


  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {color: green;text-decoration: none;}

.dropdown:hover .dropdown-content {
  display: block;

}
.dropdown:focus .dropdown-content {display: block;}
.dropdown:hover .dropbtn {color:green;}

/* item */
.item {
  display: inline-block;
  /* float: left; */
  /* width: 25%;  */
  margin-right: 20px;
  padding:15px;
  /* overflow:auto; */
}
.border_bottom {
  border-bottom: 1px solid rgb(122, 124, 122);
}
.bottom{
  background-color: rgb(32, 32, 32);
  color: white;
  padding: 20px 100px 20px 100px;

}

.fa{
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
}
body{
  position: relative;
}
.background{
  background: black;
  width: 100%;
  height: 100%;
  display: none;
  opacity: 0.5;
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 2;
}

.login-form, .register-form{
  width: 500px;
  display: none;
  background: white;
  position: fixed;
  top: 400px;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  z-index: 3;
  padding: 30px;
}
.login-form .input, .register-form .input{
  width: 440px;
  margin: 10px 0 10px 0;
  padding: 5px;
}
.button{
  float: right;
  background: #ee4d2d;
  width: 150px;
  height: 30px;
  border: #ee4d2d;
  color: white;
}
.login-form a{
  color: cadetblue;
}
.login-form a:hover{
  text-decoration: none;
}
.register-form a:hover{
  text-decoration: none;
}
.register-form span{
  color: #ee4d2d;
}
.button-register{
  float: right;
  color: #ee4d2d;
  cursor: pointer;
}
.login-form h4, .register-form h4{
  float: left;
}
.login-form .close-login, .register-form .close-register{
  position: fixed;
  top: 4px;
  right: 4px;
  cursor: pointer;
}
.login, .register{
  cursor: pointer;
}

.show{
  display: block;
}

</style>
