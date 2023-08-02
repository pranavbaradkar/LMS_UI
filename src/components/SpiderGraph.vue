<template>
  <div class="spider-graph">
    <canvas ref="canvas"></canvas>
  </div>
</template>

  
  <script>
  import Chart from 'chart.js/auto';

  export default {
    props: {
      data: {
        type: Array,
        required: true
      },
      options: {
        type: Object,
        default() {
          return {
            responsive: true,
            maintainAspectRatio: false,
            scale: {
              ticks: {
                beginAtZero: true,
                max: 10
              }
            }
          };
        }
      }
    },
    mounted() {
      this.renderChart();
    },
    watch: {
      data() {
        this.renderChart();
      },
      options() {
        this.renderChart();
      }
    },
    methods: {
      renderChart() {
        const ctx = this.$refs.canvas.getContext('2d');
  
        if (this.chart) {
          this.chart.destroy();
        }
  
        this.chart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: this.data.map(item => item.label),
            datasets: [
              {
                data: this.data.map(item => item.value),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)',
              }
            ],
          },
          options: this.options
        });
      }
    }
  };
  </script>
  