<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="editors"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Danh sách Editor</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          >
          </v-divider>
          <v-spacer></v-spacer>
          <v-btn color="success" @click="newEditor()"> Thêm Editor</v-btn>
        </v-toolbar>
      </template>

      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.email }}</td>
          <td>{{ item.fullName }}</td>
          <td>{{ $showTime(item.createdAt )}}</td>
          <td>
            <v-icon
              small
              @click="deleteEditor(item)"
            >
              delete
            </v-icon>
          </td>
        </tr>
      </template>
    </v-data-table>

    <add-editor-dialog
      :visible.sync="addDialogVisible"
      @save="fetEditors"
    >
    </add-editor-dialog>
  </v-container>
</template>

<script>
  import UserService from '../../services/users.service'
  import AddEditorDialog from '../admin/AddEditorDialog'

  export default {
    components: {
      AddEditorDialog
    },

    data() {
      return {
        addDialogVisible: false,
        editors: [],
        headers: [
          {
            text: "Email",
            align: "left",
          },
          {
            text: "Họ tên",
            align: "left",
          },
          {
            text: "Ngày tham gia",
            align: "left",
          },
          { text: '', value: 'action', sortable: false },
        ],

        defaultEditor: {
          email: '',
          fullName: '',
          createdAt: ''
        }
      }
    },

    mounted() {
      this.init();
    },

    methods: {
      async fetEditors() {
        const { data: users } = await UserService.getAllEditors();
        this.editors = users;
      },

      async init() {
        this.fetEditors()
      },

      newEditor () {
        this.addDialogVisible = true
      },

      async deleteEditor ({ _id }) {
        if (confirm('Bạn chắc chắn muốn xóa Editor này?')) {
          await UserService.remove(_id);
          this.fetEditors();
        }
      },
    },
  }
</script>

<style scoped>

</style>
