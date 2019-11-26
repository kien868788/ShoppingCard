<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="products"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Danh sách sản phẩm</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          >
          </v-divider>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="addDialogVisible = true"> Thêm sản phẩm</v-btn>
        </v-toolbar>
      </template>

      <template v-slot:item.action="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editProduct(item)"
        >
          edit
        </v-icon>
        <v-icon
          small
          @click="deleteProduct(item)"
        >
          delete
        </v-icon>
      </template>
    </v-data-table>

    <add-product-dialog
      :visible.sync="addDialogVisible"
      :categories="categories"
      :product="editedProduct"
      :is-editing="isEditing"
      @save="fetchProducts"
    >
    </add-product-dialog>
  </v-container>
</template>

<script>
import productService from '../../services/products.service'
import categoryService from '../../services/category.service'
import AddProductDialog from '../admin/AddProductDialog'
export default {
  components: {
    AddProductDialog
  },

  watch: {
    addDialogVisible(val) {
      if (!val) {
        setTimeout(() => {
          this.editedProduct = Object.assign({}, this.defaultProduct)
          this.isEditing = false;
        }, 300)
      }
    }
  },

  data() {
    return {
      isEditing: false,
      addDialogVisible: false,
      categories: [],
      headers: [
        {
          text: "Tên sản phẩm",
          align: "center",
          value: 'name'
        },
        {
          text: "Thể loại",
          align: "center",
          value: 'category.name'
        },
        {
          text: "Giá gốc",
          align: "center",
          value: 'price'
        },
        {
          text: "Giá khuyến mãi",
          align: "center",
          value: 'discountPrice'
        },
        {
          text: "Số lượng",
          align: "center",
          value: 'amounts'
        },
        { text: '', value: 'action', sortable: false },
      ],
      products: [],

      defaultProduct: {
        name: '',
        category: {
          name: ''
        },
        images: [],
        discountPrice: 0,
        amounts: 0,
        price: 0
      },

      editedProduct: {
        name: '',
        category: {
          name: ''
        },
        images: [],
        discountPrice: 0,
        amounts: 0,
        price: 0
      },
    }
  },

  mounted() {
    this.init();
  },

  methods: {
    async fetchProducts() {
      const resp = await productService.getAll();
      this.products = resp.data.products || [];
    },

    async init() {
      await this.fetchProducts();
      const { data: categories } = await categoryService.getAll();
      this.categories = categories;
    },


    editProduct (item) {
      this.isEditing = true;
      this.editedProduct = Object.assign({}, item)
      this.addDialogVisible = true;
    },

    async deleteProduct ({ _id }) {
      if (confirm('Bạn chắc chắn muốn xóa sản phẩm này?')) {
        await productService.remove(_id);
        this.fetchProducts();
      }
    },
  },
}
</script>

<style scoped>
</style>
