<template>
  <v-dialog
    :value="visible"
    max-width="600"
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
              class-name="admin-product__filepond"
              allow-multiple
            >
            </file-pond>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {

  components: {
  },

  props: {
    visible: Boolean
  },

  data() {
    return {
      images: []
    }
  },

  methods: {
    handleFilePondInit: function() {
      console.log('FilePond has initialized');

      // FilePond instance methods are available on `this.$refs.pond`
    }
  }
}
</script>

<style lang="stylus">
  .admin-product__filepond
    width 550px

  .filepond--item
    width: calc(50% - .5em)

</style>
