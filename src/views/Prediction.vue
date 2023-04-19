<template>
  <div>
    <div id="main" style="width: 100%;height: 750px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
    this.myecharts()
  },
  methods: {
    myecharts(){
      var myChart = this.$echarts.init(document.getElementById('main'),'dark');
      // 指定图表的配置项和数据
      var option = {
        title: [
          {
            text: '综合成材率预测'
          }
        ],
        polar: {
          radius: [60, '90%']
        },
        angleAxis: {
          max: 100,
          startAngle: 75
        },
        radiusAxis: {
          type: 'category',
          data: ['成材率', '成锭率', '综合成材率']
        },
        tooltip: {},
        series: {
          type: 'bar',
          data: [25, 50, 100],
          coordinateSystem: 'polar',
          label: {
            show: true,
            position: 'middle',
            formatter: '{b}: {c}'
          }
        }
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>