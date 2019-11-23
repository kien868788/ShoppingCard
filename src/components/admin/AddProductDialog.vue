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
          <v-row>
            <v-file-input
              v-model="images"
              height="200"
              multiple
              outlined
              :prepend-icon="null"
              accept="image/png, image/jpeg, image/bmp"
            >
              <template v-slot:selection="{ file }">
                <product-image-picker
                  :file="file"
                >
                </product-image-picker>
              </template>
            </v-file-input>
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
}
</script>

<style scoped>

</style>
