export default {
  data() {
    return {
      successMessage: undefined,
      errorMessage: undefined
    }
  },

  methods: {
    showErrorMessage(message) {
      this.errorMessage = message;
    },

    showSuccessMessage(message) {
      this.successMessage = message;
    },

    clearInput(target = 'form') {
      if (this.$refs[target]) {
        this.$refs[target].reset();
      }
    },

    clearNotification() {
      this.successMessage = undefined;
      this.errorMessage = undefined;
    }
  },
}
