import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],

  props: {
    chartLabel: Array,
    revenueLabel: String,
    shippingFeeLabel: String,
    chartData: Array
  },
  data() {
    return {
      gradient: null,
      gradient2: null,
    }
  },
  mounted() {
    this.createChart()
  },

  methods: {
    createChart() {
      this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
      this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

      this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
      this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
      this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)');

      this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
      this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
      this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

      this.renderChart({
        labels: this.chartLabel,
        datasets: [
          {
            label: this.revenueLabel,
            borderColor: '#FC2525',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            backgroundColor: this.gradient,
            data: this.chartData[0]
          }, {
            label: this.shippingFeeLabel,
            borderColor: '#05CBE1',
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            borderWidth: 1,
            backgroundColor: this.gradient2,
            data: this.chartData[1]
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    }
  }
}
