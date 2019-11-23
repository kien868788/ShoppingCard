<template>
  <v-container fluid>
    <v-row justify="end" class="mt-4 pr-4">
      <v-btn color="success" @click="addDialogVisible = true"> Thêm sản phẩm</v-btn>
    </v-row>
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="products"
    >
    </v-data-table>
    <add-product-dialog
      :visible.sync="addDialogVisible"
    >
    </add-product-dialog>
  </v-container>
</template>

<script>
import productService from '../../services/products.service'
import AddProductDialog from '../admin/AddProductDialog'
export default {
  components: {
    AddProductDialog
  },

  data() {
    return {
      addDialogVisible: false,
      headers: [
        {
          text: "Tên sản phẩm",
          align: "center",
          value: 'name'
        },
        {
          text: "Thể loại",
          align: "center",
          value: 'category'
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
          value: 'amount'
        },
      ],
      products: []
    }
  },

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      const resp = await productService.getAll();
      this.products = resp.data || [];
    }
  },
}
</script>

<style scoped>

</style>
