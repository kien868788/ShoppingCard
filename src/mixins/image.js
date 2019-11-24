import { IMAGE_URL } from "@/.env"

export default {
  methods: {
    $getImageUrl(file) {
      return IMAGE_URL + file;
    }
  }
}
