<template>
  <v-dialog
    :value="visible"
    max-width="600"
    @keydown.esc="closeDialog()"
    @click:outside="closeDialog()"
  >
    <v-card
      dense
      class="mx-auto"
    >
      <v-card-title>
         Thêm sản phẩm
      </v-card-title>
      <v-card-actions>
        <v-container>
          <v-row justify="center">
            <file-pond
              ref="filepond"
              class-name="admin-product__filepond"
              name="image"
              allow-multiple
              :server="serverConfig"
              :files="initImages"
              :onremovefile="removeImage"
            >
            </file-pond>
          </v-row>
          <v-row>
            <v-container fluid>
              <v-form ref="form">
                <v-row>
                  <v-col cols="3">
                    <v-subheader class="font-weight-bold pt-6 px-0">Tên<span class="red--text">&ensp;*</span></v-subheader>
                  </v-col>
                  <v-col cols="9">
                    <v-text-field
                      placeholder="Nhập tên"
                      v-model="name"
                      :rules="[rules.required]"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3">
                    <v-subheader class="font-weight-bold pt-6 px-0">Thể loại<span class="red--text">&ensp;*</span></v-subheader>
                  </v-col>
                  <v-col cols="9">
                    <v-autocomplete
                      :items="categories"
                      v-model="category"
                      item-text="name"
                      item-value="name"
                      :rules="[rules.required]"
                    ></v-autocomplete>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3">
                    <v-subheader class="font-weight-bold pt-6 px-0">Giá gốc<span class="red--text">&ensp;*</span></v-subheader>
                  </v-col>
                  <v-col cols="9">
                    <v-text-field
                      placeholder="Nhập giá"
                      v-model="price"
                      :rules="[rules.integer, rules.required]"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3">
                    <v-subheader class="font-weight-bold pt-6 px-0">Số lượng<span class="red--text">&ensp;*</span></v-subheader>
                  </v-col>
                  <v-col cols="9">
                    <v-text-field
                      placeholder="Nhập số lượng"
                      v-model="amounts"
                      :rules="[rules.integer, rules.required]"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3">
                    <v-subheader class="font-weight-bold pt-6 px-0">Giá khuyến mãi</v-subheader>
                  </v-col>
                  <v-col cols="9">
                    <v-text-field
                      placeholder="Nhập giá khuyễn mãi"
                      v-model="discountPrice"
                      :rules="[rules.integer]"
                    ></v-text-field>
                  </v-col>
                </v-row>

              </v-form>

              <v-alert
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


              <v-row justify="center">
                <v-btn color="success" @click="add" min-width="300">{{ isEditing ? 'Chỉnh sửa' : 'Thêm' }}</v-btn>
              </v-row>

            </v-container>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { API_URL } from '@/.env'
import ValidationMixin from '../../mixins/validation'
import FormMixin from '../../mixins/form'
import productService from '../../services/products.service'
import $axios from 'axios'

export default {

  mixins: [ValidationMixin, FormMixin],

  props: {
    visible: Boolean,
    isEditing: Boolean,
    product: Object,
    categories: Array,
  },

  computed: {
    initImages() {
      return this.product.images
        .map(image => ({
          source: image,
          options: {
            type: 'local'
          }
        }));
    }
  },

  data() {
    return {
      serverConfig: {
        process: {
          url: `${API_URL}/image/upload`,
          method: 'POST',
          withCredentials: false,
          headers: {},
          timeout: 7000,
          onload: response => JSON.parse(response).data
        },

        load: async (source, load, error, progress, abort) => {
          let blobObject;

          try {
            const resp =  await $axios.get(`${API_URL}/image/${source}`, { responseType: 'blob' });
            blobObject = resp.data;
          } catch (e) {
            error("Can't get image");
          }

          progress(true, 0, 1024);

          load(blobObject);

          return {
            abort: () => {
              abort();
            }
          };
        }
      },

      name: '',
      category: '',
      discountPrice: 0,
      price: 0,
      amounts: 0
    }
  },

  watch: {
    visible(val) {
      if (!val) {
        setTimeout(() => {
          this.clearInput();
          this.clearNotification();
        }, 200)
      }
    },

    product() {
      this.init();
    }
  },

  methods: {

    async add() {
      if (!this.$refs.form.validate()) {
        return;
      }

      if (this.isEditing) {
        try {
          await productService.update(this.product._id, this.getBuiltItem());
          this.showSuccessMessage("Chỉnh sửa sản phẩm thành công!!")
          this.$emit('save');
        } catch (e) {
          this.showErrorMessage("Chỉnh sửa sản phẩm thất bại!!")
        }
        return;
      }

      try {
        await productService.create(this.getBuiltItem());
        this.showSuccessMessage("Thêm sản phẩm thành công!!")
        this.$emit('save');
        this.clearInput();
      } catch (e) {
        this.showErrorMessage("Thêm sản phẩm thất bại!!")
      }
    },

    removeImage(error, file) {
      console.log(error);
      console.log(file);
    },


    closeDialog() {
      this.$emit('update:visible', false);
    },


    getBuiltItem() {
      return {
        ...this.product,
        name: this.name,
        category: this.category,
        price: this.price,
        discountPrice: this.discountPrice || 0,
        amounts: this.amounts,
        images: this.$refs.filepond.getFiles().map(file => file.serverId)
      }
    },

    init() {
      this.name = this.product.name || '';
      this.category = this.product.category.name || '';
      this.price = this.product.price || 0;
      this.discountPrice = this.product.discountPrice || 0;
      this.amounts = this.product.amounts || 0;
    }
  },
}
</script>

<style lang="stylus">
  .admin-product__filepond
    width 550px
    height 250px

  .filepond--item
    width: calc(33% - .5em)
    height: calc(33% - .5em)

</style>
