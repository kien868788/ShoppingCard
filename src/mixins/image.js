import { IMAGE_URL } from "@/.env"
export default {
  methods: {
    $getImageUrl(image_path) {
      return `${IMAGE_URL}/${image_path}`;
    },

  },

  computed: {
    $defaultImage() {
      return '@/assets/image/index.jpeg'
    }
  },


}
