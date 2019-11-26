<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="categories"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Danh sách thế loại</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          >
          </v-divider>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="newCategory()"> Thêm thể loại</v-btn>
        </v-toolbar>
      </template>

      <template v-slot:item.action="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editCategory(item)"
        >
          edit
        </v-icon>
        <v-icon
          small
          @click="deleteCategory(item)"
        >
          delete
        </v-icon>
      </template>
    </v-data-table>

    <add-category-dialog
      :visible.sync="addDialogVisible"
      :categories="categories"
      :category="editedCategory"
      :isEditing="isEditing"
      @save="fetCategories"
    >
    </add-category-dialog>
  </v-container>
</template>

<script>
  import categoryService from '../../services/category.service'
  import AddCategoryDialog from '../admin/AddCategoryDialog'
  export default {
    components: {
      AddCategoryDialog
    },

    data() {
      return {
        isEditing: false,
        addDialogVisible: false,
        categories: [],
        headers: [
          {
            text: "Tên thể loại",
            align: "center",
            value: 'name'
          },
          {
            text: "Thể loại cha",
            align: "center",
            value: 'parent.name'
          },
          { text: '', value: 'action', sortable: false },
        ],

        defaultCategory: {
          name: '',
          parent: '',
        }
      }
    },

    mounted() {
      this.init();
    },

    methods: {
      async fetCategories() {
        const { data: categories } = await categoryService.getAll();
        this.categories = categories;
      },

      async init() {
        this.fetCategories()
      },


      editCategory (item) {
        this.isEditing = true;
        this.editedCategory = Object.assign({}, item)
        this.addDialogVisible = true;
      },

      newCategory() {
        this.isEditing = false;
        this.addDialogVisible = true
      },

      async deleteCategory ({ _id }) {
        if (confirm('Bạn chắc chắn muốn xóa thể loại này?')) {
          await categoryService.remove(_id);
          this.fetCategories();
        }
      },
    },
  }
</script>

<style scoped>

</style>
