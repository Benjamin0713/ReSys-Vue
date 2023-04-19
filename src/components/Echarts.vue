<template>
  <div id="main" style="width: 800px;height: 800px">

  </div>
</template>

<script>
export default {
  name: 'index',
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
          radius: [50, '80%']
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
          data: [85, 92, 94],
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
};
</script>