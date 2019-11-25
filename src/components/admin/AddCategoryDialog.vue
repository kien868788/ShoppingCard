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
        {{ isEditing ? 'Sửa thể loại' : 'Thêm thể loại'}}
      </v-card-title>
      <v-card-actions>
        <v-container>
          <v-row>
            <v-container fluid>
              <v-form ref="form">
                <v-row>
                  <v-col cols="3">
                    <v-subheader class="font-weight-bold pt-6 px-0">Tên thể loại<span class="red--text">&ensp;*</span></v-subheader>
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
                    <v-subheader class="font-weight-bold pt-6 px-0">Thể loại cha<span class="red--text">&ensp;*</span></v-subheader>
                  </v-col>
                  <v-col cols="9">
                    <v-text-field
                      placeholder="Đây là thể loại cha"
                      v-model="parent"
                      list="list-parent"
                    ></v-text-field>
                    <datalist id="list-parent" style="width: 100%">
                      <option class="form-control" v-for="category in categories">{{ category.name }}</option>
                    </datalist>
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
import ValidationMixin from '../../mixins/validation'
import FormMixin from '../../mixins/form'
import categoryService from '../../services/category.service'

export default {

  mixins: [ValidationMixin, FormMixin],

  props: {
    visible: Boolean,
    isEditing: Boolean,
    categories: Array,
  },

  data() {
    return {
      name: '',
      parent: '',
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

    category() {
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
          // await productService.update(this.product._id, this.getBuiltItem());
          this.showSuccessMessage("Chỉnh sửa sản phẩm thành công!!")
          this.$emit('save');
        } catch (e) {
          this.showErrorMessage("Chỉnh sửa sản phẩm thất bại!!")
        }
        return;
      }

      try {
        await categoryService.create(this.getBuiltItem());
        this.showSuccessMessage("Thêm sản phẩm thành công!!")
        this.$emit('save');
        this.clearInput();
      } catch (e) {
        this.showErrorMessage("Thêm sản phẩm thất bại!!")
      }
    },

    closeDialog() {
      this.$emit('update:visible', false);
    },


    getBuiltItem() {
      return {
        ...this.category,
        name: this.name,
        parent: this.parent
      }
    },

    init() {
      this.name = this.category.name || '';
      this.parent = this.category.parent.name || '';
    }
  },
}
</script>

<style lang="stylus">

</style>
