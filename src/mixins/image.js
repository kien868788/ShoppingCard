import { API_URL } from "@/.env"
export default {
  methods: {
    $getImageUrl(id) {
      return `${API_URL}/image/${id}`;
    }
  }
}
