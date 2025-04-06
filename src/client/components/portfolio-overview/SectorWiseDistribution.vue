<template>
  <div>
    <!-- Initialize the ref attribute for the chart container -->
    <div ref="sectorDistributionRef" class="width-full" style="height: 400px"></div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, nextTick} from 'vue'
import * as echarts from 'echarts/core'
import {TitleComponent, TooltipComponent} from 'echarts/components'
import {PieChart} from 'echarts/charts'
import {LabelLayout} from 'echarts/features'
import {CanvasRenderer} from 'echarts/renderers'

echarts.use([PieChart, TitleComponent, LabelLayout, CanvasRenderer, TooltipComponent])

const sectorDistributionRef = ref(null)

const sectorDistributionData = [
  {value: 15, name: 'Technology'},
  {value: 13, name: 'Healthcare'},
  {value: 10, name: 'Finance'},
  {value: 10, name: 'Consumer Goods'},
  {value: 8, name: 'Energy'},
  {value: 8, name: 'Utilities'},
  {value: 8, name: 'Materials'},
  {value: 8, name: 'Real Estate'},
]

const option = {
  title: {
    text: 'Sector Wise Distribution',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: `{b}: {d}%`,
  },
  series: [
    {
      name: 'Sector Wise Distribution',
      type: 'pie',
      radius: [20, 120],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8,
      },
      data: sectorDistributionData,
      label: {
        formatter: '{b}: {d}%',
        color: '#1F2937',
        fontFamily: 'sans-serif',
        fontSize: '15',
      },
    },
  ],
}

const initSectorDistribution = () => {
  if (sectorDistributionRef.value) {
    const myChart = echarts.init(sectorDistributionRef.value)
    myChart.setOption(option)

    window.addEventListener('resize', () => myChart.resize())
  } else {
    console.error('SectorDistribution container not found.')
  }
}

onMounted(() => {
  nextTick(() => {
    initSectorDistribution()
  })
})
</script>
