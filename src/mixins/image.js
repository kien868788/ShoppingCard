import { API_URL } from "@/.env"
export default {
  methods: {
    $getImageUrl(id) {
      console.log(`${API_URL}/image/${id}`)
      return `${API_URL}/image/${id}`;
    }
  }
}
